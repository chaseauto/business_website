"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "../components/Navbar";

type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    slug: "engine-diagnostics-repair",
    title: "Engine Diagnostics & Repair",
    description:
      "Warning lights, rough idling, power loss — properly diagnosed, properly fixed.",
    image: "/images/why_section.png",
  },
  {
    slug: "transmission-repair",
    title: "Transmission Repair",
    description:
      "Slipping gears, delayed shifts, unusual noise — full transmission service.",
    image: "/images/under_hood.png",
  },
  {
    slug: "brake-service",
    title: "Brake Service",
    description: "Pads, rotors, fluid, and full brake system inspection.",
    image: "/images/open_car.webp",
  },
  {
    slug: "ac-servicing",
    title: "AC Servicing",
    description: "Not cooling, strange smell, weak airflow — restored fast.",
    image: "/images/ac_repairs.png",
  },
  {
    slug: "electrical-repairs",
    title: "Electrical Repairs",
    description:
      "Battery, alternator, wiring faults, dashboard warning lights.",
    image: "/images/electric_repairs.png",
  },
  {
    slug: "suspension-alignment",
    title: "Suspension & Alignment",
    description: "Smoother ride, even tire wear, better handling.",
    image: "/images/suspension_service.png",
  },
  {
    slug: "car-wash-detailing",
    title: "Car Wash & Detailing",
    description:
      "Full exterior wash and wax, interior vacuuming and trim detail.",
    image: "/images/car_detailing.jpg",
  },
];

const serviceDetails: Record<
  string,
  {
    eyebrow: string;
    intro: string;
    includes: string[];
    symptoms: string[];
  }
