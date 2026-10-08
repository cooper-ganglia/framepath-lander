"use client";
import Link from "next/link";
import { useState, type KeyboardEvent } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  HardDrive,
  Globe,
  Network,
  ArrowRight,
  Mail,
} from "lucide-react";
import { MediaImage } from "./LibraryDemo";
function tabKey(
  event: KeyboardEvent<HTMLButtonElement>,
  index: number,
  count: number,
  activate: (value: number) => void,
) {
  const steps: Record<string, number> = {
    ArrowRight: 1,
    ArrowDown: 1,
    ArrowLeft: -1,
    ArrowUp: -1,
  };
  let next: number;
  if (event.key === "Home") next = 0;
  else if (event.key === "End") next = count - 1;
  else if (event.key in steps)
    next = (index + steps[event.key] + count) % count;
  else return;
  event.preventDefault();
  activate(next);
  event.currentTarget.parentElement
    ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    [next]?.focus();
}
const industries = [
  {
    name: "Broadcast & production",
    headline: "Your archive has another story in it.",
    text: "Rediscover historical footage, reusable B-roll, and interview material. Search the context your team has cataloged, preview the clip, and retrieve the camera original.",
    image: 3,
    tags: ["Interviews", "B-roll", "Archive"],
  },
  {
    name: "Sports",
    headline: "Every season. Every angle.",
    text: "Organize games, venues, crowds, and player-associated footage. Give production teams a visual archive that stays useful long after the final whistle.",
    image: 0,
    tags: ["Game day", "Stadium", "Players"],
  },
  {
    name: "Corporate media",
    headline: "One visual history. Many departments.",
    text: "Bring interviews, locations, campaigns, and company milestones into separate permissioned Libraries. Build an institutional resource your next project can draw from.",
    image: 2,
    tags: ["Teams", "Locations", "Campaigns"],
  },
  {
    name: "Events & venues",
    headline: "Make a moment work beyond one night.",
    text: "Keep years of performances, events, promotions, and venue footage organized. Find material for the next season without reopening every folder.",
    image: 5,
    tags: ["Live events", "Venues", "Promotions"],
  },
  {
    name: "Agencies",
    headline: "Keep client context close to the work.",
    text: "Separate client media into Libraries, curate Collections, and associate assets with Projects. Reuse the right footage while keeping access boundaries clear.",
    image: 4,
    tags: ["Client libraries", "Projects", "Collections"],
  },
  {
    name: "Education & nonprofits",
    headline: "Preserve the stories that matter.",
    text: "Organize campus life, community programs, interviews, and institutional history. Make the footage your organization already owns easier for authorized teams to discover.",
    image: 2,
    tags: ["Campus", "Community", "History"],
  },
];
export function Industries() {
  const [active, setActive] = useState(0);
  const data = industries[active];
  return (
    <div className="industry-explorer">
      <div
        role="tablist"
        aria-label="Industry use cases"
        className="industry-tabs"
      >
        {industries.map((item, i) => (
          <button
            role="tab"
            aria-selected={active === i}
            aria-controls="industry-panel"
            id={`industry-tab-${i}`}
            key={item.name}
            tabIndex={active === i ? 0 : -1}
            onKeyDown={(e) => tabKey(e, i, industries.length, setActive)}
            onClick={() => setActive(i)}
          >
            {item.name}
            <ChevronRight size={16} />
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id="industry-panel"
        aria-labelledby={`industry-tab-${active}`}
        className="industry-panel"
      >
        <MediaImage index={data.image} />
        <div className="industry-copy">
          <div className="chips">
            {data.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <h3>{data.headline}</h3>
          <p>{data.text}</p>
          <Link href="#demo" className="text-link">
            Discuss your workflow <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
export function DeploymentModes() {
  const [mode, setMode] = useState(0);
  const modes = [
    {
      name: "On your network",
      icon: HardDrive,
      label: "LOCAL ACCESS",
      title: "The shortest path to your footage.",
      copy: "Install Framepath on your PC or server, connect mounted storage, and let authorized users work through browsers on your local network. Local logins and playback have no Oddform cloud dependency.",
      points: [
        "Customer-owned originals, catalog & previews",
        "Local accounts and library permissions",
        "Existing NAS, SAN or mounted server storage",
      ],
    },
    {
      name: "Your remote access",
      icon: Network,
      label: "SELF-MANAGED HTTPS",
      title: "Your domain. Your secure connection.",
      copy: "Your IT team can configure direct HTTPS to your installation using a public network address, firewall rules, a reverse proxy, and TLS. Remote media traffic goes between users and your infrastructure.",
      points: [
        "IT-assisted network and HTTPS configuration",
        "Local authorization remains in Framepath",
        "No Oddform-operated video relay",
      ],
    },
    {
      name: "Framepath Connect",
      icon: Globe,
      label: "PLANNED · OPTIONAL SERVICE",
      title: "A simpler way to manage connectivity.",
      copy: "Planned admin tooling for a customer-branded subdomain, DNS provisioning, and reachability status. Connect helps manage the connection; it does not host originals or replace local user accounts.",
      points: [
        "Example: yourteam.framepath.ai",
        "Direct HTTPS still needs network setup",
        "Core local access remains independent",
      ],
    },
  ];
  const d = modes[mode];
  const Icon = d.icon;
  return (
    <div className="deployment-modes">
      <div
        className="mode-tabs"
        role="tablist"
        aria-label="Deployment access modes"
      >
        {modes.map((m, i) => (
          <button
            key={m.name}
            role="tab"
            aria-selected={mode === i}
            aria-controls="mode-panel"
            id={`mode-${i}`}
            tabIndex={mode === i ? 0 : -1}
            onKeyDown={(e) => tabKey(e, i, modes.length, setMode)}
            onClick={() => setMode(i)}
          >
            {m.name}
          </button>
        ))}
      </div>
      <div
        id="mode-panel"
        role="tabpanel"
        aria-labelledby={`mode-${mode}`}
        className="mode-panel"
      >
        <div className="mode-icon">
          <Icon size={42} strokeWidth={1.2} />
        </div>
        <div>
          <span className="eyebrow">{d.label}</span>
          <h3>{d.title}</h3>
          <p>{d.copy}</p>
          <ul>
            {d.points.map((p) => (
              <li key={p}>
                <Check size={16} />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export function DemoForm() {
  const [status, setStatus] = useState("");
  const [draft, setDraft] = useState("");
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("website")) {
      setStatus("Please leave the website field empty.");
      return;
    }
    const body = `Framepath demo request\n\nName: ${data.get("name")}\nWork email: ${data.get("email")}\nOrganization: ${data.get("organization")}\nRole: ${data.get("role") || "Not provided"}\nLibrary size: ${data.get("size")}\nStorage: ${data.get("storage")}\nUsers: ${data.get("users") || "Not provided"}\n\n${data.get("message") || ""}`;
    setDraft(
      `mailto:tyler@oddform.works?subject=${encodeURIComponent("Framepath — demo request")}&body=${encodeURIComponent(body)}`,
    );
    setStatus(
      "Your request is ready. Open your email draft below, review it, and send it from your email app. Nothing has been sent yet.",
    );
  }
  return (
    <form
      className="demo-form"
      onSubmit={submit}
      onChange={() => {
        if (draft) {
          setDraft("");
          setStatus("");
        }
      }}
    >
      <div className="form-grid">
        <label>
          Your name <span>*</span>
          <input
            name="name"
            required
            autoComplete="name"
            maxLength={100}
            placeholder="Alex Morgan"
          />
        </label>
        <label>
          Work email <span>*</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={254}
            placeholder="alex@organization.com"
          />
        </label>
        <label className="full">
          Organization <span>*</span>
          <input
            name="organization"
            required
            autoComplete="organization"
            maxLength={160}
            placeholder="Your organization"
          />
        </label>
        <label>
          Role <small>Optional</small>
          <input
            name="role"
            autoComplete="organization-title"
            maxLength={100}
            placeholder="Media manager"
          />
        </label>
        <label>
          Approximate library size
          <select name="size" defaultValue="Not sure yet">
            {[
              "Not sure yet",
              "Under 10 TB",
              "10–50 TB",
              "50–200 TB",
              "Over 200 TB",
            ].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label>
          Current storage
          <select name="storage" defaultValue="NAS">
            {[
              "NAS",
              "SAN",
              "Local server",
              "Cloud storage",
              "Mixed",
              "Other",
              "Not sure yet",
            ].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label>
          Number of users <small>Optional</small>
          <input
            name="users"
            type="number"
            min="1"
            max="100000"
            placeholder="e.g. 12"
          />
        </label>
        <label className="full">
          Tell us about your archive <small>Optional</small>
          <textarea
            name="message"
            rows={3}
            maxLength={1800}
            placeholder="What would you like to find more easily?"
          />
        </label>
        <label className="honeypot" aria-hidden="true">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button type="submit" className="button">
        Prepare demo request <ArrowRight size={18} />
      </button>
      <p className="form-note">
        This form prepares an email to{" "}
        <Link href="mailto:tyler@oddform.works">tyler@oddform.works</Link>. You
        review and send it in your email app. No details are stored on this
        website.
      </p>
      <div
        role="status"
        aria-live="polite"
        className={status ? "form-status" : ""}
      >
        {status}
        {draft && (
          <Link className="button" href={draft}>
            <Mail size={17} /> Open email draft <ArrowUpRight size={16} />
          </Link>
        )}
      </div>
    </form>
  );
}
