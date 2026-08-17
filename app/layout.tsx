import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chase Automobiles — Car Repair Experts",
  description: "Your car, fixed right, the first time. Engine, transmission, brakes, AC and electrical repairs by mechanics who stand behind their work.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-concrete text-charcoal leading-relaxed antialiased">
        {children}
      </body>
    </html>
  );
}
