"use client";

import { Menu } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "[Name]",
    role: "[Role — e.g. Lead Mechanic]",
    image: "/images/team_1.jpg",
  },
  { name: "[Name]", role: "[Role]", image: "/images/team_2.jpg" },
  { name: "[Name]", role: "[Role]", image: "/images/team_3.jpg" },
  { name: "[Name]", role: "[Role]", image: "/images/team_4.jpg" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <header className="relative py-14 md:py-16 bg-charcoal text-concrete overflow-hidden">
        <div className="relative z-10 max-w-280 mx-auto px-5">
          <div className="text-xs font-bold text-hazard uppercase tracking-widest mb-2">
            Why Chase
          </div>
          <h1 className="font-display font-black uppercase leading-[1.1] text-[32px] sm:text-[40px] md:text-[48px] max-w-[18ch]">
            Built on trust, <span className="text-hazard">not upsells.</span>
          </h1>
          <p className="mt-4 text-[15px] text-[#C9C6BE] max-w-[52ch]">
            [1–2 sentence founding story — who started Chase Automobiles, when,
            and why. Replace with the real story.]
          </p>
        </div>
      </header>

      {/* Stats strip */}
      <section className="py-8 border-b border-line bg-panel">
        <div className="max-w-280 mx-auto px-5">
          <div className="grid grid-cols-3 max-w-105 mx-auto md:mx-0">
            <div className="text-center border-r border-line">
              <div className="font-display font-black text-3xl text-rust">
                5+
              </div>
              <div className="text-[10.5px] text-steel uppercase tracking-wide mt-1">
                Years Running
              </div>
            </div>
            <div className="text-center border-r border-line">
              <div className="font-display font-black text-3xl text-rust">
                1,000+
              </div>
              <div className="text-[10.5px] text-steel uppercase tracking-wide mt-1">
                Vehicles Fixed
              </div>
            </div>
            <div className="text-center">
              <div className="font-display font-black text-3xl text-rust">
                6+
              </div>
              <div className="text-[10.5px] text-steel uppercase tracking-wide mt-1">
                Certified Mechanics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 md:py-16">
        <div className="max-w-280 mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-4/3 bg-[#D8D3C6] rounded overflow-hidden order-2 md:order-1">
            <Image
              src="/images/hero-img.jpg"
              alt="Inside Chase Automobiles workshop"
              fill
              quality={95}
              unoptimized
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="text-xs font-bold text-rust uppercase tracking-widest mb-2">
              Our Mission
            </div>
            <h2 className="text-[24px] font-extrabold mb-4 font-display uppercase leading-tight">
              Fix it right, explain it clearly, stand behind it.
            </h2>
            <p className="text-[14.5px] text-steel leading-relaxed mb-4">
              We diagnose the problem before recommending the repair. With
              modern diagnostic equipment, experienced technicians, transparent
              pricing, and direct communication, Chase Automobiles gives you
              confidence in every repair.
            </p>
            <p className="text-[14.5px] text-steel leading-relaxed">
              [Optional second paragraph — what sets Chase apart locally,
              community involvement, or a specific standard the workshop holds
              itself to.]
            </p>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-panel border-t border-b border-line py-6">
        <div className="max-w-280 mx-auto px-5 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="flex items-center gap-2.5">
            <span className="text-hazard text-lg tracking-[2px]">★★★★★</span>
            <span className="font-extrabold text-base">4.9</span>
            <span className="text-[13px] text-steel">
              from 180+ Google reviews
            </span>
          </div>
          <div className="text-[13px] font-bold text-steel uppercase tracking-wide">
            Serving Ikorodu &amp; Lagos since 2022
          </div>
        </div>
      </div>

      {/* Why choose us pillars */}
      <section className="py-12 md:py-16">
        <div className="max-w-280 mx-auto px-5">
          <div className="text-xs font-bold text-rust uppercase tracking-widest mb-2">
            What Makes Us Different
          </div>
          <h2 className="text-[26px] font-extrabold mb-8 font-display uppercase">
            Why Choose Chase
          </h2>

          <div className="grid gap-px overflow-hidden rounded-xl bg-line md:grid-cols-3">
            <div className="bg-panel p-6">
              <span className="mb-5 block text-xs font-bold tracking-widest text-rust">
                01
              </span>
              <h3 className="mb-2 font-display text-lg font-extrabold uppercase">
                Accurate Diagnostics
              </h3>
              <p className="text-sm font-medium leading-relaxed text-steel">
                We identify the actual problem before recommending a repair,
                using modern diagnostic equipment and proven expertise.
              </p>
            </div>

            <div className="bg-panel p-6">
              <span className="mb-5 block text-xs font-bold tracking-widest text-rust">
                02
              </span>
              <h3 className="mb-2 font-display text-lg font-extrabold uppercase">
                Transparent Repairs
              </h3>
              <p className="text-sm font-medium leading-relaxed text-steel">
                Clear explanations, honest recommendations, and transparent
                pricing before the work begins. No unnecessary repairs.
              </p>
            </div>

            <div className="bg-panel p-6">
              <span className="mb-5 block text-xs font-bold tracking-widest text-rust">
                03
              </span>
              <h3 className="mb-2 font-display text-lg font-extrabold uppercase">
                Work We Stand Behind
              </h3>
              <p className="text-sm font-medium leading-relaxed text-steel">
                Quality workmanship matters. We stand behind our repairs so you
                can leave the workshop with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 md:py-16 bg-panel border-t border-line">
        <div className="max-w-280 mx-auto px-5">
          <div className="text-xs font-bold text-rust uppercase tracking-widest mb-2">
            The People Behind The Work
          </div>
          <h2 className="text-[26px] font-extrabold mb-8 font-display uppercase">
            Meet the Team
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <div className="relative aspect-square bg-[#D8D3C6] rounded overflow-hidden mb-3">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    quality={95}
                    unoptimized
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[14px] font-extrabold">{member.name}</h3>
                <p className="text-[12.5px] text-steel">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-concrete py-11">
        <div className="max-w-280 mx-auto px-5">
          <div className="text-xs font-bold text-hazard uppercase tracking-widest mb-2">
            Ready When You Are
          </div>
          <h2 className="text-[24px] font-extrabold mb-2.5 font-display uppercase text-concrete">
            Bring Your Car In, Or Talk To Us First
          </h2>
          <p className="text-[#C9C6BE] text-[14.5px] max-w-[52ch]">
            Call, message us on WhatsApp, or drive straight in — whichever's
            easiest for you.
          </p>

          <div className="flex flex-col md:flex-row gap-2.5 mt-6">
            <a
              href="tel:+2348031234567"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3.75 rounded font-bold text-[15px] uppercase tracking-wide bg-rust text-white hover:bg-opacity-90 transition-all"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/2348031234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3.75 rounded font-bold text-[15px] uppercase tracking-wide bg-hazard text-charcoal hover:bg-opacity-90 transition-all"
            >
              Chat on WhatsApp
            </a>
            <a
              href="/contact"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3.75 rounded font-bold text-[15px] uppercase tracking-wide bg-transparent text-concrete border-[1.5px] border-steel hover:border-line transition-all"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <footer className="py-5 pb-8 md:pb-8 text-center text-sm text-steel">
        © 2026 Chase Automobiles. All rights reserved.
      </footer>

      {/* Sticky mobile action bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 flex bg-charcoal shadow-[0_-4px_14px_rgba(0,0,0,0.25)] z-60">
        <a
          href="tel:+2348031234567"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 pb-3.5 text-[11px] font-bold uppercase tracking-wide text-concrete border-r border-[#333330] bg-rust hover:bg-opacity-95 transition-all"
        >
          Call
        </a>
        <a
          href="https://wa.me/2348031234567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-hazard flex flex-col items-center justify-center gap-0.5 py-2.5 pb-3.5 text-[11px] font-bold uppercase tracking-wide text-concrete hover:bg-[#222] transition-colors"
        >
          WhatsApp
        </a>
        <a
          href="/contact"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 pb-3.5 text-[11px] font-bold uppercase tracking-wide text-concrete hover:bg-[#222] transition-colors"
        >
          Directions
        </a>
      </div>
    </>
  );
}
