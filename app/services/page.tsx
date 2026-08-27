"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
    image: "/images/car_diagnostics.png",
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
    image: "/images/open_car.png",
  },
  {
    slug: "ac-servicing",
    title: "AC Servicing",
    description: "Not cooling, strange smell, weak airflow — restored fast.",
    image: "/images/ac-repairs.png",
  },
  {
    slug: "electrical-repairs",
    title: "Electrical Repairs",
    description:
      "Battery, alternator, wiring faults, dashboard warning lights.",
    image: "/images/electrical_repairs.png",
  },
  {
    slug: "charging-system-diagnosis",
    title: "Charging System Diagnosis",
    description:
      "Alternator output testing, battery health check, voltage regulator analysis, and starter load testing.",
    image: "/images/electric_repairs.png",
  },
  {
    slug: "parasitic-drain-test",
    title: "Parasitic Drain Test",
    description:
      "Pinpoint overnight battery drain, hidden electrical leaks, faulty relays, and sleep-mode module issues.",
    image: "/images/drain-test.png",
  },
  {
    slug: "car-scanning-programming",
    title: "Car Scanning & Programming",
    description:
      "Advanced OEM diagnostics, ECU re-flashing, module coding, sensor calibration, and key programming.",
    image: "/images/car-programming.png",
  },
  {
    slug: "wheel_balancing-alignment",
    title: "Wheel-balancing & Alignment",
    description:
      "Laser wheel alignment, dynamic balancing, and vibration-free driving.",
    image: "/images/wheel-balancing.jpg",
  },
  {
    slug: "suspension",
    title: "Suspension Repair",
    description:
      "Shocks, struts, bushings, ball joints — smoother ride and precision handling.",
    image: "/images/suspension.png",
  },
  {
    slug: "training",
    title: "Training",
    description:
      "Practical, hands-on automotive diagnostics and mechanical engineering training.",
    image: "/images/training.png",
  },
  {
    slug: "car-wash",
    title: "Car Wash",
    description:
      "Complete exterior pressure wash, snow foam rinse, interior vacuuming, and window cleaning.",
    image: "/images/car-wash.png",
  },
  {
    slug: "car-detailing",
    title: "Car Detailing",
    description:
      "Deep interior restoration, multi-stage paint correction, ceramic protection, and engine bay detailing.",
    image: "/images/detailing.png",
  },
  {
    slug: "body-collision-repair",
    title: "Body Collision Repair",
    description:
      "Professional dent removal, panel beating, frame alignment, and expert spray painting.",
    image: "/images/body-collision.png",
  },
  {
    slug: "car-rentals",
    title: "Car Rentals",
    description:
      "Clean, well-maintained vehicles available for daily, weekly, or extended hire across Lagos.",
    image: "/images/car_rentals.jpg",
  },
  {
    slug: "car-towing",
    title: "Car Towing",
    description:
      "Broke down or in an accident? We'll get your vehicle moved quickly and safely.",
    image: "/images/car-towing.png",
  },
  {
    slug: "equipment-leasing",
    title: "Equipment Leasing",
    description:
      "Heavy-duty equipment and machinery available for short and long-term lease.",
    image: "/images/equipment_leasing.png",
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

  "charging-system-diagnosis": {
    eyebrow: "06 / Charging System",
    intro:
      "We perform comprehensive charging system testing to ensure your alternator, battery, and voltage regulator are delivering clean, reliable power and keeping your battery fully charged while driving.",
    includes: [
      "Alternator output & ripple voltage test",
      "Battery load & health capacity testing",
      "Starter motor current draw analysis",
      "Drive belt tension & pulley inspection",
      "Battery terminal & ground connection check",
      "Voltage regulator & diode diagnosis",
    ],
    symptoms: [
      "Battery warning light on dashboard",
      "Dimming headlights or interior lights",
      "Battery goes flat while driving",
      "Whining or growling alternator noise",
      "Slow engine crank on startup",
      "Overcharging or burning smell",
    ],
  },

  "parasitic-drain-test": {
    eyebrow: "07 / Parasitic Drain",
    intro:
      "If your car battery dies overnight or after sitting for a few days, our specialized parasitic draw test isolates the exact circuit, faulty relay, or module keeping the car awake and draining power.",
    includes: [
      "Milliamp drain & quiescent current measurement",
      "Fuse-by-fuse voltage drop test",
      "Control module sleep-mode verification",
      "Aftermarket accessory isolation (trackers, amps, cameras)",
      "Relay & switch short-circuit inspection",
      "Wiring harness chafing & ground fault check",
    ],
    symptoms: [
      "Battery dead after sitting overnight",
      "Car won't start after a few days parked",
      "New battery keeps getting drained",
      "Clicking noise when turning the key",
      "Interior or glovebox light stays on",
      "Parasitic current draw above spec",
    ],
  },

  "car-scanning-programming": {
    eyebrow: "08 / Scanning & Programming",
    intro:
      "Using dealer-level diagnostic scanners and programming interfaces, we scan all onboard vehicle modules, decode complex fault codes, reflash ECUs, and calibrate replacement sensors and control units.",
    includes: [
      "Full multi-system OBD2 / CAN-bus scan",
      "ECU & TCU module flashing and updates",
      "Key fob & immobilizer programming",
      "Steering angle & throttle body calibration",
      "New module coding & VIN pairing",
      "Live sensor data logging & analysis",
    ],
    symptoms: [
      "Persistent check engine or warning lights",
      "New replacement part not recognized by car",
      "Glitches after battery replacement",
      "Transmission shift logic issues",
      "Key fob or smart key not detected",
      "Vehicle stuck in limp mode",
    ],
  },

  "wheel_balancing-alignment": {
    eyebrow: "09 / Wheel & Tyre",
    intro:
      "We use precision computerized alignment and dynamic balancing equipment to eliminate vibrations, restore straight-line stability, and protect your tyres from premature wear.",
    includes: [
      "Computerized 4-wheel alignment",
      "Dynamic wheel balancing",
      "Tyre tread & wear pattern analysis",
      "Camber, caster & toe adjustments",
      "Steering wheel centering",
      "Vibration & high-speed pull diagnosis",
    ],
    symptoms: [
      "Vehicle pulling to one side",
      "Steering wheel vibrating at speed",
      "Uneven or rapid tyre wear",
      "Off-center steering wheel",
      "Tyre squealing around corners",
      "Rough rolling resistance",
    ],
  },

  suspension: {
    eyebrow: "10 / Suspension",
    intro:
      "We inspect, repair, and replace worn suspension components to restore your car's ride comfort, stability, and road holding over bumps and uneven roads.",
    includes: [
      "Shock absorber & strut replacement",
      "Control arm & bushing service",
      "Ball joint & tie rod inspection",
      "Sway bar link & mount repair",
      "Coil spring & suspension mount checks",
      "Full suspension health diagnostics",
    ],
    symptoms: [
      "Bumpy or unusually harsh ride",
      "Vehicle bouncing excessively",
      "Knocking or clunking noises over bumps",
      "Nose-diving during hard braking",
      "Sagging or leaning on one side",
      "Loose or imprecise steering feel",
    ],
  },

  training: {
    eyebrow: "11 / Training",
    intro:
      "We offer hands-on automotive vocational training covering modern computer diagnostics, auto-electrical repairs, and mechanical systems for aspiring technicians and professionals.",
    includes: [
      "Modern computer diagnostics training",
      "Auto-electrical & wiring systems",
      "Engine overhaul & mechanical repair",
      "Brake, AC & suspension servicing",
      "Diagnostic scan tool mastery",
      "Practical workshop apprenticeship",
    ],
    symptoms: [
      "Aspiring auto technicians",
      "Up-skilling existing mechanics",
      "Practical workshop experience",
      "Diagnostic scanner proficiency",
      "Career in automotive engineering",
      "Hands-on vehicle maintenance",
    ],
  },

  "car-wash": {
    eyebrow: "12 / Car Wash",
    intro:
      "Our thorough car wash service removes tough road grime, dirt, and dust, leaving your vehicle spotless inside and out.",
    includes: [
      "High-pressure exterior wash",
      "Snow foam bath & gentle hand wash",
      "Interior vacuum & floor mat wash",
      "Dashboard & console wipe down",
      "Window & glass cleaning",
      "Tire shine & rim cleaning",
    ],
    symptoms: [
      "Muddy or dusty exterior",
      "Grimy rims and tires",
      "Dusty interior cabin",
      "Dirty windows and mirrors",
      "Post-trip road grime",
      "Routine maintenance clean",
    ],
  },

  "car-detailing": {
    eyebrow: "13 / Car Detailing",
    intro:
      "Our professional auto detailing restores your car's showroom shine through multi-stage machine polishing, deep interior shampooing, leather conditioning, and durable paint protection.",
    includes: [
      "Multi-stage paint correction & swirl removal",
      "High-gloss machine polishing",
      "Deep upholstery & carpet steam cleaning",
      "Leather cleaning & UV conditioning",
      "Ceramic paint sealant application",
      "Engine bay detail & dressing",
    ],
    symptoms: [
      "Swirl marks, scratches & dull paint",
      "Faded or oxidized clear coat",
      "Stubborn interior stains & odors",
      "Dry or cracking leather seats",
      "Faded plastic trim",
      "Pre-sale vehicle restoration",
    ],
  },

  "car-polishing": {
    eyebrow: "13 / Car Detailing",
    intro:
      "Our professional auto detailing restores your car's showroom shine through multi-stage machine polishing, deep interior shampooing, leather conditioning, and durable paint protection.",
    includes: [
      "Multi-stage paint correction & swirl removal",
      "High-gloss machine polishing",
      "Deep upholstery & carpet steam cleaning",
      "Leather cleaning & UV conditioning",
      "Ceramic paint sealant application",
      "Engine bay detail & dressing",
    ],
    symptoms: [
      "Swirl marks, scratches & dull paint",
      "Faded or oxidized clear coat",
      "Stubborn interior stains & odors",
      "Dry or cracking leather seats",
      "Faded plastic trim",
      "Pre-sale vehicle restoration",
    ],
  },

  "body-collision-repair": {
    eyebrow: "14 / Body & Collision",
    intro:
      "From minor scratch and dent repairs to full structural accident restoration, our panel beaters and spray painters restore your vehicle's bodywork to showroom standards.",
    includes: [
      "Accident damage repair",
      "Panel beating & dent removal",
      "Chassis & frame realignment",
      "Precision computerized paint matching",
      "Bumper & panel replacement",
      "Rust treatment & body restoration",
    ],
    symptoms: [
      "Accident or collision damage",
      "Dents, dings, and deep scratches",
      "Cracked or misaligned bumpers",
      "Frame or panel alignment issues",
      "Peeling, faded, or scratched paint",
      "Rust spots on body panels",
    ],
  },

  "car-rentals": {
    eyebrow: "15 / Rentals",
    intro:
      "Need a vehicle for the day, the week, or longer? We offer clean, well-maintained cars available for short and extended hire.",
    includes: [
      "Daily car hire",
      "Weekly rental packages",
      "Extended rental options",
      "Airport & city pick-up",
      "Driver-assisted hire",
      "Flexible booking",
    ],
    symptoms: [
      "Car out for repairs",
      "Travelling in Lagos",
      "Need a temporary vehicle",
      "Corporate hire",
      "Airport transfers",
      "Short-notice bookings",
    ],
  },

  "car-towing": {
    eyebrow: "16 / Towing",
    intro:
      "Broken down on the road or involved in an accident? We'll dispatch a tow and move your vehicle safely to our workshop or your chosen location.",
    includes: [
      "Emergency towing",
      "Accident recovery",
      "Breakdown towing",
      "Workshop-to-workshop transfer",
      "City & highway coverage",
      "Safe vehicle handling",
    ],
    symptoms: [
      "Car broke down",
      "Won't start at all",
      "Accident damage",
      "Severe mechanical fault",
      "Vehicle immobilised",
      "Stuck on the road",
    ],
  },

  "equipment-leasing": {
    eyebrow: "17 / Leasing",
    intro:
      "We offer flexible lease arrangements for heavy-duty equipment and vehicles, suited to construction, logistics, and business operations.",
    includes: [
      "Short-term equipment lease",
      "Long-term lease packages",
      "Heavy machinery hire",
      "Commercial vehicle leasing",
      "Flexible lease terms",
      "Maintenance-inclusive options",
    ],
    symptoms: [
      "Need equipment short-term",
      "Project-based hire",
      "Avoid large capital spend",
      "Construction project",
      "Logistics operation",
      "Business fleet needs",
    ],
  },
};

export default function ServicesPage() {
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
    <main className="min-h-screen bg-concrete text-charcoal">
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
      <section ref={belowHeroRef} className="py-14 md:py-20">
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
                              <Image
                                src="/images/wheel.png"
                                alt="Wheel"
                                width={15}
                                height={15}
                                className="mt-0.5 shrink-0 object-contain"
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
            src="/images/yellow_car.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-charcoal/65" />

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
      <footer
        ref={footerRef}
        className="py-6 text-center text-sm text-steel bg-concrete"
      >
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
    </main>
  );
}
