import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Header, Footer } from "@/components/SiteChrome";
export const metadata: Metadata = {
  title: "Product Status & Deployment — Framepath",
  description:
    "Explore Framepath’s media library, local transcription, and customer-owned deployment.",
  alternates: { canonical: "/resources/" },
};
export default function Resources() {
  return (
    <>
      <Header />
      <main id="main">
        <div className="resources-hero wrap">
          <span className="eyebrow">FRAMEPATH RESOURCES</span>
          <h1>
            A clear view of
            <br />
            what’s here. And next.
          </h1>
          <p>
            Product status, media support, and deployment notes for teams
            exploring a local-first media library.
          </p>
        </div>
        <div className="resource-layout wrap">
          <nav className="resource-sidebar" aria-label="Resource sections">
            <Link href="#status">Current product</Link>
            <Link href="#transcription">Local transcription</Link>
            <Link href="#roadmap">What’s on the roadmap</Link>
            <Link href="#formats">Media support</Link>
            <Link href="#deployment">Deployment guide</Link>
            <Link href="#security">Security & backups</Link>
            <Link href="#terminology">Product terminology</Link>
            <Link href="/#demo">Request a demo ↗</Link>
          </nav>
          <div className="resource-content">
            <section id="status">
              <span className="resource-status">
                ACTIVE DEVELOPMENT · REVIEWED OCTOBER 9, 2026
              </span>
              <h2>A useful core, built locally.</h2>
              <p>
                Framepath is in active development. The following workflows are
                implemented in the current repository. This is a capability
                summary, not a general availability announcement, performance
                guarantee, or finalized commercial offer.
              </p>
              <ul>
                <li>
                  Configured storage discovery, incremental scans,
                  mounted-folder indexing, and offline catalog retention.
                </li>
                <li>
                  Video, image, audio, text, PDF, and office/project attachment
                  cataloging.
                </li>
                <li>
                  JPEG thumbnails, browser-compatible video proxies, and
                  25-frame cursor-controlled video card contact sheets.
                </li>
                <li>
                  Keyword, filename, relationship, and transcript search; a
                  unified filter editor with Include/Exclude, All/Any matching,
                  comparisons, precise ranges, active chips, and device-local
                  saved/pinned filters. Paginated grid, list, and indexed folder
                  views.
                </li>
                <li>
                  Installation-wide Tags, People, and Locations with shared
                  profiles; library-scoped Projects and Collections. Associated
                  media and usage counts obey Library permissions.
                </li>
                <li>
                  Multi-selection, atomic Add/Remove/Overwrite metadata
                  operations, authorized original/ZIP downloads, and available
                  generated-quality downloads. Recoverable catalog
                  deletion/restoration leaves original files untouched.
                </li>
                <li>
                  Local accounts, roles, per-Library permission overrides, and
                  server-side authorization.
                </li>
                <li>
                  Persistent background processing, grouped scan history,
                  per-file logs, retry, cancellation, and recoverable
                  finished-history clearing.
                </li>
                <li>
                  Existing-folder role mappings and explicitly confirmed new
                  empty managed-library templates.
                </li>
              </ul>
            </section>
            <section id="transcription">
              <span className="resource-status">
                IMPLEMENTED · OPTIONAL LOCAL WHISPER
              </span>
              <h2>Search the words. Find the passage.</h2>
              <p>
                Queue transcription for selected indexed audio/video clips, or
                optionally queue newly discovered media. Administrators choose a
                supported default Whisper model; selecting an unavailable
                supported model queues its download. Model acquisition needs
                connectivity, while inference uses the installed local runtime
                and model on your server.
              </p>
              <ul>
                <li>
                  Timestamped passages beside the viewer, transcript search,
                  click-to-seek, and timestamp links from asset keyword matches.
                </li>
                <li>
                  Saved current-source transcripts as optional video captions,
                  with Show/Hide controls.
                </li>
                <li>
                  Authorized metadata editors can correct passage wording and
                  Save/Cancel while keeping timestamps intact. Saved corrections
                  update search and captions; conflicting edits are rejected.
                </li>
              </ul>
            </section>
            <section id="roadmap">
              <span className="roadmap-badge">FUTURE UPDATES</span>
              <h2>More possibilities for your archive.</h2>
              <p>
                Automatic shot detection, visual and semantic search, verified
                media ingest, enhanced media matching, and simpler remote-access
                administration are on the roadmap. No release dates are
                announced.
              </p>
            </section>
            <section id="formats">
              <h2>A library for production media.</h2>
              <p>
                Framepath indexes supported video, image, audio, text, PDF, and
                office/project attachment extensions. Preview support depends on
                the installed decoding tools and codecs; indexing a file does
                not guarantee every codec can play in a browser.
              </p>
              <ul>
                <li>
                  Video: generated H.264/AAC browser proxies, thumbnails, and
                  card contact sheets.
                </li>
                <li>Images: generated thumbnails and technical information.</li>
                <li>
                  Audio: native playback where supported and distinct audio-card
                  illustrations; these are not measured waveforms.
                </li>
                <li>PDF: first-page previews using Poppler.</li>
                <li>Text/Markdown: bounded, escaped plain-text previews.</li>
                <li>
                  Office/project attachments: indexed originals for download and
                  use in their native applications.
                </li>
              </ul>
              <p>
                Available generated download-quality options depend on existing
                renditions; arbitrary instant formats or resolutions are not
                promised. Original bytes are separate from generated media.
                Framepath does not rewrite camera files to make previews.
              </p>
            </section>
            <section id="deployment">
              <h2>Your own installation.</h2>
              <p>
                Each organization has an independent Framepath installation: a
                React browser interface, Go application with one embedded
                background worker, PostgreSQL database, mounted source storage,
                and separate generated-media cache. Linux Docker Compose is the
                production target; native macOS development is supported.
              </p>
              <h3>Infrastructure to plan</h3>
              <ul>
                <li>
                  A host for the application and database, with FFmpeg and
                  FFprobe available.
                </li>
                <li>
                  Readable mounted NAS/SAN/local media storage, with originals
                  protected by filesystem permissions and read-only Docker
                  mounts.
                </li>
                <li>
                  Separate generated-media capacity for thumbnails, proxies,
                  contact sheets, and optional Whisper models.
                </li>
                <li>
                  Local network browser access and individual local user
                  accounts.
                </li>
                <li>
                  A backup policy for originals, PostgreSQL, and deployment
                  configuration.
                </li>
              </ul>
              <h3>Remote users connect to your infrastructure</h3>
              <p>
                Direct HTTPS needs a reachable public network address,
                appropriate firewall/port-forwarding rules, a TLS reverse proxy,
                and secure application configuration. Customer computers
                generally have private LAN addresses; external connectivity
                requires deliberate IT setup.
              </p>

              <p>
                Discuss archive size, hardware, and backup requirements during
                deployment planning.
              </p>
            </section>
            <section id="security">
              <h2>Control is a shared responsibility.</h2>
              <p>
                The current implementation uses local password authentication,
                expiring sessions, server-side capability checks, Library-level
                access, and path validation for originals and generated media.
                Viewing a proxy and downloading an original are separate
                permissions.
              </p>
              <p>
                Organizations remain responsible for the host, storage
                permissions, network/firewall, TLS, physical access, backup
                operations, and recovery testing. Framepath does not claim
                compliance certifications or a completed production security
                audit.
              </p>
              <h3>Backups are different from monitoring</h3>
              <p>
                Back up the originals and the PostgreSQL catalog/configuration
                according to your organization’s requirements. Generated
                previews can be regenerated.
              </p>
              <h3>Local operation stays independent</h3>
              <p>
                Local logins, search, and playback run on your installation
                without an Oddform cloud dependency.
              </p>
            </section>
            <section id="terminology">
              <h2>A few shared definitions.</h2>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Term</th>
                    <th scope="col">Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Library",
                      "A secured media area for a department, brand, venue, or team.",
                    ],
                    [
                      "Asset",
                      "A logical catalog item, separate from its physical source file.",
                    ],
                    ["Segment", "A meaningful time range within an asset."],
                    [
                      "Collection",
                      "A curated grouping of assets within one Library.",
                    ],
                    [
                      "Project",
                      "A campaign or production grouping within one Library.",
                    ],
                    [
                      "Person",
                      "An installation-wide, manually identified person profile associated with authorized media, separate from a login account. Not automatic face recognition.",
                    ],
                    [
                      "Location",
                      "An installation-wide place profile associated with authorized media. Optional Google Maps embeds/links use an external service.",
                    ],
                    ["Shoot", "A capture or acquisition session."],
                    ["Ingest", "Bringing footage into a cataloged library."],
                  ].map(([term, meaning]) => (
                    <tr key={term}>
                      <td>{term}</td>
                      <td>{meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Link className="button" href="/#demo">
                Discuss your archive <ArrowUpRight size={16} />
              </Link>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
