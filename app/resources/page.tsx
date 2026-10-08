import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Header, Footer } from "@/components/SiteChrome";
export const metadata: Metadata = {
  title: "Product Status & Deployment — Framepath",
  description:
    "What Framepath supports today, what is planned, and how its local-first deployment works.",
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
                ACTIVE DEVELOPMENT · REVIEWED OCTOBER 8, 2026
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
                  Keyword, filename, and relationship search; conventional
                  metadata filters; paginated grid, list, and indexed folder
                  views.
                </li>
                <li>
                  Library-scoped Tags, People, Locations, Projects, and
                  Collections, with profile images and related authorized media.
                </li>
                <li>
                  Multi-selection, atomic bulk metadata editing, and authorized
                  original/ZIP downloads.
                </li>
                <li>
                  Local accounts, roles, per-Library permission overrides, and
                  server-side authorization.
                </li>
                <li>
                  Persistent background processing, grouped scan history,
                  per-file logs, retry, and cancellation.
                </li>
                <li>
                  Existing-folder role mappings and explicitly confirmed new
                  empty managed-library templates. These do not enable verified
                  copy ingest.
                </li>
              </ul>
              <p className="note">
                The current application discovers media already placed in
                connected storage. A completed upload/managed ingest workflow
                was not found. Media-upload, copy verification, and Incoming
                review are treated as roadmap capabilities.
              </p>
            </section>
            <section id="roadmap">
              <span className="roadmap-badge">
                PLANNED / PARTIAL · NO RELEASE DATES ANNOUNCED
              </span>
              <h2>More context. Finer discovery.</h2>
              <p>
                The core library is useful without AI, cloud processing, or a
                managed subscription. These enhancements remain future work
                unless noted below.
              </p>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Capability</th>
                    <th scope="col">Current boundary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Segments & shot retrieval</td>
                    <td>
                      Existing marker playback and person-associated segment
                      views are present. Segment creation/editing, automatic
                      detection, and ranked shot search remain planned.
                    </td>
                  </tr>
                  <tr>
                    <td>Managed ingest</td>
                    <td>
                      Upload, Incoming review, Shoots/Crew, and verified copying
                      into explicitly authorized destinations are planned.
                    </td>
                  </tr>
                  <tr>
                    <td>AI media analysis</td>
                    <td>
                      Semantic search, transcription, OCR, visual descriptions,
                      embeddings, and authorized face identification are
                      planned.
                    </td>
                  </tr>
                  <tr>
                    <td>Media identity</td>
                    <td>
                      Sampled SHA-256 hints support some within-root moves.
                      Full-content integrity, perceptual matching, and advanced
                      duplicate/source review are planned.
                    </td>
                  </tr>
                  <tr>
                    <td>Preview enhancements</td>
                    <td>
                      25-frame video card contact sheets exist. Rich timeline
                      sprites and dedicated hover loops remain planned.
                    </td>
                  </tr>
                  <tr>
                    <td>Connect & Managed</td>
                    <td>
                      Integrated remote-access administration, domain
                      provisioning, managed monitoring, and subscription
                      activation are proposed services.
                    </td>
                  </tr>
                  <tr>
                    <td>Enterprise access</td>
                    <td>
                      SSO, OIDC, LDAP, Active Directory, SAML, and MFA are not
                      verified implemented.
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>Local AI first. Optional cloud compute later.</h3>
              <p>
                Planned Pro functionality may be commercially licensed even when
                processing happens on customer hardware. License terms and
                pricing are not final. Optional future cloud AI may transmit
                audio, keyframes, proxies, or temporary media to a processing
                provider with consent. It will not be a requirement for local
                cataloging or playback.
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
                <li>Audio: native browser playback where supported.</li>
                <li>PDF: first-page previews using Poppler.</li>
                <li>Text/Markdown: bounded, escaped plain-text previews.</li>
                <li>
                  Office/project attachments: indexed originals for download and
                  use in their native applications.
                </li>
              </ul>
              <p>
                Original bytes are separate from generated media. Framepath does
                not rewrite camera files to make previews.
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
                  Separate generated-media capacity for thumbnails, proxies, and
                  contact sheets.
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
                Planned Framepath Connect may provision a branded subdomain such
                as yourteam.framepath.ai and manage DNS/reachability status. DNS
                management is a control-plane convenience. It does not host
                originals, relay video through Oddform, or authenticate every
                local login.
              </p>
              <p className="note">
                No published capacity or throughput guarantee is claimed.
                Large-library benchmarking and production restore drills remain
                future validation work. Discuss archive size and hardware during
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
                previews can be regenerated. Optional Managed services may help
                plan catalog/configuration backups; health alerts do not
                constitute a backup, and Oddform is not promising to back up
                customers’ original videos.
              </p>
              <h3>Local operation stays independent</h3>
              <p>
                Local logins, search, and playback do not require an Oddform
                control plane. Future DNS/subdomain services may depend on
                external systems. The intended model keeps the core local
                library useful when managed services end or an external service
                is unreachable.
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
                    [
                      "Segment",
                      "A meaningful time range within an asset. Authoring/detection is planned.",
                    ],
                    ["Collection", "A curated grouping of assets."],
                    ["Project", "A campaign or production grouping."],
                    [
                      "Person",
                      "An individual associated with media, separate from a login account.",
                    ],
                    [
                      "Location",
                      "A geographical or business place associated with media.",
                    ],
                    [
                      "Shoot",
                      "A capture/acquisition session; first-class workflows are planned.",
                    ],
                    [
                      "Ingest",
                      "Bringing footage into a cataloged library; verified managed-copy workflows are planned.",
                    ],
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
