import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Chase Automobiles — Expert Auto Diagnostics & Car Repairs in Ikorodu, Lagos",
  description:
    "Your car, fixed right the first time. Comprehensive diagnostic and auto repair services in Ikorodu, Lagos: engine, transmission, brakes, AC, electrical, scanning, and detailing.",
};

export default function Home() {
  return <HomeClient />;
}
