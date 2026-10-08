"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Search,
  Folder,
  Tags,
  Users,
  MapPin,
  Layers,
  Grid2X2,
  List,
  X,
  ArrowUpRight,
  SlidersHorizontal,
  HardDrive,
  Play,
  Film,
} from "lucide-react";
export const assets = [
  {
    title: "Stadium at blue hour",
    file: "CAM_A_0047.MOV",
    library: "Sports",
    tags: ["Stadium", "Drone", "Exterior"],
    time: "2:06",
    quality: "4K",
    size: "204 MB",
    person: "",
    location: "Main stadium",
    index: 0,
  },
  {
    title: "The crowd comes alive",
    file: "CAM_B_0128.MOV",
    library: "Sports",
    tags: ["Crowd", "Night", "Baseball"],
    time: "0:48",
    quality: "4K",
    size: "96 MB",
    person: "",
    location: "Main stadium",
    index: 1,
  },
  {
    title: "Campus, golden hour",
    file: "DRONE_0092.MOV",
    library: "Corporate",
    tags: ["Campus", "Drone", "Sunset"],
    time: "1:24",
    quality: "4K",
    size: "320 MB",
    person: "",
    location: "North campus",
    index: 2,
  },
  {
    title: "A story worth keeping",
    file: "INTERVIEW_0021.MOV",
    library: "Corporate",
    tags: ["Interview", "Engineering"],
    time: "12:14",
    quality: "1080p",
    size: "4.8 GB",
    person: "Morgan Lee",
    location: "Studio B",
    index: 3,
  },
  {
    title: "Building what comes next",
    file: "SITE_0034.MOV",
    library: "Construction",
    tags: ["Construction", "Progress"],
    time: "3:18",
    quality: "4K",
    size: "612 MB",
    person: "",
    location: "North building",
    index: 4,
  },
  {
    title: "One unforgettable night",
    file: "EVENT_0116.MOV",
    library: "Events",
    tags: ["Live event", "Crowd", "Night"],
    time: "1:36",
    quality: "4K",
    size: "256 MB",
    person: "",
    location: "Main venue",
    index: 5,
  },
];
export type Asset = (typeof assets)[number];
export function MediaImage({
  index,
  className = "",
  priority = false,
}: {
  index: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <span className={`media-image media-${index} ${className}`}>
      <Image
        src={`/assets/media-${index}.webp`}
        alt={assets[index].title + " — illustrative generated media"}
        fill
        sizes="(max-width: 720px) 50vw, 500px"
        loader={({ width }) =>
          `/assets/media-${index}${width <= 400 ? "-small" : ""}.webp`
        }
        priority={priority}
        style={{ objectFit: "cover" }}
      />
    </span>
  );
}
export default function LibraryDemo() {
  const [query, setQuery] = useState("");
  const [library, setLibrary] = useState("All libraries");
  const [tag, setTag] = useState("All tags");
  const [list, setList] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [detail, setDetail] = useState<Asset | null>(null);
  const [notice, setNotice] = useState("");
  const [filters, setFilters] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (detail && dialogRef.current && !dialogRef.current.open)
      dialogRef.current.showModal();
  }, [detail]);
  const results = assets.filter(
    (a) =>
      (library === "All libraries" || a.library === library) &&
      (tag === "All tags" || a.tags.includes(tag)) &&
      [a.title, a.file, ...a.tags, a.person, a.location]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  function select(title: string) {
    setSelected((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
    setNotice("");
  }
  return (
    <div className="product-window" id="library-demo">
      <div className="window-bar">
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>
        <span>
          <HardDrive size={12} /> Local installation
        </span>
        <span className="illustrative">
          Interactive illustration · fictional media
        </span>
      </div>
      <div className="demo-shell">
        <aside className="demo-sidebar">
          <Image
            src="/assets/logo-optimized.png"
            width={127}
            height={36}
            alt="Framepath"
          />
          <div className="workspace-pill">
            <span className="dot" /> Media workspace
            <small>On your infrastructure</small>
          </div>
          <span className="tiny-label">WORKSPACE</span>
          {[
            [Film, "Library"],
            [Layers, "Collections"],
            [Tags, "Tags"],
            [Users, "People"],
            [MapPin, "Locations"],
            [Folder, "Projects"],
          ].map(([Icon, label], i) => {
            const C = Icon as typeof Film;
            return (
              <span
                className={i === 0 ? "demo-nav active" : "demo-nav"}
                key={String(label)}
              >
                <C size={15} />
                {String(label)}
              </span>
            );
          })}
          <div className="sidebar-foot">
            <HardDrive size={16} />
            <span>
              Local-first by design<small>Your media stays yours.</small>
            </span>
          </div>
        </aside>
        <div className="demo-content">
          <div className="demo-heading">
            <div>
              <span className="tiny-label">THE COMPLETE PICTURE</span>
              <h3>
                Your media library <span>{results.length}</span>
              </h3>
            </div>
            <span className="status-pill">
              <span className="dot" /> On-premises
            </span>
          </div>
          <label className="demo-search">
            <Search size={18} />
            <span className="sr-only">
              Search illustrative media by title, tags, people or location
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try ‘drone’, ‘night’, or ‘Morgan’"
            />
            <kbd>⌕</kbd>
          </label>
          <div className="demo-toolbar">
            <span className="all-media">All media</span>
            <label>
              <span className="sr-only">Filter example library</span>
              <select
                value={library}
                onChange={(e) => setLibrary(e.target.value)}
              >
                {[
                  "All libraries",
                  "Sports",
                  "Corporate",
                  "Events",
                  "Construction",
                ].map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </label>
            <button
              aria-label="Show tag filters"
              aria-expanded={filters}
              onClick={() => setFilters(!filters)}
              className={filters ? "active" : ""}
            >
              <SlidersHorizontal size={14} />
              <span>Filters</span>
            </button>
            <button
              className="view-button"
              aria-label={list ? "Switch to grid view" : "Switch to list view"}
              onClick={() => setList(!list)}
            >
              {list ? <Grid2X2 size={16} /> : <List size={16} />}
            </button>
          </div>
          {filters && (
            <div className="demo-filters">
              <label>
                Tag{" "}
                <select value={tag} onChange={(e) => setTag(e.target.value)}>
                  {["All tags", ...new Set(assets.flatMap((a) => a.tags))].map(
                    (t) => (
                      <option key={t}>{t}</option>
                    ),
                  )}
                </select>
              </label>
              <button
                onClick={() => {
                  setQuery("");
                  setTag("All tags");
                  setLibrary("All libraries");
                }}
              >
                Reset filters
              </button>
            </div>
          )}
          <div className="result-summary" aria-live="polite">
            <span>
              {selected.length
                ? `${selected.length} selected`
                : `${results.length} example assets`}
            </span>
            <span>
              {selected.length ? (
                <button onClick={() => setSelected([])}>Clear selection</button>
              ) : (
                "ORIGINALS PRESERVED · PROXY PLAYBACK"
              )}
            </span>
          </div>
          <div className={list ? "media-grid list-view" : "media-grid"}>
            {results.map((a) => (
              <article
                key={a.file}
                className={`media-card ${selected.includes(a.title) ? "selected" : ""}`}
              >
                <div className="thumbnail">
                  <button
                    className="thumbnail-open"
                    onClick={() => setDetail(a)}
                    aria-label={`Inspect ${a.title}`}
                  >
                    <MediaImage index={a.index} priority={a.index < 3} />
                    <span className="preview-hint">
                      <Play size={18} /> Inspect clip
                    </span>
                    <span className="tech-overlay">
                      {a.size} · <b>{a.quality}</b> · {a.time}
                    </span>
                    <span className="scrub-line" />
                  </button>
                  <label className="card-checkbox">
                    <input
                      type="checkbox"
                      checked={selected.includes(a.title)}
                      onChange={() => select(a.title)}
                      aria-label={`Select ${a.title}`}
                    />
                  </label>
                </div>
                <div className="card-body">
                  <button className="card-title" onClick={() => setDetail(a)}>
                    {a.title}
                  </button>
                  <div className="card-meta">
                    <span className="metadata-tooltip" tabIndex={0}>
                      <Tags size={12} /> {a.tags.length}
                      <span role="tooltip">{a.tags.join(" · ")}</span>
                    </span>
                    <span>
                      {a.person && (
                        <>
                          <Users size={12} /> 1
                        </>
                      )}
                    </span>
                    <span className="dot" />
                  </div>
                </div>
              </article>
            ))}
          </div>
          {!results.length && (
            <div className="empty-state">
              <Search />
              <h4>No example assets match.</h4>
              <p>Try another keyword or reset the filters.</p>
              <button
                onClick={() => {
                  setQuery("");
                  setTag("All tags");
                  setLibrary("All libraries");
                }}
              >
                Reset search
              </button>
            </div>
          )}
          <p className="demo-note" aria-live="polite">
            {notice ||
              "Try searching, filtering, selecting a card, or opening a clip."}
          </p>
        </div>
      </div>
      {detail && (
        <dialog
          ref={dialogRef}
          onClose={() => setDetail(null)}
          className="asset-dialog"
          aria-label={`${detail.title} example detail`}
        >
          <button
            className="close-button"
            aria-label="Close clip detail"
            onClick={() => setDetail(null)}
            autoFocus
          >
            <X />
          </button>
          <MediaImage index={detail.index} />
          <div className="asset-dialog-body">
            <span className="eyebrow">Illustrative asset detail</span>
            <h3>{detail.title}</h3>
            <p>
              {detail.file} · {detail.quality} · {detail.time} · {detail.size}
            </p>
            <div className="chips">
              {detail.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <p>
              <MapPin size={14} /> {detail.location}{" "}
              {detail.person && ` · ${detail.person}`}
            </p>
            <p className="demo-note">
              This website shows a still-image illustration. In Framepath,
              generated browser proxies provide playback and authorized users
              can download the original.
            </p>
            <Link
              href="#features"
              className="text-link"
              onClick={() => setDetail(null)}
            >
              Explore preview & retrieval <ArrowUpRight size={16} />
            </Link>
          </div>
        </dialog>
      )}
    </div>
  );
}
