import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import HeaderStatus from "./components/HeaderStatus";

export const metadata: Metadata = {
  title: "Chase Automobiles — Car Repair Experts",
  description:
    "Your car, fixed right, the first time. Engine, transmission, brakes, AC and electrical repairs by mechanics who stand behind their work.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-concrete text-charcoal leading-relaxed antialiased">
        {/* Info bar */}
        <div className="border-b border-line text-[12.5px] font-medium flex flex-col sm:flex-row">
          {/* Address side */}
          <div className="flex-1 bg-panel text-charcoal py-3 px-5 flex items-center justify-start">
            <span className="opacity-90 md:text-base text-xs">
              10/11 Chief Jamiu, Elepe Royal Estate, Aga, Ikorodu, Lagos
            </span>
          </div>
          {/* Dynamic Opening Hours / Status side */}
          <HeaderStatus />
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Hazard Stripe */}
        <div className="h-2 hazard-stripe" />

        {children}
      </body>
    </html>
  );
}
