"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";

const team = [
  {
    name: "[Name]",
    role: "[Role]",
    image: "/images/placeholder.jpg",
  },
  { name: "[Name]", role: "[Role]", image: "/images/placeholder.jpg" },
  { name: "[Name]", role: "[Role]", image: "/images/placeholder.jpg" },
  { name: "[Name]", role: "[Role]", image: "/images/placeholder.jpg" },
];

export default function AboutPage() {
  const belowHeroRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const [isHeroPast, setIsHeroPast] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const heroObs = new IntersectionObserver(
      ([entry]) => {
        setIsHeroPast(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      { threshold: 0.1 },
    );
    if (belowHeroRef.current) heroObs.observe(belowHeroRef.current);
    return () => heroObs.disconnect();
  }, []);

  useEffect(() => {
    const footerObs = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    if (footerRef.current) footerObs.observe(footerRef.current);
    return () => footerObs.disconnect();
  }, []);

  const showStickyBar = isHeroPast && !isFooterVisible;

  return (
    <>
      {/* Page header */}
      <header className="relative bg-charcoal text-concrete overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.png"
            alt="Chase Automobiles Workshop"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-linear-to-r from-charcoal via-charcoal/75 to-charcoal/20" />
          <div className="absolute inset-0 bg-linear-to-t from-charcoal via-transparent to-charcoal/40" />
        </div>

        <div className="relative z-10 max-w-280 mx-auto px-5 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="font-display font-black uppercase leading-[1.05] text-[42px] sm:text-[56px] md:text-[72px]">
              Built on trust,{" "}
              <span className="text-hazard">and excellence.</span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[17px] leading-relaxed text-[#C9C6BE] max-w-[58ch]">
              At Chase Automobile, we believe that your car deserves the best
              care. That means honest service, expert workmanship, and attention
              to every detail, so you can drive away with confidence knowing
              your vehicle is in good hands.
            </p>
            <div className="flex flex-col md:flex-row gap-2.5 mt-8 max-w-175">
              <a
                href="tel:+2347073836074"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.75 rounded font-bold text-[15px] uppercase tracking-wide bg-rust text-white hover:bg-opacity-90 transition-all"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/2347073836074"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.75 rounded font-bold text-[15px] uppercase tracking-wide bg-hazard text-white hover:bg-opacity-90 transition-all"
              >
                WhatsApp Us
              </a>
              <a
                href="#contact"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.75 rounded font-bold text-[15px] uppercase tracking-wide bg-transparent text-concrete border-[1.5px] border-steel hover:border-line transition-all"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Story */}
      <section ref={belowHeroRef} className="py-12 md:py-16">
        <div className="max-w-280 mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-4/3 bg-[#D8D3C6] rounded overflow-hidden order-2 md:order-1">
            <Image
              src="/images/another-hero.png"
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
            <p className="text-[14.5px] text-steel leading-relaxed"></p>
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-12 md:py-16 bg-panel border-t border-line">
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
      </section> */}

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
              href="tel:+2347073836074"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3.75 rounded font-bold text-[15px] uppercase tracking-wide bg-rust text-white hover:bg-opacity-90 transition-all"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/2347073836074"
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

      {/* Footer */}
      <Footer ref={footerRef} />

      {/* Sticky mobile action bar */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 flex bg-charcoal shadow-[0_-4px_14px_rgba(0,0,0,0.25)] z-60 transition-all duration-300 ${
          showStickyBar
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <a
          href="tel:+2347073836074"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 pb-3.5 text-[11px] font-bold uppercase tracking-wide text-concrete border-r border-[#333330] bg-rust hover:bg-opacity-95 transition-all"
        >
          Call
        </a>
        <a
          href="https://wa.me/2347073836074"
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
