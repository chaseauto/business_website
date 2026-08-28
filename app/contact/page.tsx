"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";

const serviceOptions = [
  "Not sure — need a diagnosis",
  "Engine",
  "Transmission",
  "Brakes",
  "AC",
  "Electrical",
  "Charging System Diagnosis",
  "Car Scanning & Programming",
  "Suspension & Alignment",
  "Car Wash",
  "Car Detailing",
  "Body Collision Repair",
  "Something else",
];

export default function ContactPage() {
  const belowHeroRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);
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

  const [form, setForm] = useState({
    name: "",
    phone: "",
    need: serviceOptions[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to form endpoint / API route
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal text-concrete">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Chase Automobiles Contact"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-r from-charcoal via-charcoal/95 to-charcoal/20" />
          <div className="absolute inset-0 bg-linear-to-t from-charcoal via-transparent to-charcoal/40" />
        </div>

        <div className="relative z-10 max-w-280 mx-auto px-5 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="font-display font-black uppercase leading-[1.05] text-[42px] sm:text-[56px] md:text-[72px]">
              Call, message,
              <br />
              <span className="text-hazard">or drive in.</span>
            </h1>

            <p className="mt-6 text-[16px] md:text-[17px] leading-relaxed text-[#C9C6BE] max-w-[58ch]">
              Whatever's wrong with the car, the fastest way to sort it is to
              reach us directly. We inspect, diagnose, and explain before any
              work begins.
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
      </section>

      {/* Workshop details + map */}
      <section className="py-11">
        <div className="max-w-280 mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="text-xs font-bold text-rust uppercase tracking-widest mb-2">
              Visit Us
            </div>
            <h2 className="text-[22px] font-extrabold mb-4 font-display uppercase">
              Chase Automobiles Workshop
            </h2>

            <div className="relative aspect-16/10 bg-[#D8D3C6] rounded overflow-hidden mb-5">
              <Image
                src="/images/truck.png"
                alt="Chase Automobiles workshop exterior"
                fill
                quality={95}
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="border border-line rounded overflow-hidden">
              <div className="flex justify-between items-center px-4 py-3 border-b border-line bg-panel">
                <span className="text-[13px] font-bold uppercase tracking-wide text-steel">
                  Address
                </span>
                <span className="text-[13.5px] font-semibold text-right">
                  10/11 Chief Jamiu, Elepe Royal Estate, Aga, Ikorodu, Lagos
                </span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 border-b border-line bg-panel">
                <span className="text-[13px] font-bold uppercase tracking-wide text-steel">
                  Mon–Fri
                </span>
                <span className="text-[13.5px] font-semibold">
                  8:00 AM – 6:00 PM
                </span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 border-b border-line bg-panel">
                <span className="text-[13px] font-bold uppercase tracking-wide text-steel">
                  Saturday
                </span>
                <span className="text-[13.5px] font-semibold">
                  8:00 AM – 2:00 PM
                </span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 bg-panel">
                <span className="text-[13px] font-bold uppercase tracking-wide text-steel">
                  Sunday
                </span>
                <span className="text-[13.5px] font-semibold">Closed</span>
              </div>
            </div>
          </div>

          <div>
            <div
              className="w-full aspect-16/10 md:aspect-auto md:h-full min-h-75 bg-[#D8D3C6] rounded overflow-hidden border border-line"
              ref={belowHeroRef}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.330789892914!2d3.500757873668018!3d6.605753493388172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103befce081b1c95%3A0x445f3505a2c36a9a!2sChase%20Automobile%20Services!5e0!3m2!1sen!2sng!4v1786965867621!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chase Automobiles Map Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="bg-charcoal text-concrete py-12">
        <div className="max-w-280 mx-auto px-5">
          <div className="max-w-160">
            <div className="text-xs font-bold text-hazard uppercase tracking-widest mb-2">
              Prefer To Write It Out?
            </div>
            <h2 className="text-[24px] font-extrabold mb-2.5 font-display uppercase text-concrete">
              Send Us a Quick Enquiry
            </h2>
            <p className="text-[#C9C6BE] text-[14.5px] mb-7">
              Tell us what's going on with the car and we'll get back to you by
              phone or WhatsApp, usually within the hour during opening times.
            </p>

            {submitted ? (
              <div className="border border-hazard bg-hazard/10 rounded p-5">
                <p className="text-[15px] font-bold text-hazard">
                  Got it — thanks.
                </p>
                <p className="text-[13.5px] text-[#C9C6BE] mt-1">
                  We'll reach out shortly. If it's urgent, just call or WhatsApp
                  us directly using the buttons above.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[12px] font-bold uppercase tracking-wide text-[#A8A49B] mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-transparent border border-steel rounded px-4 py-3 text-[14.5px] text-concrete placeholder:text-[#6B6B65] focus:outline-none focus:border-hazard transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[12px] font-bold uppercase tracking-wide text-[#A8A49B] mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="080X XXX XXXX"
                    className="w-full bg-transparent border border-steel rounded px-4 py-3 text-[14.5px] text-concrete placeholder:text-[#6B6B65] focus:outline-none focus:border-hazard transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="need"
                    className="block text-[12px] font-bold uppercase tracking-wide text-[#A8A49B] mb-1.5"
                  >
                    What Does Your Car Need?
                  </label>
                  <select
                    id="need"
                    name="need"
                    value={form.need}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-steel rounded px-4 py-3 text-[14.5px] text-concrete focus:outline-none focus:border-hazard transition-colors"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-charcoal">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[12px] font-bold uppercase tracking-wide text-[#A8A49B] mb-1.5"
                  >
                    Message{" "}
                    <span className="normal-case font-medium text-[#6B6B65]">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Anything else worth knowing — symptoms, when it started, etc."
                    className="w-full bg-transparent border border-steel rounded px-4 py-3 text-[14.5px] text-concrete placeholder:text-[#6B6B65] focus:outline-none focus:border-hazard transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3.5 rounded font-bold text-[15px] uppercase tracking-wide bg-rust text-white hover:bg-opacity-90 transition-all"
                >
                  Send Enquiry
                </button>
              </form>
            )}
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
          href="https://www.google.com/maps/search/?api=1&query=Chase+Automobiles+Oba+Sekumade+Road+Ikorodu+Lagos"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 pb-3.5 text-[11px] font-bold uppercase tracking-wide text-concrete hover:bg-[#222] transition-colors"
        >
          Directions
        </a>
      </div>
    </>
  );
}