> = {
  "engine-diagnostics-repair": {
    eyebrow: "01 / Engine",
    intro:
      "We inspect the system, identify the fault, and recommend the repair that actually addresses the problem.",
    includes: [
      "Computer diagnostics",
      "Engine fault diagnosis",
      "Oil leak inspection",
      "Overheating diagnosis",
      "Misfire diagnosis",
      "Engine servicing",
    ],
    symptoms: [
      "Check-engine light",
      "Rough or unstable idle",
      "Loss of power",
      "Engine overheating",
      "Unusual engine noise",
      "Difficulty starting",
    ],
  },

  "transmission-repair": {
    eyebrow: "02 / Transmission",
    intro:
      "We diagnose shifting problems and inspect the transmission before recommending service, repair, or replacement.",
    includes: [
      "Transmission diagnostics",
      "Transmission fluid service",
      "Shift problem diagnosis",
      "Transmission leak inspection",
      "Gear engagement diagnosis",
      "Transmission repair",
    ],
    symptoms: [
      "Slipping gears",
      "Delayed gear changes",
      "Hard shifting",
      "Transmission noise",
      "Vehicle won't engage",
      "Transmission fluid leaks",
    ],
  },

  "brake-service": {
    eyebrow: "03 / Brakes",
    intro:
      "We inspect the components responsible for stopping your vehicle and identify worn or damaged parts before they become a bigger problem.",
    includes: [
      "Brake system inspection",
      "Brake pad replacement",
      "Rotor inspection",
      "Brake fluid service",
      "Brake noise diagnosis",
      "Brake performance checks",
    ],
    symptoms: [
      "Squealing or grinding",
      "Soft brake pedal",
      "Vehicle pulling while braking",
      "Brake vibration",
      "Longer stopping distance",
      "Brake warning light",
    ],
  },

  "ac-servicing": {
    eyebrow: "04 / Climate Control",
    intro:
      "We diagnose cooling problems, airflow issues, leaks, and other faults to get your cabin comfortable again.",
    includes: [
      "AC system diagnostics",
      "Refrigerant service",
      "Leak inspection",
      "Compressor inspection",
      "Cooling system checks",
      "Airflow diagnosis",
    ],
    symptoms: [
      "AC not cooling",
      "Weak airflow",
      "Strange smell",
      "AC cutting off",
      "Warm air from vents",
      "Unusual AC noise",
    ],
  },

  "electrical-repairs": {
    eyebrow: "05 / Electrical",
    intro:
      "We trace electrical faults instead of throwing batteries and parts at the problem.",
    includes: [
      "Electrical diagnostics",
      "Battery inspection",
      "Alternator testing",
      "Starter system diagnosis",
      "Wiring fault diagnosis",
      "Dashboard warning diagnosis",
    ],
    symptoms: [
      "Car won't start",
      "Battery keeps dying",
      "Flickering lights",
      "Electrical warning lights",
      "Power windows not working",
      "Electrical components failing",
    ],
  },

  "suspension-alignment": {
    eyebrow: "06 / Suspension",
    intro:
      "We inspect suspension components and alignment issues affecting how your car drives.",
    includes: [
      "Suspension inspection",
      "Shock absorber inspection",
      "Steering component checks",
      "Wheel alignment",
      "Uneven tyre wear diagnosis",
      "Handling problem diagnosis",
    ],
    symptoms: [
      "Car pulling to one side",
      "Uneven tyre wear",
      "Bumpy or harsh ride",
      "Steering vibration",
      "Knocking sounds",
      "Poor handling",
    ],
  },

  "car-wash-detailing": {
    eyebrow: "07 / Detailing",
    intro:
      "Our detailing service brings the exterior and interior back to a cleaner, sharper condition.",
    includes: [
      "Exterior wash",
      "Exterior wax",
      "Interior vacuuming",
      "Interior trim cleaning",
      "Dashboard cleaning",
      "General vehicle detailing",
    ],
    symptoms: [
      "Dirty exterior",
      "Dull paint",
      "Dusty interior",
      "Dirty trim",
      "Stained surfaces",
      "Vehicle needs a refresh",
    ],
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-concrete text-charcoal">
      {/* Top Bar */}
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

      {/* Navigation */}
      <Navbar />

      {/* Hazard Stripe */}
      <div className="h-2 hazard-stripe" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal text-concrete">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-2.jpg"
            alt="Chase Automobiles Workshop"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />

          <div className="absolute inset-0 bg-linear-to-r from-charcoal via-charcoal/95 to-charcoal/20" />
          <div className="absolute inset-0 bg-linear-to-t from-charcoal via-transparent to-charcoal/40" />
        </div>

        <div className="relative z-10 max-w-280 mx-auto px-5 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="font-display font-black uppercase leading-[1.05] text-[42px] sm:text-[56px] md:text-[72px]">
              Repairs that
              <br />
              <span className="text-hazard">make sense.</span>
            </h1>

            <p className="mt-6 text-[16px] md:text-[17px] leading-relaxed text-[#C9C6BE] max-w-[58ch]">
              From engine diagnostics to brake repairs, AC servicing and
              detailing, Chase Automobiles handles the systems that keep your
              car running, stopping, and driving properly.
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
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 md:py-20">
        <div className="max-w-280 mx-auto px-5">
          <div className="mb-12">
            <div className="text-xs font-bold text-rust uppercase tracking-[0.2em] mb-2">
              Our Services
            </div>

            <h2 className="font-display font-black uppercase text-[30px] md:text-[42px] leading-tight">
              One workshop.
              <br />
              <span className="text-hazard">Every major system.</span>
            </h2>
          </div>

          <div className="space-y-12 md:space-y-20">
            {services.map((service, index) => {
              const detail = serviceDetails[service.slug];
              const reversed = index % 2 !== 0;

              return (
                <article
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-28"
                >
                  <div
                    className={`grid lg:grid-cols-2 border border-line bg-panel overflow-hidden ${
                      reversed ? "lg:[&>div:first-child]:order-2" : ""
                    }`}
                  >
                    {/* Image */}
                    <div className="relative min-h-70 lg:min-h-125 bg-[#D8D3C6]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        quality={90}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-charcoal/65 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-9 lg:p-11 flex flex-col justify-center">
                      <h3 className="font-display font-black uppercase text-[28px] md:text-[36px] leading-[1.05] mb-4">
                        {service.title}
                      </h3>

                      <p className="text-[15px] font-medium leading-relaxed text-steel max-w-[58ch]">
                        {detail.intro}
                      </p>

                      {/* What we handle */}
                      <div className="mt-8">
                        <div className="text-[11px] font-black uppercase tracking-widest text-rust mb-3">
                          What We Handle
                        </div>

                        <div className="grid sm:grid-cols-2 gap-x-5 gap-y-2">
                          {detail.includes.map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-2 text-[13px] font-semibold"
                            >
                              <Check
                                size={15}
                                strokeWidth={3}
                                className="text-rust mt-0.5 shrink-0"
                              />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Common symptoms */}
                      <div className="mt-7 pt-6 border-t border-line">
                        <div className="text-[11px] font-black uppercase tracking-widest text-rust mb-3">
                          You May Notice
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {detail.symptoms.map((symptom) => (
                            <span
                              key={symptom}
                              className="border border-line px-2.5 py-1.5 text-[11px] font-semibold text-steel"
                            >
                              {symptom}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8">
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 bg-rust text-white px-5 py-3 font-bold text-[13px] uppercase tracking-wide hover:bg-opacity-90 transition-all"
                        >
                          Book This Service
                          <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diagnostic CTA */}
      <section className="relative overflow-hidden bg-charcoal text-concrete">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/under_hood.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-charcoal/85" />

        <div className="relative z-10 max-w-280 mx-auto px-5 py-18 md:py-24">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-hazard uppercase tracking-[0.2em] mb-3">
              Not Sure What's Wrong?
            </div>

            <h2 className="font-display font-black uppercase text-[34px] md:text-[52px] leading-[1.05]">
              You don't need to
              <br />
              <span className="text-hazard">diagnose your car.</span>
            </h2>

            <p className="mt-5 text-[15px] md:text-[16px] leading-relaxed text-[#C9C6BE] max-w-[55ch]">
              Tell us what the car is doing. We'll inspect it, identify the
              problem, explain what needs to be done, and give you a clear path
              forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 mt-8">
              <a
                href="tel:+2348031234567"
                className="inline-flex items-center justify-center px-6 py-3.75 bg-rust text-white font-bold text-[14px] uppercase tracking-wide hover:bg-opacity-90 transition-all"
              >
                Talk To A Mechanic
              </a>

              <a
                href="https://wa.me/2348031234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.75 border border-steel text-concrete font-bold text-[14px] uppercase tracking-wide hover:border-concrete transition-all"
              >
                Describe The Problem
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 md:py-20 bg-panel border-b border-line">
        <div className="max-w-280 mx-auto px-5">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div>
              <div className="text-xs font-bold text-rust uppercase tracking-[0.2em] mb-2">
                How We Work
              </div>

              <h2 className="font-display font-black uppercase text-[30px] md:text-[40px] leading-tight">
                Precision work.
                <br />
                <span className="text-hazard">No guesswork.</span>
              </h2>

              <p className="mt-4 text-[14.5px] leading-relaxed text-steel max-w-[45ch]">
                We diagnose the problem before recommending the repair. You
                should know what is wrong with your car and why we're fixing it.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-line border border-line">
              <div className="bg-concrete p-6">
                <div className="font-display text-4xl font-black text-rust mb-6">
                  01
                </div>

                <h3 className="font-display font-black uppercase text-lg mb-2">
                  Diagnose
                </h3>

                <p className="text-[13px] text-steel leading-relaxed">
                  We inspect the vehicle and identify the actual fault before
                  recommending work.
                </p>
              </div>

              <div className="bg-concrete p-6">
                <div className="font-display text-4xl font-black text-rust mb-6">
                  02
                </div>

                <h3 className="font-display font-black uppercase text-lg mb-2">
                  Explain
                </h3>

                <p className="text-[13px] text-steel leading-relaxed">
                  We explain what is wrong, what needs attention, and what the
                  repair involves.
                </p>
              </div>

              <div className="bg-concrete p-6">
                <div className="font-display text-4xl font-black text-rust mb-6">
                  03
                </div>

                <h3 className="font-display font-black uppercase text-lg mb-2">
                  Repair
                </h3>

                <p className="text-[13px] text-steel leading-relaxed">
                  We carry out the necessary work properly and get you back on
                  the road.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="bg-charcoal text-concrete py-14 md:py-18"
      >
        <div className="max-w-280 mx-auto px-5">
          <div className="text-xs font-bold text-hazard uppercase tracking-[0.2em] mb-2">
            Need A Repair?
          </div>

          <h2 className="font-display font-black uppercase text-[30px] md:text-[42px] leading-tight">
            Bring it in.
            <br />
            <span className="text-hazard">We'll find the problem.</span>
          </h2>

          <p className="mt-4 text-[#C9C6BE] text-[14.5px] leading-relaxed max-w-[50ch]">
            10/11 Chief Jamiu, Elepe Royal Estate, Aga, Lagos
            <br />
            Open Mon–Sat, 8AM–7PM
          </p>

          <div className="flex flex-col md:flex-row gap-2.5 mt-7">
            <a
              href="tel:+2348031234567"
              className="flex-1 flex items-center justify-center px-5 py-3.75 bg-rust text-white font-bold text-[14px] uppercase tracking-wide hover:bg-opacity-90 transition-all"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/2348031234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center px-5 py-3.75 bg-hazard text-white font-bold text-[14px] uppercase tracking-wide hover:bg-opacity-90 transition-all"
            >
              Chat on WhatsApp
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Chase+Automobiles+Oba+Sekumade+Road+Ikorodu+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center px-5 py-3.75 border border-steel text-concrete font-bold text-[14px] uppercase tracking-wide hover:border-concrete transition-all"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-steel bg-concrete">
        © 2026 Chase Automobiles. All rights reserved.
      </footer>
    </main>
  );
}
