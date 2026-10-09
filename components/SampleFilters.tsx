"use client";
import { useRef, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
export type SampleFilter = {
  tag: string;
  mode: "include" | "exclude";
  min: number;
  max: number;
};
export const emptyFilter: SampleFilter = {
  tag: "All tags",
  mode: "include",
  min: 0,
  max: 180,
};
export default function SampleFilters({
  tags,
  value,
  onApply,
}: {
  tags: string[];
  value: SampleFilter;
  onApply: (value: SampleFilter) => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [draft, setDraft] = useState(value);
  const active = value.tag !== "All tags" || value.min > 0 || value.max < 180;
  return (
    <>
      <button
        aria-label="Open sample filters"
        className={active ? "active" : ""}
        onClick={() => {
          setDraft({ ...value });
          dialog.current?.showModal();
        }}
      >
        <SlidersHorizontal size={16} /> Filters{active ? " · Active" : ""}
      </button>
      <dialog
        ref={dialog}
        className="sample-filter-dialog"
        aria-label="Sample filter editor"
      >
        <div className="filter-dialog-heading">
          <h3>Narrow the sample library</h3>
          <button
            autoFocus
            aria-label="Close sample filters"
            onClick={() => dialog.current?.close()}
          >
            <X />
          </button>
        </div>
        <p>
          Try a tag and a precise duration range. These controls filter the
          seven supplied clips.
        </p>
        <fieldset>
          <legend>Tags</legend>
          <label>
            Match
            <select
              value={draft.mode}
              onChange={(e) =>
                setDraft({
                  ...draft,
                  mode: e.target.value as SampleFilter["mode"],
                })
              }
            >
              <option value="include">Include</option>
              <option value="exclude">Exclude</option>
            </select>
          </label>
          <label>
            Tag
            <select
              value={draft.tag}
              onChange={(e) => setDraft({ ...draft, tag: e.target.value })}
            >
              {["All tags", ...tags].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
        </fieldset>
        <fieldset>
          <legend>Duration</legend>
          <div
            className="sample-range"
            style={
              {
                "--min": `${(draft.min / 180) * 100}%`,
                "--max": `${(draft.max / 180) * 100}%`,
              } as React.CSSProperties
            }
          >
            <span className="range-rail" />
            <span className="range-selected" />
            <input
              type="range"
              aria-label="Minimum clip duration"
              min={0}
              max={180}
              value={draft.min}
              onChange={(e) =>
                setDraft({
                  ...draft,
                  min: Math.min(Number(e.target.value), draft.max),
                })
              }
            />
            <input
              type="range"
              aria-label="Maximum clip duration"
              min={0}
              max={180}
              value={draft.max}
              onChange={(e) =>
                setDraft({
                  ...draft,
                  max: Math.max(Number(e.target.value), draft.min),
                })
              }
            />
          </div>
          <div className="range-values">
            <label>
              Minimum seconds
              <input
                type="number"
                min={0}
                max={draft.max}
                value={draft.min}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    min: Math.min(
                      draft.max,
                      Math.max(0, Number(e.target.value)),
                    ),
                  })
                }
              />
            </label>
            <label>
              Maximum seconds
              <input
                type="number"
                min={draft.min}
                max={180}
                value={draft.max}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    max: Math.min(
                      180,
                      Math.max(draft.min, Number(e.target.value)),
                    ),
                  })
                }
              />
            </label>
          </div>
          <p>
            {draft.min}s –{" "}
            {draft.max === 180 ? "180+s (no upper limit)" : `${draft.max}s`}
          </p>
        </fieldset>
        <div className="filter-dialog-actions">
          <button onClick={() => setDraft({ ...emptyFilter })}>
            Reset draft
          </button>
          <button onClick={() => dialog.current?.close()}>Cancel</button>
          <button
            className="button"
            onClick={() => {
              onApply({ ...draft });
              dialog.current?.close();
            }}
          >
            Apply filters
          </button>
        </div>
      </dialog>
    </>
  );
}
