import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — Chase Automobiles",
  description:
    "Visit Chase Automobiles workshop at 10/11 Chief Jamiu, Elepe Royal Estate, Aga, Ikorodu, Lagos.",
};

export default function ContactPage() {
  return <ContactClient />;
}
