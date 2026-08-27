"use client";

import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/_chaseautomobile",
    hoverBorder: "hover:border-[#E1306C] hover:bg-[#E1306C]/10",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4.5 h-4.5">
        <defs>
          <radialGradient id="igGradient" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="10%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <path
          fill="url(#igGradient)"
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/chase.automobileikd",
    hoverBorder: "hover:border-[#1877F2] hover:bg-[#1877F2]/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="#1877F2" className="w-4.5 h-4.5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@chaseautomobiles",
    hoverBorder: "hover:border-[#25F4EE] hover:bg-white/5",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4.5 h-4.5">
        <path
          fill="#25F4EE"
          d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.46 6.27 6.27 0 0 0 1.88-4.45V8.83a8.28 8.28 0 0 0 4.85 1.57v-3.71Z"
        />
        <path
          fill="#FE2C55"
          d="M18.8 6.4a4.83 4.83 0 0 1-3.4-3.8V2h-2.9v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .6.04.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3.5 15.66a6.34 6.34 0 0 0 10.86 4.46 6.27 6.27 0 0 0 1.88-4.45V8.83a8.28 8.28 0 0 0 4.85 1.57v-3.71l-2.29-.29Z"
          opacity="0.8"
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
    hoverBorder: "hover:border-[#25D366] hover:bg-[#25D366]/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="#25D366" className="w-4.5 h-4.5">
        <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.769.462 3.497 1.342 5.023L2 22l5.093-1.336A9.98 9.98 0 0 0 12.031 22c5.535 0 10.031-4.496 10.031-10.031S17.566 2 12.031 2Zm0 18.344a8.3 8.3 0 0 1-4.234-1.156l-.305-.18-3.148.828.84-3.07-.195-.312a8.3 8.3 0 1 1 15.372-4.423c0 4.582-3.75 8.313-8.33 8.313Zm4.57-6.234c-.25-.125-1.477-.73-1.703-.812-.227-.086-.39-.125-.555.125-.164.25-.64.812-.781.976-.14.164-.281.188-.531.063-.25-.125-1.055-.39-2.01-1.242-.742-.664-1.242-1.484-1.39-1.734-.149-.25-.016-.383.11-.508.117-.117.25-.305.375-.46.125-.157.164-.266.25-.438.086-.18.04-.336-.023-.46-.063-.126-.555-1.337-.766-1.845-.203-.492-.414-.422-.562-.43h-.484c-.164 0-.438.063-.664.305-.227.25-.867.852-.867 2.078 0 1.227.89 2.414 1.016 2.586.125.164 1.758 2.688 4.258 3.766.594.258 1.055.414 1.414.531.594.188 1.14.164 1.562.102.477-.07 1.477-.602 1.688-1.18.21-.586.21-1.086.148-1.188-.062-.101-.226-.164-.476-.289Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/chaseautomobiles",
    hoverBorder: "hover:border-[#0A66C2] hover:bg-[#0A66C2]/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="#0A66C2" className="w-4.5 h-4.5">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Footer = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  function Footer(props, ref) {
    return (
      <footer ref={ref} className="bg-charcoal text-concrete" {...props}>
        <div className="h-2 hazard-stripe"></div>

        <div className="max-w-280 mx-auto px-5 py-12 pb-28 md:pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand + blurb */}
            <div>
              <div className="font-display font-black text-[19px] tracking-wide mb-3">
                <Image
                  src="/images/logo-white.png"
                  width={100}
                  height={100}
                  alt="Chase Logo"
                  className="h-25 w-auto object-contain"
                />
              </div>

              {/* Socials */}
              <div className="flex gap-2.5 mt-5">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className={`w-9 h-9 flex items-center justify-center rounded-full border border-[#4E4E4A] bg-[#2E2E2B] transition-all duration-300 hover:scale-110 ${s.hoverBorder}`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <div className="text-[12px] font-bold uppercase tracking-widest text-[#A8A49B] mb-4">
                Quick Links
              </div>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] font-medium text-concrete hover:text-hazard transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="text-[12px] font-bold uppercase tracking-widest text-[#A8A49B] mb-4">
                Get In Touch
              </div>
              <ul className="space-y-2.5 text-[14px] text-concrete">
                <li>
                  <a
                    href="tel:+2347073836074"
                    className="hover:text-hazard transition-colors"
                  >
                    +234 707 383 6074
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/2347073836074"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-hazard transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </li>
                <li className="text-[#A8A49B] leading-relaxed pt-1">
                  10/11 Chief Jamiu, Elepe Royal Estate, Aga, Lagos
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#333330] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-[12px] text-[#A8A49B]">
              © 2026 Chase Automobiles. All rights reserved.
            </p>
            <p className="text-[12px] text-[#A8A49B]">
              Serving Ikorodu &amp; Lagos since 2022
            </p>
          </div>
        </div>
      </footer>
    );
  },
);

export default Footer;
