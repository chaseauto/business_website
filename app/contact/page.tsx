import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Visit Chase Automobiles workshop at 10/11 Chief Jamiu, Elepe Royal Estate, Aga, Ikorodu, Lagos. View opening hours, call or WhatsApp us, or book an inspection.",
};

export default function ContactPage() {
  return <ContactClient />;
}
