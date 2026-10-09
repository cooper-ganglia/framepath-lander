# Requirements & implementation decisions

Read both supplied documents in full:

- `../!reference/Framepath_AI_Codex_Prompt.md` — authoritative product, business, architecture and implementation facts.
- `../!reference/Framepath Website Prompt.txt` — extended creative/presentation reference.
- Supplied Framepath brand guide, PNG logos and screenshot.

Also inspected the separate Framepath repository's architecture, build status, decisions, master specification, CSS and API route registrations. Live application HTTP on 127.0.0.1:8090 responded, but no product sign-in/data changes were performed. Existing uncommitted product work was left untouched.

The later user direction clarified that this is a simple sample marketing site in the style/caliber of Frame.io's main website. The result is a presentation-focused homepage with supporting resources, not another MAM implementation. Frame.io was inspected for pacing only; none of its source, graphics, copy, or proprietary media was used.

## Consolidation

- Hero library illustration introduces product browse/search/preview and metadata.
- Four pillars plus two substantial feature stories replace repeated feature sections.
- Bulk metadata and permissions share one compact row.
- Workflow combines ingest truth, indexing and visible processing.
- Roadmap combines exact-shot concepts, local/cloud AI and fingerprint boundaries.
- Deployment combines custody architecture, local/direct HTTPS/Connect and security.
- Interactive industries provide practical use cases rather than fake customer proof.
- Pricing uses offer categories with request-pricing CTAs; no unapproved numbers.
- FAQ and demo request close the conversion journey.
- Supporting resources hold deeper operational details, status and terminology.

## Conflict resolutions

- Product code/status did not verify a finished media-upload endpoint. Current workflow is storage discovery; upload and copy/verify ingest are planned.
- Sampled SHA-256, not proven pHash/advanced duplicates, is the verified current fingerprint.
- Current video card contact sheets are distinct from planned timeline sprites/dedicated hover loops.
- Existing Segments are partial; automatic shot detection and ranked shot retrieval are concept previews.
- Direct HTTPS needs IT network/TLS setup. Connect is a proposed integrated admin service, not another app or a mandatory relay.
- Commercial packaging is unsettled. Core is not described as universally free, and Pro has no launched license model.
- Oddform is the developer. Sequence Creative is not presented as a parent/subsidiary or required partner.
- No unavailable sign-in, policies, certifications or third-party integrations are implied.

## October 9 product update

The new MARKETING_AGENT_UPDATE_PROMPT.md and verified application status/decisions override earlier AI descriptions. Optional local Whisper, transcript search/seek, corrections and captions are implemented. Tags/People/Locations are installation-wide; Projects/Collections remain Library-scoped and media results/counts retain access checks. Automatic shot authoring/detection, ranked retrieval and wider visual AI remain planned. Implementation does not determine Core/Pro entitlement.

The update preserves approved headlines, gradient accents, navy plan cards, logo treatment, seven supplied videos, mailto conversion and branded sharing metadata. Product captures and three edited walkthroughs add real proof; the interactive sample adds Include/Exclude tag and duration filtering, without browser AI or product API access.
