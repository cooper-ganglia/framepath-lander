
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
import sampleAssets from "./sample-assets.json";

// GitHub Pages serves this repository under /framepath-lander.
// Prefix public media paths in the production deployment.
const basePath =
  process.env.NODE_ENV === "production"
    ? "/framepath-lander"
    : "";

const mediaUrl = (path: string) => `${basePath}${path}`;

export const assets = sampleAssets;
export type Asset = (typeof assets)[number];


export function MediaImage({
  index,
  className = "",
  priority = false,
  interactive = true,
}: {
  index: number;
  className?: string;
  priority?: boolean;
  interactive?: boolean;
}) {
  const [frame, setFrame] = useState<number | null>(null);

  const thumbnail = mediaUrl(`/assets/media-${index}.webp`);
  const scrubSheet = mediaUrl(`/assets/scrub-${index}.webp`);
  const video = mediaUrl(assets[index].video);

  return (
    <span
      className={`media-image media-${index} ${className}`}
      onPointerMove={(event) => {
        if (interactive) return;
        if (event.pointerType === "touch") return;

        const rect = event.currentTarget.getBoundingClientRect();
        if (!rect.width) return;

        const progress = Math.max(
          0,
          Math.min(
            1,
            (event.clientX - rect.left) / rect.width
          )
        );

        setFrame(Math.min(11, Math.floor(progress * 12)));
      }}
      onPointerLeave={() => setFrame(null)}
      style={{
        position: "relative",
        display: "block",
        overflow: "hidden",
      }}
    >
      <img
        src={thumbnail}
        alt={`${assets[index].title} — sample footage`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />

      {interactive ? (
        <video
          className="sample-video"
          controls
          playsInline
          preload="metadata"
          poster={thumbnail}
          src={video}
          aria-label={`Play ${assets[index].title}`}
        />
      ) : (
        frame !== null && (
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 3,
              display: "block",
              backgroundImage: `url("${scrubSheet}")`,
              backgroundSize: "1200% 100%",
              backgroundPosition: `${(frame / 11) * 100}% center`,
              backgroundRepeat: "no-repeat",
              pointerEvents: "none",
            }}
          />
        )
      )}
    </span>
  );
}


