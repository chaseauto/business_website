"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/_chaseautomobile",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <defs>
          <radialGradient id="navIgGrad" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="10%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <path
          fill="url(#navIgGrad)"
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/chase.automobileikd",
    icon: (
      <svg viewBox="0 0 24 24" fill="#1877F2" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@chaseautomobiles",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path
          fill="#25F4EE"
          d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.46 6.27 6.27 0 0 0 1.88-4.45V8.83a8.28 8.28 0 0 0 4.85 1.57v-3.71Z"
        />
        <path
          fill="#FE2C55"
          d="M18.8 6.4a4.83 4.83 0 0 1-3.4-3.8V2h-2.9v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .6.04.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3.5 15.66a6.34 6.34 0 0 0 10.86 4.46 6.27 6.27 0 0 0 1.88-4.45V8.83a8.28 8.28 0 0 0 4.85 1.57v-3.71l-2.29-.29Z"
          opacity="0.85"
        />
        <path
          fill="#FFFFFF"
          d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.46 6.27 6.27 0 0 0 1.88-4.45V8.83a8.28 8.28 0 0 0 4.85 1.57v-3.71Z"
        />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/2347073836074",
    icon: (
      <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5">
        <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.769.462 3.497 1.342 5.023L2 22l5.093-1.336A9.98 9.98 0 0 0 12.031 22c5.535 0 10.031-4.496 10.031-10.031S17.566 2 12.031 2Zm0 18.344a8.3 8.3 0 0 1-4.234-1.156l-.305-.18-3.148.828.84-3.07-.195-.312a8.3 8.3 0 1 1 15.372-4.423c0 4.582-3.75 8.313-8.33 8.313Zm4.57-6.234c-.25-.125-1.477-.73-1.703-.812-.227-.086-.39-.125-.555.125-.164.25-.64.812-.781.976-.14.164-.281.188-.531.063-.25-.125-1.055-.39-2.01-1.242-.742-.664-1.242-1.484-1.39-1.734-.149-.25-.016-.383.11-.508.117-.117.25-.305.375-.46.125-.157.164-.266.25-.438.086-.18.04-.336-.023-.46-.063-.126-.555-1.337-.766-1.845-.203-.492-.414-.422-.562-.43h-.484c-.164 0-.438.063-.664.305-.227.25-.867.852-.867 2.078 0 1.227.89 2.414 1.016 2.586.125.164 1.758 2.688 4.258 3.766.594.258 1.055.414 1.414.531.594.188 1.14.164 1.562.102.477-.07 1.477-.602 1.688-1.18.21-.586.21-1.086.148-1.188-.062-.101-.226-.164-.476-.289Z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav className="bg-panel border-b border-line sticky top-0 z-50">
        <div className="max-w-280 mx-auto px-5 py-3.5 flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex h-10 w-30 shrink-0 items-center"
          >
            <Image
              src="/images/chase-logo.png"
              width={120}
              height={60}
              alt="Chase Logo"
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex gap-7 text-sm font-semibold">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition-colors ${
                  isActive(href) ? "text-hazard" : "hover:text-hazard"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <button
            id="mobile-menu-toggle"
            className="md:hidden p-1.5 rounded-md hover:bg-line transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((o) => !o)}
          >
            {isMobileMenuOpen ? (
              <Image
                src="/images/x-icon.png"
                alt="Close"
                width={30}
                height={30}
              />
            ) : (
              <Image
                src="/images/hamburger.png"
                alt="Open"
                unoptimized
                width={30}
                height={30}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile sidebar backdrop */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/60 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile sidebar */}
      <aside
        id="mobile-sidebar"
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] z-50 md:hidden bg-panel border-l border-line shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-line">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex h-10 w-30 shrink-0 items-center"
          >
            <Image
              src="/images/chase-logo.png"
              width={120}
              height={60}
              alt="Chase Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>
          <button
            className="p-1.5 rounded-md hover:bg-line transition-colors"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/images/x-icon.png"
              alt="Close"
              width={30}
              height={30}
            />
          </button>
        </div>

        {/* Sidebar nav links */}
        <nav className="flex flex-col px-5 pt-6 gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-3.5 rounded-lg text-[15px] font-semibold transition-all ${
                isActive(href)
                  ? "text-hazard bg-line"
                  : "hover:bg-line hover:text-hazard"
              }`}
            >
              {isActive(href) && (
                <span className="w-1.5 h-1.5 rounded-full bg-hazard" />
              )}
              {label}
            </Link>
          ))}
        </nav>

        {/* Sidebar CTA & Socials */}
        <div className="mt-auto px-5 py-6 border-t border-line flex flex-col gap-4">
          <div className="flex flex-col gap-2.5">
            <a
              href="tel:+2347073836074"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-5 py-3.25 rounded font-bold text-[14px] uppercase tracking-wide bg-rust text-white hover:bg-opacity-90 transition-all"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/2347073836074"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-5 py-3.25 rounded font-bold text-[14px] uppercase tracking-wide bg-hazard text-white hover:bg-opacity-90 transition-all"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Social icons row */}
          <div className="pt-2 flex items-center justify-center gap-3.5">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="w-10.5 h-10.5 flex items-center justify-center rounded-full border border-[#333330] bg-gray-800 shadow-xs hover:scale-110 hover:border-steel transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
