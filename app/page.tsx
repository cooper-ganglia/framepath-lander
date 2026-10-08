import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  HardDrive,
  Search,
  ShieldCheck,
  Film,
  Folder,
  Download,
  Camera,
  Monitor,
  Server,
  Tags,
  Layers,
  Users,
  Activity,
  ChevronRight,
} from "lucide-react";
import { Header, Footer } from "@/components/SiteChrome";
import LibraryDemo, { MediaImage } from "@/components/LibraryDemo";
import {
  DemoForm,
  DeploymentModes,
  Industries,
} from "@/components/Interactive";
export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero wrap">
          <div className="hero-eyebrow">
            <span className="dot" /> LOCAL-FIRST MEDIA ASSET MANAGEMENT
          </div>
          <h1>
            Find any shot your organization
            <br className="desktop-break" /> has <span>ever captured.</span>
          </h1>
          <p className="hero-copy">
            Turn the storage you already own into a searchable visual library.
            <br className="desktop-break" /> Your originals stay right where
            they belong. With you.
          </p>
          <div className="hero-actions">
            <Link href="#demo" className="button">
              Request a demo <ArrowUpRight size={18} />
            </Link>
            <Link href="#product" className="button secondary">
              Explore Framepath <ArrowRight size={18} />
            </Link>
          </div>
          <div className="hero-proof">
            <span>
              <HardDrive size={14} /> Customer-owned storage
            </span>
            <span>
              <ShieldCheck size={14} /> Local accounts & permissions
            </span>
            <span>
              <Film size={14} /> Browser-based previews
            </span>
          </div>
          <div className="hero-product" id="product">
            <LibraryDemo />
          </div>
          <p className="product-caption">
            <span>YOUR ENTIRE VISUAL HISTORY. ONE CLEAR PICTURE.</span>
            <Link href="/resources/#status">
              Active development · see product status <ArrowUpRight size={13} />
            </Link>
          </p>
        </section>
        <section className="custody wrap">
          <p className="eyebrow">A BETTER HOME FOR WHAT YOU ALREADY OWN</p>
          <h2>
            Your footage.
            <br />
            Your storage. <span>Your infrastructure.</span>
          </h2>
          <p>
            Framepath sits on top of your archive. Your media, catalog,
            previews, and user accounts can all stay on your premises.
          </p>
          <div className="architecture">
            <div>
              <Camera />
              <b>Capture</b>
              <small>Your cameras & media</small>
            </div>
            <ArrowRight className="flow-arrow" />
            <div>
              <HardDrive />
              <b>Your storage</b>
              <small>NAS · SAN · local server</small>
            </div>
            <ArrowRight className="flow-arrow" />
            <div className="architecture-fp">
              <span className="fp-symbol">F</span>
              <b>Framepath</b>
              <small>Catalog + generated previews</small>
            </div>
            <ArrowRight className="flow-arrow" />
            <div>
              <Monitor />
              <b>Your team</b>
              <small>Authorized browsers</small>
            </div>
          </div>
          <div className="custody-bottom">
            <span>
              <Check size={15} /> No mandatory cloud migration
            </span>
            <span>
              <Check size={15} /> Originals remain under your control
            </span>
            <span>
              <Check size={15} /> No cloud dependency for local playback
            </span>
          </div>
        </section>
        <section id="features" className="features wrap section-space">
          <div className="section-heading">
            <span className="eyebrow">FROM ARCHIVE TO EVERYDAY RESOURCE</span>
            <h2>
              The footage is there.
              <br />
              <span>Now put it to work.</span>
            </h2>
            <p>
              A connected workflow for the people who shoot it, organize it, and
              need to use it again.
            </p>
          </div>
          <div className="pillars">
            {[
              [
                Folder,
                "01",
                "Organize",
                "Separate Libraries. Shared context. Tags, People, Locations, Projects, and Collections make an archive understandable.",
              ],
              [
                Search,
                "02",
                "Search",
                "Find assets by keyword, filenames, and cataloged metadata. Combine filters to narrow the footage that matters.",
              ],
              [
                Film,
                "03",
                "Preview",
                "Inspect thumbnails, cursor-controlled contact sheets, and browser-friendly proxies before opening camera originals.",
              ],
              [
                Download,
                "04",
                "Retrieve",
                "Authorized users can download originals individually or in ZIP batches, ready for the next production.",
              ],
            ].map(([Icon, no, title, text]) => {
              const C = Icon as typeof Folder;
              return (
                <article key={String(title)}>
                  <div className="pillar-top">
                    <C size={23} />
                    <span>{String(no)}</span>
                  </div>
                  <h3>{String(title)}</h3>
                  <p>{String(text)}</p>
                </article>
              );
            })}
          </div>
          <div className="feature-split">
            <div className="feature-copy">
              <span className="eyebrow">FIND THE CONTEXT</span>
              <h2>
                Less file hunting.
                <br />
                <span>More editing.</span>
              </h2>
              <p>
                Camera filenames only tell part of the story. Search titles and
                descriptions, connect people and places, and filter the library
                by useful metadata.
              </p>
              <ul className="check-list">
                <li>
                  <Check />
                  Search cataloged keywords and relationships
                </li>
                <li>
                  <Check />
                  Filter by Library, resolution, dates, and more
                </li>
                <li>
                  <Check />
                  Browse indexed folders without changing originals
                </li>
              </ul>
              <Link href="#library-demo" className="text-link">
                Try the illustrated library <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="search-visual">
              <div className="mini-search">
                <Search size={19} />
                <span>stadium</span>
                <span className="key-hint">KEYWORD SEARCH</span>
              </div>
              <div className="filter-chips">
                <span>
                  Library: Sports <ChevronRight size={12} />
                </span>
                <span>Tag: Drone</span>
                <span>Resolution: 4K</span>
              </div>
              <div className="search-result">
                <MediaImage index={0} />
                <div>
                  <span className="tiny-label">SPORTS LIBRARY</span>
                  <h3>Stadium at blue hour</h3>
                  <p>CAM_A_0047.MOV</p>
                  <div className="chips">
                    <span>Stadium</span>
                    <span>Drone</span>
                    <span>Exterior</span>
                  </div>
                  <span className="meta-line">204 MB · 4K · 2:06</span>
                </div>
              </div>
              <div className="metadata-lines">
                <div>
                  <Tags size={14} />
                  <span>Tags</span>
                  <b>Stadium, Drone, Exterior</b>
                </div>
                <div>
                  <Folder size={14} />
                  <span>Project</span>
                  <b>Season launch</b>
                </div>
                <div>
                  <ShieldCheck size={14} />
                  <span>Access</span>
                  <b>Sports · Editor</b>
                </div>
              </div>
              <small className="visual-caption">
                Illustrative search result · manually cataloged metadata
              </small>
            </div>
          </div>
          <div className="feature-split reversed">
            <div className="preview-visual">
              <MediaImage index={3} />
              <div className="preview-controls">
                <Film size={17} />
                <span>INTERVIEW_0021.MOV</span>
                <span>12:14</span>
              </div>
              <div className="preview-metadata">
                <div>
                  <span className="tiny-label">PEOPLE</span>
                  <b>
                    <Users size={15} /> Morgan Lee
                  </b>
                  <small>Engineer · Example person</small>
                </div>
                <div>
                  <span className="tiny-label">TAGS</span>
                  <div className="chips">
                    <span>Interview</span>
                    <span>Engineering</span>
                  </div>
                </div>
              </div>
              <small className="visual-caption">
                Illustrative preview · generated still image
              </small>
            </div>
            <div className="feature-copy">
              <span className="eyebrow">SEE BEFORE YOU OPEN</span>
              <h2>
                Browse the story.
                <br />
                <span>Keep the original.</span>
              </h2>
              <p>
                Move across a video card to inspect representative frames. Open
                a browser proxy for playback, then retrieve the original when
                you’re ready to work.
              </p>
              <p>
                Connect footage to People, Tags, and Projects. A person’s
                profile brings their associated, authorized media into one view.
              </p>
              <Link href="/resources/#formats" className="text-link">
                Explore media support <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
          <div className="operations-grid">
            <article>
              <Layers />
              <h3>One edit. Many assets.</h3>
              <p>
                Select a batch, then add metadata without replacing what’s
                there. Remove and Overwrite stay explicit, intentional
                operations.
              </p>
              <div className="bulk-visual">
                <span>
                  <Check size={13} /> 12 selected
                </span>
                <b>Add tags</b>
                <span className="chip">Season launch +</span>
              </div>
            </article>
            <article>
              <ShieldCheck />
              <h3>Separate libraries. Clear boundaries.</h3>
              <p>
                One installation can serve different departments, with Manager,
                Editor, Viewer, or No Access permissions for each Library.
              </p>
              <div className="permissions-visual">
                <div>
                  Sports <b>Editor</b>
                </div>
                <div>
                  Corporate <b>Viewer</b>
                </div>
                <div>
                  Events <b>No access</b>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section id="workflow" className="workflow light-section">
          <div className="wrap section-space">
            <div className="section-heading">
              <span className="eyebrow">
                A WORKFLOW THAT RESPECTS YOUR ARCHIVE
              </span>
              <h2>
                From stored footage
                <br />
                to a useful library.
              </h2>
              <p>
                Connect an existing mounted folder. Scan and index supported
                media. Generate previews separately. Your originals stay
                untouched.
              </p>
            </div>
            <div className="workflow-steps">
              {[
                [
                  HardDrive,
                  "01",
                  "Connect storage",
                  "Use the archive you already have. No forced reorganization.",
                ],
                [
                  Search,
                  "02",
                  "Discover & index",
                  "Extract technical metadata and sampled file identity.",
                ],
                [
                  Film,
                  "03",
                  "Generate previews",
                  "Thumbnails, video proxies, and card contact sheets.",
                ],
                [
                  Monitor,
                  "04",
                  "Find & use",
                  "Search, inspect, and retrieve through authorized browsers.",
                ],
              ].map(([Icon, n, title, copy]) => {
                const C = Icon as typeof HardDrive;
                return (
                  <div key={String(n)}>
                    <span className="step-number">{String(n)}</span>
                    <C />
                    <h3>{String(title)}</h3>
                    <p>{String(copy)}</p>
                  </div>
                );
              })}
            </div>
            <div className="workflow-detail">
              <div>
                <span className="eyebrow">VISIBLE BACKGROUND WORK</span>
                <h3>
                  Know what’s happening.
                  <br />
                  And what needs attention.
                </h3>
                <p>
                  Grouped scan events keep processing history compact. Inspect
                  stages, open per-file logs, retry failures, and cancel jobs
                  when needed.
                </p>
              </div>
              <div className="jobs-visual">
                <div className="job-title">
                  <Activity size={18} />
                  <b>Library scan · Sports</b>
                  <span>Example event</span>
                </div>
                <details open>
                  <summary>
                    <ChevronRight size={14} /> Generated media{" "}
                    <span>Stage details</span>
                  </summary>
                  <div>
                    Metadata discovery{" "}
                    <b>
                      <Check size={13} /> Complete
                    </b>
                  </div>
                  <div>
                    Thumbnails{" "}
                    <b>
                      <Check size={13} /> Complete
                    </b>
                  </div>
                  <div>
                    Video proxies <b className="processing">Processing</b>
                  </div>
                  <div>
                    Card contact sheets <b>Queued</b>
                  </div>
                </details>
                <p>
                  Illustrative queue · progress reflects real tasks in the
                  product.
                </p>
              </div>
            </div>
            <div className="coming-inline">
              <span className="roadmap-badge">PLANNED INGEST</span>
              <p>
                Upload through Framepath, Incoming review, Shoots, and verified
                copy ingest are on the roadmap. Today, copy media to connected
                storage and scan it into the catalog.
              </p>
            </div>
          </div>
        </section>
        <section className="roadmap wrap section-space" id="roadmap">
          <div className="roadmap-copy">
            <span className="eyebrow">THE NEXT CHAPTER · IN DEVELOPMENT</span>
            <h2>
              Find the moment.
              <br />
              <span>Not just the file.</span>
            </h2>
            <p>
              The vision: search inside long recordings and surface the exact
              useful shot. Local AI analysis, transcription, and semantic search
              are planned enhancements to a useful media library.
            </p>
            <Link href="/resources/#roadmap" className="text-link">
              See what’s built and what’s next <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="segment-visual">
            <div className="segment-header">
              <span>CAM_A_0047.MOV · 42:18</span>
              <span className="roadmap-badge">CONCEPT PREVIEW</span>
            </div>
            <MediaImage index={1} />
            <div className="segment-timeline">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <span />
            </div>
            <div className="segment-match">
              <Search size={19} />
              <div>
                <b>Crowd cheering in the stands</b>
                <span>12:04 → 12:18 · Illustrative timestamped match</span>
              </div>
            </div>
          </div>
          <div className="roadmap-notes">
            <article>
              <span>LOCAL AI · PLANNED</span>
              <h3>Intelligence on your terms.</h3>
              <p>
                Scene descriptions, transcription, OCR, semantic search, and
                authorized face identification are planned for customer
                hardware.
              </p>
            </article>
            <article>
              <span>CLOUD AI · OPTIONAL FUTURE SERVICE</span>
              <h3>More compute, with consent.</h3>
              <p>
                When enabled, relevant audio, keyframes, previews, or
                temporarily transmitted media may leave your premises for
                processing. Cloud AI will not be required for the core library.
              </p>
            </article>
            <article>
              <span>MEDIA IDENTITY · CURRENT + ROADMAP</span>
              <h3>Know what you already have.</h3>
              <p>
                Sampled fingerprints help recognize some within-root moves.
                Full-content duplicate proof and visual source matching remain
                future work.
              </p>
            </article>
          </div>
        </section>
        <section id="deployment" className="deployment section-space">
          <div className="wrap">
            <div className="section-heading">
              <span className="eyebrow">BUILT FOR YOUR STORAGE, NOT OURS</span>
              <h2>
                Your archive.
                <br />
                <span>Your rules.</span>
              </h2>
              <p>
                Run Framepath on existing infrastructure, or discuss an
                Oddform-provisioned system. Hardware from Oddform is optional.
              </p>
            </div>
            <div className="infra-diagram">
              <div className="infra-boundary">
                <span className="boundary-label">
                  <ShieldCheck size={14} /> YOUR INFRASTRUCTURE
                </span>
                <div>
                  <HardDrive />
                  <b>Original media</b>
                  <small>Customer-owned storage</small>
                </div>
                <span className="diagram-plus">+</span>
                <div>
                  <Server />
                  <b>Framepath installation</b>
                  <small>Catalog · previews · local accounts</small>
                </div>
                <ArrowRight className="flow-arrow" />
                <div>
                  <Monitor />
                  <b>Authorized team</b>
                  <small>Browser access</small>
                </div>
              </div>
              <p>
                No mandatory upload to Oddform. No central Oddform server for
                local logins or playback.
              </p>
            </div>
            <DeploymentModes />
            <div id="security" className="security-row">
              <div>
                <ShieldCheck size={30} />
                <h3>
                  Your archive deserves
                  <br />
                  real boundaries.
                </h3>
              </div>
              <div>
                <p>
                  Local authentication and server-side Library authorization
                  protect catalog data, generated previews, and downloads.
                  Generated media stays separate from read-only originals.
                </p>
                <p className="muted">
                  Remote HTTPS requires appropriate network and TLS
                  configuration. SSO, OIDC, LDAP, and MFA are planned. Back up
                  originals, the database, and configuration according to your
                  organization’s policies.
                </p>
                <Link href="/resources/#security" className="text-link">
                  Read deployment & security notes <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="industries" className="wrap section-space">
          <div className="section-heading">
            <span className="eyebrow">FOR TEAMS WITH A VISUAL HISTORY</span>
            <h2>
              Whatever you capture,
              <br />
              <span>make it count.</span>
            </h2>
            <p>
              A living archive for the next edit, campaign, season, or story.
            </p>
          </div>
          <Industries />
        </section>
        <section id="pricing" className="pricing light-section">
          <div className="wrap section-space">
            <div className="section-heading">
              <span className="eyebrow">
                SOFTWARE, DEPLOYMENT & OPTIONAL SERVICES
              </span>
              <h2>
                The right fit for
                <br />
                your infrastructure.
              </h2>
              <p>
                Tell us about your archive, hardware, and team. We’ll discuss
                the right deployment. Commercial packaging and license terms are
                being finalized.
              </p>
            </div>
            <div className="plan-grid">
              <article>
                <span className="eyebrow">THE FOUNDATION</span>
                <h3 className="plan-lockup">
                  <Image
                    src="/assets/logo-optimized.png"
                    width={170}
                    height={41}
                    alt="Framepath"
                  />
                  <span>Core</span>
                </h3>
                <p className="plan-subtitle">Self-hosted media management</p>
                <p>A locally operating library on the storage you control.</p>
                <ul>
                  <li>
                    <Check />
                    Catalog, metadata & keyword search
                  </li>
                  <li>
                    <Check />
                    Previews & originals retrieval
                  </li>
                  <li>
                    <Check />
                    Local accounts & Library permissions
                  </li>
                  <li>
                    <Check />
                    Your own or quoted hardware
                  </li>
                </ul>
                <Link className="button secondary" href="#demo">
                  Discuss a deployment <ArrowUpRight size={16} />
                </Link>
              </article>
              <article className="pro-plan">
                <span className="eyebrow">PLANNED PREMIUM SOFTWARE</span>
                <h3 className="plan-lockup">
                  <Image
                    src="/assets/logo-optimized.png"
                    width={170}
                    height={41}
                    alt="Framepath"
                  />
                  <span>Pro</span>
                </h3>
                <p className="plan-subtitle">Advanced local intelligence</p>
                <p>
                  Planned premium features that can process on customer
                  hardware.
                </p>
                <ul>
                  <li>
                    <Check />
                    Semantic search & intelligent cataloging
                  </li>
                  <li>
                    <Check />
                    Transcription & shot analysis
                  </li>
                  <li>
                    <Check />
                    Local AI processing options
                  </li>
                  <li>
                    <Check />
                    License model to be confirmed
                  </li>
                </ul>
                <Link className="button" href="#demo">
                  Talk about Pro <ArrowUpRight size={16} />
                </Link>
              </article>
              <article>
                <span className="eyebrow">OPTIONAL · PROPOSED SERVICES</span>
                <h3 className="plan-lockup">
                  <Image
                    src="/assets/logo-optimized.png"
                    width={170}
                    height={41}
                    alt="Framepath"
                  />
                  <span>Managed</span>
                </h3>
                <p className="plan-subtitle">
                  Help operating your installation
                </p>
                <p className="plan-connect">
                  Includes Framepath <strong>Connect</strong>
                </p>
                <p>
                  Deployment and ongoing services scoped to your organization.
                </p>
                <ul>
                  <li>
                    <Check />
                    Support, maintenance & updates
                  </li>
                  <li>
                    <Check />
                    Health alerts & capacity reporting
                  </li>
                  <li>
                    <Check />
                    Catalog/config backup planning
                  </li>
                  <li>
                    <Check />
                    Planned managed DNS & connectivity
                  </li>
                </ul>
                <Link className="button secondary" href="#demo">
                  Request pricing <ArrowUpRight size={16} />
                </Link>
              </article>
            </div>
            <p className="pricing-note">
              Managed services are optional. Canceling a managed subscription is
              not intended to disable the core local library. Original-media
              backups remain your responsibility. Hardware, deployment, and
              future cloud AI may be quoted separately.
            </p>
          </div>
        </section>
        <section className="faq wrap section-space" id="resources">
          <div>
            <span className="eyebrow">A FEW GOOD QUESTIONS</span>
            <h2>Clear by design.</h2>
            <Link href="/resources/" className="text-link">
              Explore resources <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="faq-list">
            {[
              [
                "Is Framepath cloud storage?",
                "No. Framepath is software installed on your infrastructure. Original media, PostgreSQL catalog, generated previews, and user accounts can remain on site.",
              ],
              [
                "Can we use our existing NAS or server?",
                "Yes, Framepath indexes configured mounted storage. Deployment needs readable media storage, a server running the application and database, and separate space for generated media. Oddform hardware is optional.",
              ],
              [
                "Does Framepath need AI to work?",
                "No. Browsing, metadata, keyword search, previews, local accounts, and original retrieval form the core workflow. Semantic search and other AI processors are planned enhancements.",
              ],
              [
                "Can people work remotely?",
                "With an appropriately configured direct HTTPS path, authorized browsers can connect to your installation. Your IT team must configure reachability, firewall rules, TLS, and a reverse proxy. Planned Connect tooling is an optional convenience.",
              ],
              [
                "What is available today?",
                "The active-development application has storage scanning, a searchable catalog, generated previews, metadata, library permissions, bulk editing, and original downloads. Managed upload ingest, advanced duplicate matching, semantic search, automatic shot detection, and managed connectivity remain on the roadmap.",
              ],
            ].map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span>+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section id="demo" className="contact wrap section-space">
          <div className="contact-copy">
            <span className="eyebrow">LET’S TALK ABOUT YOUR ARCHIVE</span>
            <h2>
              Your media library
              <br />
              already exists.
              <br />
              <span>Make it searchable.</span>
            </h2>
            <p>
              Interested in piloting Framepath? Tell us where your footage lives
              and what your team needs to find.
            </p>
            <Link className="text-link" href="mailto:tyler@oddform.works">
              Contact Oddform directly <ArrowUpRight size={17} />
            </Link>
            <div className="contact-note">
              <span className="dot" /> Built by Oddform.
              <br />
              Designed for your organization.
            </div>
          </div>
          <DemoForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