export default function LibraryDemo() {
  const [query, setQuery] = useState("");
  const [library, setLibrary] =
    useState("All libraries");
  const [tag, setTag] = useState("All tags");
  const [list, setList] = useState(false);
  const [selected, setSelected] = useState<
    string[]
  >([]);
  const [detail, setDetail] =
    useState<Asset | null>(null);
  const [notice, setNotice] = useState("");
  const [filters, setFilters] = useState(false);
  const dialogRef =
    useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (
      detail &&
      dialogRef.current &&
      !dialogRef.current.open
    ) {
      dialogRef.current.showModal();
    }
  }, [detail]);

  const results = assets.filter(
    (a) =>
      (library === "All libraries" ||
        a.library === library) &&
      (tag === "All tags" ||
        a.tags.includes(tag)) &&
      [
        a.title,
        a.file,
        ...a.tags,
        a.person,
        a.location,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase()),
  );

  function select(title: string) {
    setSelected((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title],
    );
    setNotice("");
  }

  return (
    <div
      className="product-window"
      id="library-demo"
    >
      <div className="window-bar">
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>

        <span>
          <HardDrive size={12} />
          Local installation
        </span>

        <span className="illustrative">
          Interactive demo · real sample footage
        </span>
      </div>

      <div className="demo-shell">
        <aside className="demo-sidebar">
          <Image
            src={mediaUrl(
              "/assets/logo-optimized.png",
            )}
            width={127}
            height={36}
            alt="Framepath"
          />

          <div className="workspace-pill">
            <span className="dot" />
            Media workspace
            <small>
              On your infrastructure
            </small>
          </div>

          <span className="tiny-label">
            WORKSPACE
          </span>

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
                className={
                  i === 0
                    ? "demo-nav active"
                    : "demo-nav"
                }
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
              Local-first by design
              <small>
                Your media stays yours.
              </small>
            </span>
          </div>
        </aside>

        <div className="demo-content">
          <div className="demo-heading">
            <div>
              <span className="tiny-label">
                THE COMPLETE PICTURE
              </span>

              <h3>
                Your media library{" "}
                <span>
                  {results.length}
                </span>
              </h3>
            </div>

            <span className="status-pill">
              <span className="dot" />
              On-premises
            </span>
          </div>

          <label className="demo-search">
            <Search size={18} />

            <span className="sr-only">
              Search sample footage by title,
              tags, people or location
            </span>

            <input
              value={query}
              onChange={(e) =>
                setQuery(e.target.value)
              }
              placeholder="Try ‘drone’, ‘music’, or ‘Joe’"
            />

            <kbd>⌕</kbd>
          </label>

          <div className="demo-toolbar">
            <span className="all-media">
              All media
            </span>

            <label>
              <span className="sr-only">
                Filter example library
              </span>

              <select
                value={library}
                onChange={(e) =>
                  setLibrary(e.target.value)
                }
              >
                {[
                  "All libraries",
                  ...new Set(
                    assets.map(
                      (a) => a.library,
                    ),
                  ),
                ].map((v) => (
                  <option key={v}>
                    {v}
                  </option>
                ))}
              </select>
            </label>

            <button
              aria-label="Show tag filters"
              aria-expanded={filters}
              onClick={() =>
                setFilters(!filters)
              }
              className={
                filters ? "active" : ""
              }
            >
              <SlidersHorizontal
                size={14}
              />
              <span>Filters</span>
            </button>

            <button
              className="view-button"
              aria-label={
                list
                  ? "Switch to grid view"
                  : "Switch to list view"
              }
              onClick={() =>
                setList(!list)
              }
            >
              {list ? (
                <Grid2X2 size={16} />
              ) : (
                <List size={16} />
              )}
            </button>
          </div>

          {filters && (
            <div className="demo-filters">
              <label>
                Tag{" "}
                <select
                  value={tag}
                  onChange={(e) =>
                    setTag(e.target.value)
                  }
                >
                  {[
                    "All tags",
                    ...new Set(
                      assets.flatMap(
                        (a) => a.tags,
                      ),
                    ),
                  ].map((t) => (
                    <option key={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>

              <button
                onClick={() => {
                  setQuery("");
                  setTag("All tags");
                  setLibrary(
                    "All libraries",
                  );
                }}
              >
                Reset filters
              </button>
            </div>
          )}

          <div
            className="result-summary"
            aria-live="polite"
          >
            <span>
              {selected.length
                ? `${selected.length} selected`
                : `${results.length} example assets`}
            </span>

            <span>
              {selected.length ? (
                <button
                  onClick={() =>
                    setSelected([])
                  }
                >
                  Clear selection
                </button>
              ) : (
                "ORIGINALS PRESERVED · PROXY PLAYBACK"
              )}
            </span>
          </div>

          <div
            className={
              list
                ? "media-grid list-view"
                : "media-grid"
            }
          >
            {results.map((a) => (
              <article
                key={a.file}
                className={`media-card ${
                  selected.includes(a.title)
                    ? "selected"
                    : ""
                }`}
              >
                <div className="thumbnail">
                  <button
                    className="thumbnail-open"
                    onClick={() =>
                      setDetail(a)
                    }
                    aria-label={`Inspect ${a.title}`}
                  >
                    <MediaImage
                      index={a.index}
                      priority={
                        a.index < 3
                      }
                      interactive={false}
                    />

                    <span className="preview-hint">
                      <Play size={18} />
                      Play clip
                    </span>

                    <span className="tech-overlay">
                      {a.size} ·{" "}
                      <b>
                        {a.quality}
                      </b>{" "}
                      · {a.time}
                    </span>
                  </button>

                  <label className="card-checkbox">
                    <input
                      type="checkbox"
                      checked={selected.includes(
                        a.title,
                      )}
                      onChange={() =>
                        select(a.title)
                      }
                      aria-label={`Select ${a.title}`}
                    />
                  </label>
                </div>

                <div className="card-body">
                  <button
                    className="card-title"
                    onClick={() =>
                      setDetail(a)
                    }
                  >
                    {a.title}
                  </button>

                  <div className="card-meta">
                    <span
                      className="metadata-tooltip"
                      tabIndex={0}
                    >
                      <Tags size={12} />
                      {a.tags.length}
                      <span role="tooltip">
                        {a.tags.join(
                          " · ",
                        )}
                      </span>
                    </span>

                    <span>
                      {a.person && (
                        <>
                          <Users
                            size={12}
                          />
                          1
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

              <h4>
                No example assets match.
              </h4>

              <p>
                Try another keyword or
                reset the filters.
              </p>

              <button
                onClick={() => {
                  setQuery("");
                  setTag("All tags");
                  setLibrary(
                    "All libraries",
                  );
                }}
              >
                Reset search
              </button>
            </div>
          )}

          <p
            className="demo-note"
            aria-live="polite"
          >
            {notice ||
              "Search or filter the clips, move across a thumbnail to scrub, then open a clip to play."}
          </p>
        </div>
      </div>

      {detail && (
        <dialog
          ref={dialogRef}
          onClose={() =>
            setDetail(null)
          }
          className="asset-dialog"
          aria-label={`${detail.title} example detail`}
        >
          <button
            className="close-button"
            aria-label="Close clip detail"
            onClick={() =>
              setDetail(null)
            }
            autoFocus
          >
            <X />
          </button>

          <MediaImage
            index={detail.index}
          />

          <div className="asset-dialog-body">
            <span className="eyebrow">
              Sample footage
            </span>

            <h3>
              {detail.title}
            </h3>

            <p>
              {detail.file} ·{" "}
              {detail.quality} ·{" "}
              {detail.time} ·{" "}
              {detail.size}
            </p>

            <div className="chips">
              {detail.tags.map(
                (t) => (
                  <span key={t}>
                    {t}
                  </span>
                ),
              )}
            </div>

            {(detail.location ||
              detail.person) && (
              <p>
                <Users size={14} />
                {detail.person ||
                  detail.location}
              </p>
            )}

            <p className="demo-note">
              Play, pause, seek, adjust
              audio, or expand the player.
              This sample uses an
              optimized browser copy;
              your supplied original
              stays unchanged. Tags and
              library groupings are
              demonstration metadata.
            </p>

            <Link
              href="#features"
              className="text-link"
              onClick={() =>
                setDetail(null)
              }
            >
              Explore preview &amp;
              retrieval
              <ArrowUpRight
                size={16}
              />
            </Link>
          </div>
        </dialog>
      )}
    </div>
  );
}
