import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services & Diagnostics",
  description:
    "Comprehensive car maintenance and repair services in Ikorodu, Lagos: engine diagnostics, transmission service, auto electricals, AC repairs, wheel balancing & alignment, car wash, detailing, and collision repair.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
