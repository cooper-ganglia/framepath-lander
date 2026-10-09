# Remaining integrations

## Demo requests

Current path is functional mailto draft preparation, not server delivery. Recipient comes from the existing Oddform marketing site: tyler@oddform.works. Confirm it for a public launch.

To add delivery:

1. Choose an approved email/CRM provider and deploy a same-origin backend endpoint (the static export does not implement one).
2. Validate names/email/organization server-side, cap field lengths, enforce a honeypot and rate limit; add a CAPTCHA only if traffic warrants one.
3. Keep provider API credentials in server-side environment variables. Never add them to NEXT_PUBLIC variables or JavaScript bundles.
4. Send/store only the submitted fields, apply a documented retention policy, and add approved privacy/terms content where required.
5. Return a genuine success only after delivery/queue acceptance; make errors retryable and retain the mailto alternative.
6. Test actual inbox receipt, error handling, abuse controls and accessibility before switching the form's primary action.

## Public domain

Private Sites sample hosting is configured separately from Framepath.ai. No Framepath.ai DNS or production marketing hosting was changed. Static artifact is `out/`. Deploy to the authorized host, configure HTTPS, and verify both routes, all assets, canonical URLs, robots/sitemap, and a representative mobile browser.

## Optional analytics / booking

No analytics, cookies, scheduler, payment service, or external form integration is required by this sample. Add only an approved provider and appropriate privacy handling. There is no invented booking calendar or checkout.

## Product integration

None. The marketing demonstration is deliberately isolated from the real Framepath installation. Customer authentication, media, catalog, and previews remain local to the MAM. Optional local Whisper is implemented in the application. Connect, future Pro visual intelligence, managed operations, and optional cloud AI remain planned/proposed; commercial Whisper entitlement remains undecided. This website neither runs inference nor provisions these services.

## Tooling advisory

Runtime dependency audit currently reports zero vulnerabilities. Five development-only audit entries originate in Next's ESLint plugin → fast-glob → micromatch → braces. The registry currently has no patched braces release for the nested-pattern stack-exhaustion advisory. This toolchain consumes project-owned patterns, is not shipped in the static site, and should be refreshed when a patched upstream dependency is released. No downgrade or forced incompatible audit fix was applied.

Social sharing: Open Graph and Twitter images use the publicly accessible branded image in the existing GitHub repository, with a dedicated branded 1200×630 PNG. Update these absolute image URLs and og:url when moving to the approved Framepath.ai domain. iMessage may cache previously shared URLs; an actual recipient preview has not been independently verified.
