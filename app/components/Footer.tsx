"use client";

import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/chaseautomobiles",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465a4.9 4.9 0 0 1 1.772 1.153 4.9 4.9 0 0 1 1.153 1.772c.248.637.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.217 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772 4.9 4.9 0 0 1-1.772 1.153c-.637.248-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.217-2.428-.465a4.9 4.9 0 0 1-1.772-1.153 4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.01 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.065.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.363-.415 2.428-.465C8.944 2.01 9.283 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.25A3.25 3.25 0 1 1 12 8.75a3.25 3.25 0 0 1 0 6.5ZM17.25 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/chaseautomobiles",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
        <path d="M13.5 21v-7.6h2.55l.38-3h-2.93V8.41c0-.87.24-1.46 1.5-1.46h1.6V4.27C16.32 4.19 15.42 4.13 14.36 4.13c-2.2 0-3.7 1.34-3.7 3.8v2.47H8.1v3h2.56V21h2.84Z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/2347073836074",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
        <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.57-.49-.5-.67-.5-.17-.01-.37-.01-.57-.01a1.1 1.1 0 0 0-.79.37c-.27.3-1.04 1.02-1.04 2.47 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
        <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.08L2 22l5.06-1.33A9.96 9.96 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2Zm0 18.1a8.1 8.1 0 0 1-4.15-1.14l-.3-.18-3 .79.8-2.92-.2-.3A8.1 8.1 0 1 1 20.1 12a8.1 8.1 0 0 1-8.08 8.1Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/chaseautomobiles",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
        <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.75h3.5V21H3.2V8.75Zm6.2 0h3.35v1.68h.05c.47-.85 1.6-1.75 3.3-1.75 3.53 0 4.18 2.24 4.18 5.15V21h-3.5v-5.5c0-1.31-.02-3-1.85-3-1.86 0-2.14 1.4-2.14 2.9V21H9.4V8.75Z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
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
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-[#4A4A46] text-[#C9C6BE] hover:border-hazard hover:text-hazard transition-colors"
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
