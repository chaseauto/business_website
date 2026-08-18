"use client";

import { useEffect, useState, useRef } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";

function AnimatedCounter({
  end,
  duration = 1500,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyBar(
          entry.isIntersecting || entry.boundingClientRect.top < 0,
        );
      },
      {
        threshold: 0.1,
      },
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="bg-charcoal text-concrete text-[12.5px] font-medium">
        <div className="max-w-280 mx-auto px-5 py-2.25 flex justify-between items-center gap-3 flex-wrap">
          <span className="opacity-90">
            10/11 Chief Jamiu, Elepe Royal Estate, Aga, Lagos
          </span>
          <span className="text-hazard font-bold uppercase text-[11px] tracking-wide">
            Open Now · Closes 7PM
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-panel border-b border-line sticky top-0 z-50">
        <div className="max-w-280 mx-auto px-5 py-3.5 flex items-center justify-between">
          <div className="font-display font-black text-[19px] tracking-wide">
            <Image
              src="/images/chase_logo.png"
              width="100"
              height="100"
              alt="Chase Logo"
            />
          </div>
          <div className="hidden md:flex gap-7 text-sm font-semibold">
            <a href="#services" className="hover:text-rust transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-rust transition-colors">
              About
            </a>
            <a href="#gallery" className="hover:text-rust transition-colors">
              Gallery
            </a>
            <a href="#contact" className="hover:text-rust transition-colors">
              Contact
            </a>
          </div>

          <button className="md:hidden">
            <Menu />
          </button>
        </div>
      </nav>

      {/* Signature hazard stripe */}
      <div className="h-2 hazard-stripe"></div>

      {/* Hero */}
      {/* Hero */}

      <header className="relative pt-20 pb-16 bg-charcoal text-concrete overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-img.jpg"
            alt="Chase Automobiles Workshop"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-linear-to-r from-charcoal via-charcoal/90 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-charcoal/50 via-transparent to-charcoal/50" />
        </div>

        <div className="relative z-10 max-w-280 mx-auto px-5">
          <h1 className="font-display font-black uppercase leading-[1.2] text-[38px] sm:text-[48px] md:text-[60px] max-w-[15ch]">
            Your car, <br /> <span className="text-hazard">fixed right </span>{" "}
            <br /> the first time.
          </h1>
          <p className="mt-4 text-[15.5px] text-[#C9C6BE] max-w-[42ch]">
            Engine, transmission, brakes, AC and electrical repairs done by
            mechanics who stand behind their work.
          </p>

          <div className="flex flex-col md:flex-row gap-2.5 mt-8 max-w-175">
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

          <div className="grid grid-cols-3 md:max-w-105 border-t border-[#333330] mt-9 pt-6">
            <div className="text-center border-r border-[#333330]">
              <div className="font-display font-black text-2xl text-hazard">
                <AnimatedCounter end={5} suffix="+" />
              </div>
              <div className="text-[10.5px] text-[#A8A49B] uppercase tracking-wide mt-0.5">
                Years Running
              </div>
            </div>
            <div className="text-center border-r border-[#333330]">
              <div className="font-display font-black text-2xl text-hazard">
                <AnimatedCounter end={1000} suffix="+" />
              </div>
              <div className="text-[10.5px] text-[#A8A49B] uppercase tracking-wide mt-0.5">
                Vehicles Fixed
              </div>
            </div>
            <div className="text-center">
              <div className="font-display font-black text-2xl text-hazard">
                <AnimatedCounter end={6} suffix="+" />
              </div>
              <div className="text-[10.5px] text-[#A8A49B] uppercase tracking-wide mt-0.5">
                Certified Mechanics
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section id="services" className="py-11">
        <div className="max-w-280 mx-auto px-5">
          <div className="text-xs font-bold text-rust uppercase tracking-widest mb-2">
            What We Fix
          </div>
          <h2 className="text-[26px] font-extrabold mb-2.5 font-display uppercase">
            Our Services
          </h2>
          <p className="text-[14.5px] text-steel max-w-[48ch] mb-7">
            Full diagnostics and repair across every major system — no
            guesswork, clear pricing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            <div className="bg-panel border border-line rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-16/10 bg-[#D8D3C6] overflow-hidden">
                <Image
                  src="/images/engine_diag.webp"
                  alt="Engine Diagnostics & Repair"
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-extrabold mb-1.5">
                  Engine Diagnostics &amp; Repair
                </h3>
                <p className="text-[13.5px] text-steel mb-2.5">
                  Warning lights, rough idling, power loss — properly diagnosed,
                  properly fixed.
                </p>
                <a
                  href="#contact"
                  className="text-[13px] font-bold text-rust hover:underline"
                >
                  Book service →
                </a>
              </div>
            </div>

            <div
              className="bg-panel border border-line rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              ref={servicesRef}
            >
              <div className="relative aspect-16/10 bg-[#D8D3C6] overflow-hidden">
                <Image
                  src="/images/under_hood.jpg"
                  alt="Transmission Repair"
                  fill
                  sizes="(max-width-768px) 100vw, 33vw"
                  quality={95}
                  unoptimized
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-extrabold mb-1.5">
                  Transmission Repair
                </h3>
                <p className="text-[13.5px] text-steel mb-2.5">
                  Slipping gears, delayed shifts, unusual noise — full
                  transmission service.
                </p>
                <a
                  href="#contact"
                  className="text-[13px] font-bold text-rust hover:underline"
                >
                  Book service →
                </a>
              </div>
            </div>

            {/* <div className="bg-panel border border-line rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-16/10 bg-[#D8D3C6] overflow-hidden">
                <Image
                  src="/images/brake_service.png"
                  alt="Brake Service"
                  fill
                  sizes="(max-width-768px) 100vw, 33vw"
                  quality={95}
                  unoptimized
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-extrabold mb-1.5">
                  Brake Service
                </h3>
                <p className="text-[13.5px] text-steel mb-2.5">
                  Pads, rotors, fluid, and full brake system inspection.
                </p>
                <a
                  href="#contact"
                  className="text-[13px] font-bold text-rust hover:underline"
                >
                  Book service →
                </a>
              </div>
            </div>

            <div className="bg-panel border border-line rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-16/10 bg-[#D8D3C6] overflow-hidden">
                <Image
                  src="/images/ac_service.png"
                  alt="AC Servicing"
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-extrabold mb-1.5">
                  AC Servicing
                </h3>
                <p className="text-[13.5px] text-steel mb-2.5">
                  Not cooling, strange smell, weak airflow — restored fast.
                </p>
                <a
                  href="#contact"
                  className="text-[13px] font-bold text-rust hover:underline"
                >
                  Book service →
                </a>
              </div>
            </div> */}

            <div className="bg-panel border border-line rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-16/10 bg-[#D8D3C6] overflow-hidden">
                <Image
                  src="/images/car_detailing.jpg"
                  alt="Electrical Repairs"
                  fill
                  sizes="(max-width-768px) 100vw, 33vw"
                  quality={95}
                  unoptimized
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-extrabold mb-1.5">
                  Car Wash & Detailing
                </h3>
                <p className="text-[13.5px] text-steel mb-2.5">
                  Full exterior wash and wax, interior vacuuming and trim
                  detail.
                </p>
                <a
                  href="#contact"
                  className="text-[13px] font-bold text-rust hover:underline"
                >
                  Book service →
                </a>
              </div>
            </div>

            {/* <div className="bg-panel border border-line rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-16/10 bg-[#D8D3C6] overflow-hidden">
                <Image
                  src="/images/alignment.jpeg"
                  alt="Suspension & Alignment"
                  fill
                  sizes="(max-width-768px) 100vw, 33vw"
                  quality={95}
                  unoptimized
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-extrabold mb-1.5">
                  Suspension &amp; Alignment
                </h3>
                <p className="text-[13.5px] text-steel mb-2.5">
                  Smoother ride, even tire wear, better handling.
                </p>
                <a
                  href="#contact"
                  className="text-[13px] font-bold text-rust hover:underline"
                >
                  Book service →
                </a>
              </div>
            </div> */}
          </div>
          <div className="mt-6">
            <a
              href="/services"
              className="inline-block px-6 py-3 bg-rust text-white font-bold text-[14px] uppercase tracking-wide rounded hover:bg-opacity-90 transition-all"
            >
              See All Services
            </a>
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

      {/* About */}
      <section
        id="about"
        className="relative isolate overflow-hidden py-20 md:py-24"
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Chase Automobiles Workshop"
          fill
          sizes="100vw"
          className="object-cover opacity-100"
        />

        <div className="absolute inset-0 bg-white/50" />

        <div className="relative z-10 mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-rust">
              Why Chase
            </div>

            <h2 className="mb-4 font-display text-3xl font-extrabold uppercase leading-tight md:text-4xl">
              Precision work. <br />
              <span className="text-hazard">No guesswork.</span>
            </h2>

            <p className="max-w-[58ch] text-[15px] font-medium leading-relaxed text-black/75">
              We diagnose the problem before recommending the repair. With
              modern diagnostic equipment, experienced technicians, transparent
              pricing, and direct communication, Chase Automobiles gives you
              confidence in every repair.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border-2 border-hazard bg-black/10 md:grid-cols-3">
            <div className="bg-white/90 p-6">
              <span className="mb-5 block text-xs font-bold tracking-widest text-rust">
                01
              </span>

              <h3 className="mb-2 font-display text-lg font-extrabold uppercase">
                Accurate Diagnostics
              </h3>

              <p className="text-sm font-medium leading-relaxed text-black/65">
                We identify the actual problem before recommending a repair,
                using modern diagnostic equipment and proven expertise.
              </p>
            </div>

            <div className="bg-white/90 p-6">
              <span className="mb-5 block text-xs font-bold tracking-widest text-rust">
                02
              </span>

              <h3 className="mb-2 font-display text-lg font-extrabold uppercase">
                Transparent Repairs
              </h3>

              <p className="text-sm font-medium leading-relaxed text-black/65">
                Clear explanations, honest recommendations, and transparent
                pricing before the work begins. No unnecessary repairs.
              </p>
            </div>

            <div className="bg-white/90 p-6">
              <span className="mb-5 block text-xs font-bold tracking-widest text-rust">
                03
              </span>

              <h3 className="mb-2 font-display text-lg font-extrabold uppercase">
                Work We Stand Behind
              </h3>

              <p className="text-sm font-medium leading-relaxed text-black/65">
                Quality workmanship matters. We stand behind our repairs so you
                can leave the workshop with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-11">
        <div className="max-w-280 mx-auto px-5">
          <div className="text-sm font-bold text-rust uppercase tracking-widest mb-2">
            Recent Work
          </div>
          <h2 className="text-[26px] font-extrabold mb-7 font-display uppercase">
            From Our Workshop
          </h2>
          <div className="gallery-scroll flex gap-2.5 overflow-x-auto pb-1.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="relative flex-none w-35 h-35 rounded bg-[#D8D3C6] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={`/images/gallery_${i}.png`}
                  alt={`Recent work screenshot ${i}`}
                  fill
                  sizes="140px"
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-charcoal text-concrete py-11">
        <div className="max-w-280 mx-auto px-5">
          <div className="text-sm font-bold text-hazard uppercase tracking-widest mb-2">
            Visit Us
          </div>
          <h2 className="text-[26px] font-extrabold mb-2.5 font-display uppercase text-concrete">
            Find &amp; Reach Chase Automobiles
          </h2>
          <p className="text-[#C9C6BE] text-[14.5px] leading-relaxed">
            45 Oba Sekumade Road, Ogolonto, Ikorodu, Lagos
            <br />
            Open Mon–Sat, 8AM–7PM
          </p>

          <div className="flex flex-col md:flex-row gap-2.5 mt-5">
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
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3.75 rounded font-bold text-[15px] uppercase tracking-wide bg-hazard text-white hover:bg-opacity-90 transition-all"
            >
              Chat on WhatsApp
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Chase+Automobiles+Oba+Sekumade+Road+Ikorodu+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3.75 rounded font-bold text-[15px] uppercase tracking-wide bg-transparent text-concrete border-[1.5px] border-steel hover:border-line transition-all"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="mt-6 aspect-video bg-[#2A2A26] rounded overflow-hidden border border-[#333330]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.330789892914!2d3.500757873668018!3d6.605753493388172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103befce081b1c95%3A0x445f3505a2c36a9a!2sChase%20Automobile%20Services!5e0!3m2!1sen!2sng!4v1786965867621!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chase Automobiles Map Location"
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="py-5 pb-25 md:pb-8 text-center text-sm text-steel">
        © 2026 Chase Automobiles. All rights reserved.
      </footer>

      {/* Sticky mobile action bar */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 flex bg-charcoal shadow-[0_-4px_14px_rgba(0,0,0,0.25)] z-60 transition-all duration-300 ${
          showStickyBar
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
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
          href="#contact"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 pb-3.5 text-[11px] font-bold uppercase tracking-wide text-concrete hover:bg-[#222] transition-colors"
        >
          Directions
        </a>
      </div>
    </>
  );
}
