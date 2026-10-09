"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { Maximize2, X } from "lucide-react";
const assetPath = (name: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/product/${name}`;
export function ProductCapture({
  name,
  alt,
  priority = false,
}: {
  name: string;
  alt: string;
  priority?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <figure className="product-proof">
      <div className="proof-image">
        <Image
          src={assetPath(name)}
          alt={alt}
          width={1440}
          height={900}
          priority={priority}
        />
        <button
          className="proof-enlarge"
          onClick={() => dialog.current?.showModal()}
          aria-label={`Enlarge ${alt}`}
        >
          <Maximize2 size={18} /> Enlarge
        </button>
      </div>
      <figcaption>Framepath application · approved sample library</figcaption>
      <dialog ref={dialog} className="proof-dialog">
        <button
          autoFocus
          className="proof-close"
          onClick={() => dialog.current?.close()}
          aria-label="Close enlarged screenshot"
        >
          <X />
        </button>
        <Image src={assetPath(name)} alt={alt} width={1440} height={900} />
        <p>{alt} · desktop application capture</p>
      </dialog>
    </figure>
  );
}
const transcripts = [
  {
    label: "Search & seek",
    stem: "02-transcript-search-and-seek",
    text: "Search the words. Select the timestamp. See the matching caption.",
  },
  {
    label: "Correct & save",
    stem: "03-correct-a-transcript",
    text: "Correct a misheard word, save the passage, and keep its timing.",
  },
];
export function TranscriptProof() {
  const [active, setActive] = useState(0);
  const item = transcripts[active];
  return (
    <div className="walkthrough-panel">
      <div
        className="proof-tabs"
        role="group"
        aria-label="Transcript walkthrough"
      >
        <button aria-pressed={active === 0} onClick={() => setActive(0)}>
          Search & seek
        </button>
        <button aria-pressed={active === 1} onClick={() => setActive(1)}>
          Correct & save
        </button>
      </div>
      <Walkthrough key={item.stem} stem={item.stem} title={item.text} />
      <p className="proof-note">
        Real app states, edited into a guided walkthrough. The sample uses
        locally generated narration over approved footage, actual Whisper
        tiny.en output, and a saved correction. It is not dialogue from the
        people on screen or a processing-speed demonstration.
      </p>
    </div>
  );
}
export function Walkthrough({ stem, title }: { stem: string; title: string }) {
  return (
    <figure className="product-proof">
      <video
        controls
        playsInline
        preload="none"
        poster={assetPath(`${stem}.png`)}
        src={assetPath(`${stem}.mp4`)}
        aria-label={title}
      />
      <figcaption>{title} Use fullscreen for a closer look.</figcaption>
    </figure>
  );
}
