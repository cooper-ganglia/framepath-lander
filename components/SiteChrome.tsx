"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
export const links = [
  ["Product", "/#product"],
  ["Features", "/#features"],
  ["How it works", "/#workflow"],
  ["Deployment", "/#deployment"],
  ["Industries", "/#industries"],
  ["Pricing", "/#pricing"],
  ["Resources", "/resources/"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Link className="skip-link" href="#main">
        Skip to content
      </Link>
      <header className="header">
        <div className="header-inner">
          <Link href="/" aria-label="Framepath home" className="brand">
            <Image
              src="/assets/logo-optimized.png"
              width={158}
              height={45}
              alt="Framepath"
              priority
            />
          </Link>
          <nav
            id="mobile-menu"
            aria-label="Main navigation"
            className={open ? "nav open" : "nav"}
          >
            {links.map(([name, url]) => (
              <Link key={name} href={url} onClick={() => setOpen(false)}>
                {name}
              </Link>
            ))}
            <Link
              className="button small mobile-cta"
              href="/#demo"
              onClick={() => setOpen(false)}
            >
              Request a demo <ArrowUpRight size={16} />
            </Link>
          </nav>
          <Link className="button small header-cta" href="/#demo">
            Request a demo <ArrowUpRight size={16} />
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer wrap">
      <div className="footer-top">
        <div>
          <Link href="/" aria-label="Framepath home">
            <Image
              src="/assets/logo-optimized.png"
              width={170}
              height={49}
              alt="Framepath"
            />
          </Link>
          <p>
            Your footage. Your storage.
            <br />
            Your infrastructure.
          </p>
        </div>
        <div>
          <span>Explore</span>
          <Link href="/#product">Product</Link>
          <Link href="/#features">Features</Link>
          <Link href="/#deployment">Deployment</Link>
        </div>
        <div>
          <span>Learn</span>
          <Link href="/#security">Security</Link>
          <Link href="/#pricing">Pricing & services</Link>
          <Link href="/resources/">Resources & product status</Link>
        </div>
        <div>
          <span>Let’s talk</span>
          <Link href="/#demo">Request a demo ↗</Link>
          <Link href="mailto:tyler@oddform.works">Contact Oddform ↗</Link>
          <Link
            href="https://oddform.works"
            target="_blank"
            rel="noopener noreferrer"
          >
            oddform.works ↗
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} ODDFORM LLC</span>
        <span>
          Framepath is a product by{" "}
          <Link href="https://oddform.works">Oddform</Link>
        </span>
        <span>Built around your media.</span>
      </div>
    </footer>
  );
}
