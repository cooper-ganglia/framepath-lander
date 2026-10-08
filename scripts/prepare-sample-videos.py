"""Create web proxies, posters and scrub sheets; supplied originals stay read-only."""
from pathlib import Path
import subprocess,json,concurrent.futures
from PIL import Image
root=Path(__file__).resolve().parents[1]
source=Path('/Users/Tyler/Desktop/framepath site sample videos')
items=[('drone_footage_clip.mov','Drone footage','Archive',['Drone','Aerial','Exterior']),('summit17_music_clip_2.mov','Summit 17 · Music close-up','Events',['Music','Performance','Summit 17']),('DAY 3 - Integrity Dome.mov','Integrity Dome · Day 3','Archive',['Integrity Dome','Day 3','Venue']),('joe_writing_clip.mov','Joe writing','Stories',['Writing','Joe','Detail']),('josh_bible_clip.mov','Josh · Bible','Stories',['Josh','Bible','Detail']),('summit17_music_clip.mp4','Summit 17 · Live music','Events',['Live event','Music','Summit 17']),('We Are The Light - MASTER.mov','We Are The Light','Films',['Film','Master','We Are The Light'])]
out=root/'public/assets';out.mkdir(exist_ok=True)
def run(args):
 if args[-1].endswith('.mp4') and Path(args[-1]).exists():return
 if args[-1].endswith('.webp'):
  target=args[-1];args=args[:-5]+['-c:v','png',target+'.png']
  subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y',*args],check=True)
  with Image.open(target+'.png') as im:im.save(target,'WEBP',quality=85)
  Path(target+'.png').unlink()
 else:subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y',*args],check=True)
def prepare(pair):
 i,(name,title,library,tags)=pair;p=source/name
 d=json.loads(subprocess.check_output(['ffprobe','-v','quiet','-show_format','-show_streams','-of','json',str(p)]));v=next(s for s in d['streams'] if s['codec_type']=='video');duration=float(d['format']['duration'])
 run(['-i',str(p),'-map','0:v:0','-map','0:a:0?','-vf',('scale=960:540' if i==6 else 'scale=1280:720:force_original_aspect_ratio=decrease,scale=trunc(iw/2)*2:trunc(ih/2)*2'),'-c:v','libx264','-preset','fast',*(['-b:v','650k','-maxrate','800k','-bufsize','1600k'] if i==6 else ['-crf','26']),'-threads','2','-pix_fmt','yuv420p','-c:a','aac','-b:a','128k','-movflags','+faststart',str(out/f'clip-{i}.mp4')])
 for width,suffix in [(960,''),(400,'-small')]:run(['-ss',str(duration*.2),'-i',str(p),'-frames:v','1','-vf',f'scale={width}:-1','-c:v','libwebp','-quality','85',str(out/f'media-{i}{suffix}.webp')])
 run(['-i',str(p),'-vf',f'fps=12/{duration},scale=320:180:force_original_aspect_ratio=decrease,pad=320:180:(ow-iw)/2:(oh-ih)/2,tile=12x1','-frames:v','1','-c:v','libwebp','-quality','80',str(out/f'scrub-{i}.webp')])
 seconds=round(duration);return dict(title=title,file=name,library=library,tags=tags,time=f'{seconds//60}:{seconds%60:02}',quality=f"{v['height']}p",size=f'{p.stat().st_size/1024/1024:.1f} MB',person=('Joe' if i==3 else 'Josh' if i==4 else ''),location='',index=i,duration=duration,video=f'/assets/clip-{i}.mp4')
with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:assets=list(pool.map(prepare,enumerate(items)))
(root/'components/sample-assets.json').write_text(json.dumps(assets,indent=2)+'\n')
print('Prepared',len(assets),'playable samples. Original media unchanged.')
