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
  Layers,
  Users,
  Activity,
  ChevronRight,
} from "lucide-react";
import { Header, Footer } from "@/components/SiteChrome";
import LibraryDemo, { MediaImage } from "@/components/LibraryDemo";
import {
  ProductCapture,
  TranscriptProof,
  Walkthrough,
} from "@/components/ProductProof";
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
                "Branded Libraries. Shared context. Tags, People, and Locations are installation-wide; Projects and Collections belong to each Library.",
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
                Camera filenames only tell part of the story. Search titles,
                descriptions, and transcript words. Connect people and places,
                then combine precise metadata filters.
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
                Try the sample library <ArrowUpRight size={16} />
              </Link>
            </div>
            <Walkthrough
              stem="01-precise-filtering"
              title="Combine a tag with a precise frame-rate range. Two real clips remain."
            />
          </div>
          <div className="feature-split reversed">
            <div className="preview-visual">
              <MediaImage index={3} />
              <div className="preview-controls">
                <Film size={17} />
                <span>joe_writing_clip.mov</span>
                <span>0:05</span>
              </div>
              <div className="preview-metadata">
                <div>
                  <span className="tiny-label">PEOPLE</span>
                  <b>
                    <Users size={15} /> Joe
                  </b>
                  <small>Sample footage · filename association</small>
                </div>
                <div>
                  <span className="tiny-label">TAGS</span>
                  <div className="chips">
                    <span>Writing</span>
                    <span>Detail</span>
                  </div>
                </div>
              </div>
              <small className="visual-caption">
                Playable preview · supplied sample footage
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
        <section
          className="transcription wrap section-space"
          id="transcription"
        >
          <div className="transcription-heading">
            <span className="eyebrow">
              OPTIONAL LOCAL WHISPER · IMPLEMENTED
            </span>
            <h2>
              Find the moment
              <br />
              <span>by what was said.</span>
            </h2>
            <p>
              Generate a transcript on your own server, search its words, and
              jump straight to the matching timestamp. Correct a misheard phrase
              and use the saved transcript as captions.
            </p>
          </div>
          <TranscriptProof />
          <div className="transcript-benefits">
            <article>
              <span>01 · LOCAL PROCESSING</span>
              <h3>Your server. Your words.</h3>
              <p>
                Queue selected audio or video clips after indexing. Inference
                runs with the installed local Whisper model; acquiring model
                files needs connectivity.
              </p>
            </article>
            <article>
              <span>02 · SEARCH & SEEK</span>
              <h3>Go straight to the passage.</h3>
              <p>
                Find spoken words in asset keyword search or search a clip’s
                transcript. Click its timestamp to move playback to that moment.
              </p>
            </article>
            <article>
              <span>03 · CORRECT & CAPTION</span>
              <h3>Better wording. Same timing.</h3>
              <p>
                Authorized editors can Save or Cancel passage corrections. Saved
                wording updates search and optional captions without changing
                original media.
              </p>
            </article>
          </div>
          <p className="proof-note">
            Local transcription is optional. The library works without AI.
          </p>
          <Link href="/resources/#transcription" className="text-link">
            Explore local transcription <ArrowUpRight size={16} />
          </Link>
        </section>
        <section className="sample-explore wrap section-space">
          <div className="section-intro">
            <span className="eyebrow">INSIDE FRAMEPATH</span>
            <h2>
              A little less searching.
              <br />
              <span>A lot more context.</span>
            </h2>
            <p>
              A real view of the Framepath application, captured from the
              approved sample library. Enlarge it to explore the interface in
              detail.
            </p>
          </div>
          <ProductCapture
            name="01-media-library.png"
            alt="Media library overview"
          />
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
          </div>
        </section>
        <section className="organization-proof wrap section-space">
          <div className="section-intro">
            <span className="eyebrow">SHARED CONTEXT. CLEAR ACCESS.</span>
            <h2>
              One identity.
              <br />
              <span>The right library.</span>
            </h2>
            <p>
              A production team and an events team can share a person or tag
              profile while seeing only media their Library role allows. Give
              each Library its own logo and label color; keep Projects and
              Collections within it.
            </p>
          </div>
          <div className="proof-pair">
            <ProductCapture
              name="02-library-picker.png"
              alt="Branded library picker"
            />
            <ProductCapture
              name="05-folder-browser.png"
              alt="Indexed folder browser"
            />
          </div>
          <p className="proof-note">
            Browse the folders you already know, with clickable paths and an
            indexed directory tree. Storage is mounted on your server; a browser
            picker does not expose a remote server’s filesystem.
          </p>
        </section>
        <section className="wrap section-space compact-roadmap" id="roadmap">
          <span className="eyebrow">LOOKING AHEAD</span>
          <h2>More possibilities for your archive.</h2>
          <p>
            Future updates are planned to bring automatic shot detection, visual
            search, verified media ingest, and simpler remote-access
            administration. These capabilities are on the roadmap, with no
            release dates announced.
          </p>
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
                  configuration. Back up originals, the database, and
                  configuration according to your organization’s policies.
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
                the right deployment and provide a quote tailored to your
                organization.
              </p>
            </div>
            <div className="plan-grid">
              <article>
                <span className="eyebrow">THE FOUNDATION</span>
                <h3 className="plan-lockup">
                  <span className="plan-logo">
                    <Image
                      src="/assets/logo-optimized.png"
                      width={170}
                      height={41}
                      alt="Framepath"
                    />
                  </span>
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
            </div>
            <p className="pricing-note">
              Discuss hardware, installation, and support requirements with
              Oddform. Back up original media according to your organization’s
              policies.
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
                "No. Browsing, metadata, keyword search, previews, local accounts, and original retrieval form the core workflow. Optional local Whisper transcription is implemented.",
              ],
              [
                "Can people work remotely?",
                "With an appropriately configured direct HTTPS path, authorized browsers can connect to your installation. Your IT team must configure reachability, firewall rules, TLS, and a reverse proxy.",
              ],
              [
                "What is available today?",
                "The active-development application has storage scanning, a searchable catalog, generated previews, metadata, library permissions, bulk editing, original downloads, and optional local Whisper with transcript search, timestamp seeking, corrections, and captions.",
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
