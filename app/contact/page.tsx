"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";

const serviceOptions = [
  "Not sure — need a diagnosis",
  "Engine",
  "Transmission",
  "Brakes",
  "AC",
  "Electrical",
  "Suspension & Alignment",
  "Car Wash & Detailing",
  "Something else",
];

export default function ContactPage() {
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
      {/* Info bar */}
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
          <a
            href="/"
            className="font-display font-black text-[19px] tracking-wide"
          >
            <Image
              src="/images/chase_logo.png"
              width="100"
              height="100"
              alt="Chase Logo"
            />
          </a>
          <div className="hidden md:flex gap-7 text-sm font-semibold">
            <a href="/services" className="hover:text-rust transition-colors">
              Services
            </a>
            <a href="/#about" className="hover:text-rust transition-colors">
              About
            </a>
            <a href="/#gallery" className="hover:text-rust transition-colors">
              Gallery
            </a>
            <a href="/contact" className="text-rust">
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

      {/* Page header */}
      <header className="relative py-12 md:py-14 bg-charcoal text-concrete overflow-hidden">
        <div className="relative z-10 max-w-280 mx-auto px-5">
          <div className="text-xs font-bold text-hazard uppercase tracking-widest mb-2">
            Get In Touch
          </div>
          <h1 className="font-display font-black uppercase leading-[1.1] text-[30px] sm:text-[38px] md:text-[44px] max-w-[18ch]">
            Call, message, or drive in.
          </h1>
          <p className="mt-3 text-[15px] text-[#C9C6BE] max-w-[52ch]">
            Whatever's wrong with the car, the fastest way to sort it is to
            reach us directly.
          </p>
        </div>
      </header>

      {/* Primary actions — call / whatsapp / directions */}
      <section className="py-9 border-b border-line">
        <div className="max-w-280 mx-auto px-5">
          <div className="flex flex-col md:flex-row gap-2.5">
            <a
              href="tel:+2348031234567"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-4 rounded font-bold text-[16px] uppercase tracking-wide bg-rust text-white hover:bg-opacity-90 transition-all"
            >
              Call +234 803 123 4567
            </a>
            <a
              href="https://wa.me/2348031234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-4 rounded font-bold text-[16px] uppercase tracking-wide bg-hazard text-charcoal hover:bg-opacity-90 transition-all"
            >
              Chat on WhatsApp
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Chase+Automobiles+Oba+Sekumade+Road+Ikorodu+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-4 rounded font-bold text-[16px] uppercase tracking-wide bg-transparent text-charcoal border-[1.5px] border-charcoal hover:bg-charcoal hover:text-concrete transition-all"
            >
              Get Directions
            </a>
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
                src="/images/hero-img.jpg"
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
                  10/11 Chief Jamiu, Elepe Royal Estate, Aga, Lagos
                </span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 border-b border-line bg-panel">
                <span className="text-[13px] font-bold uppercase tracking-wide text-steel">
                  Mon–Fri
                </span>
                <span className="text-[13.5px] font-semibold">
                  8:00 AM – 7:00 PM
                </span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 border-b border-line bg-panel">
                <span className="text-[13px] font-bold uppercase tracking-wide text-steel">
                  Saturday
                </span>
                <span className="text-[13.5px] font-semibold">
                  8:00 AM – 5:00 PM
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
            <div className="aspect-16/10 md:aspect-auto md:h-full min-h-75 bg-[#D8D3C6] rounded overflow-hidden border border-line">
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
              Tell us what's going on with the car — we'll get back to you by
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
