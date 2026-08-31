import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us — Chase Automobiles",
  description:
    "Learn about Chase Automobiles in Ikorodu, Lagos. Discover our mission, experienced auto technicians, advanced computer diagnostic equipment, and honest approach to car care.",
};

export default function AboutPage() {
  return <AboutClient />;
}
