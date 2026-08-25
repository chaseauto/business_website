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
              src="/images/chase_logo.png"
              width={120}
              height={40}
              alt="Chase Logo"
              className="h-10 w-auto object-contain"
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
              src="/images/chase_logo.png"
              width={120}
              height={40}
              alt="Chase Logo"
              className="h-10 w-auto object-contain"
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

        {/* Sidebar CTA */}
        <div className="mt-auto px-5 py-6 border-t border-line flex flex-col gap-2.5">
          <a
            href="tel:+2348031234567"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 px-5 py-3.25 rounded font-bold text-[14px] uppercase tracking-wide bg-rust text-white hover:bg-opacity-90 transition-all"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/2348031234567"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 px-5 py-3.25 rounded font-bold text-[14px] uppercase tracking-wide bg-hazard text-white hover:bg-opacity-90 transition-all"
          >
            WhatsApp Us
          </a>
        </div>
      </aside>
    </>
  );
}
