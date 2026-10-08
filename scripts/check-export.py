"""Verify exported local routes, fragments and referenced static files."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import re

root = Path('out').resolve()
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.ids=set(); self.references=[]
    def handle_starttag(self, tag, attrs):
        data=dict(attrs)
        if data.get('id'): self.ids.add(data['id'])
        for key in ['href','src']:
            if data.get(key): self.references.append(data[key])

pages={}
for source in [root/'index.html',root/'resources/index.html']:
    page=Page();page.feed(source.read_text());pages[source]=page
errors=[];count=0
for source,page in pages.items():
    for ref in page.references:
        url=urlsplit(ref)
        if url.scheme or url.netloc or ref.startswith(('data:','mailto:')):continue
        candidate=(root/unquote(url.path).lstrip('/')) if url.path.startswith('/') else (source.parent/unquote(url.path))
        if not url.path:candidate=source
        if candidate.is_dir():candidate=candidate/'index.html'
        count+=1
        if not candidate.exists():errors.append(f'{source.name}: missing {ref}')
        elif url.fragment and candidate in pages and unquote(url.fragment) not in pages[candidate].ids:errors.append(f'{source.name}: missing fragment {ref}')
for source in (root/'_next/static').rglob('*.css'):
    for ref in re.findall(r'url\([\"\']?([^\"\')]+)',source.read_text()):
        if ref.startswith('/assets/') and not (root/ref.lstrip('/')).exists():errors.append(f'Missing CSS asset {ref}')
assert (root/'robots.txt').exists() and (root/'sitemap.xml').exists()
assert 'https://framepath.ai' in (root/'sitemap.xml').read_text()
if errors:raise SystemExit('\n'.join(errors))
print(f'PASS: {count} local references, fragments, CSS assets, robots and sitemap')
