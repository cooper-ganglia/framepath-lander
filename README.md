# Framepath marketing sample

A polished, responsive marketing website for Framepath.ai. This is a separate sample website, not the Framepath MAM application. No product source, database, original media, or supplied references were modified.

## Run locally

Use Node.js 20.19+ (or a current Node LTS).

```sh
cd '/Users/Tyler/Desktop/Websites/Framepath Marketing Page/site'
npm ci
npm run dev
```

Development: http://127.0.0.1:3100

```sh
npm run check
npm run format:check
npm start
```

`check` runs ESLint, strict TypeScript, and a Next.js production static export. `npm start` serves the exported `out/` at http://127.0.0.1:3101. Set `PORT` to change the production-preview port. Build before starting.

## Structure

- `app/page.tsx`: presentation-led marketing homepage.
- `app/resources/page.tsx`: product status, deployment, formats, security, and terminology.
- `app/globals.css`: brand tokens, responsive layouts, motion and accessible focus styles.
- `components/SiteChrome.tsx`: Header/mobile navigation and Footer.
- `components/LibraryDemo.tsx`: sample keyword search, filters, selection, grid/list, metadata tooltips and native-modal asset detail.
- `components/Interactive.tsx`: industry and deployment tab components, keyboard interactions, DemoForm.
- `public/assets/`: supplied identity, self-hosted Manrope font, responsive WebP demo stills, social preview.
- `scripts/serve.mjs`: dependency-free local static-output preview.
- `docs/`: requirements decisions, integrations, asset provenance, and validation record.
- `.openai/hosting.json`: private sample hosting identity and static output directory.

## Design system

Near-black navy with muted product panels, ice-white type, cyan actions, restrained blue/violet highlights, and the supplied Framepath wordmark. Manrope is self-hosted. Large editorial headlines alternate with realistic media software demonstrations and lighter workflow/pricing sections. Mobile layouts recompose the grid and feature stories. Reduced-motion settings disable transforms and transitions.

## Truthful demonstrations

User-supplied footage is playable through optimized MP4 proxies. Thumbnail scrubbing uses real extracted contact sheets. Original files stay unchanged. Tags and grouping are sample metadata; this is not a connected customer library or processing service. Keyword filtering really works inside the example data. Roadmap shot matching is labeled Concept Preview. AI, upload/verified ingest, advanced duplicate matching, Connect provisioning, and enterprise authentication are not marketed as shipped. Core offer categories have no invented prices or seat limits.

The authoritative Markdown brief takes precedence over the extended TXT. Product repository inspection found storage scanning and cataloging but no finished media-upload flow. See `docs/REQUIREMENTS.md`.

## Lead capture

The form requires only name, email, and organization. Other discovery fields are optional. Native validation and a honeypot apply. It prepares an encoded email draft to the existing Oddform contact, `tyler@oddform.works`; the visitor explicitly opens, reviews, and sends it. It never says a request has been delivered. Nothing is stored or transmitted to a backend by this sample. Mail clients may limit long draft URLs; direct contact remains available.

For server-delivered leads, see `docs/INTEGRATIONS.md`. No client secrets are present.

## Deployment

`npm run build` exports `out/`, which can be hosted on any static host. Upload the directory contents and preserve `/resources/index.html`, `/404.html`, `/robots.txt`, `/sitemap.xml`, `/assets/`, and `/_next/`. Do not rewrite every path to the homepage: both real routes have their own HTML. The export has no production Node/server or product API dependency.

The Sites deployment is an owner-private sample. It does not configure Framepath.ai, expose the sample publicly, or change product networking. For a public launch, connect the authorized Framepath.ai hosting/DNS target, confirm the contact recipient and delivery workflow, and supply appropriate approved policy pages if collecting visitor data. Canonical and sitemap URLs already target the intended Framepath.ai domain.

The intended parent-company link is https://oddform.works. No fake sign-in, documentation portal, testimonials, customer logos, legal pages, or compliance badges were created.
