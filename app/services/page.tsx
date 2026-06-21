import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Υπηρεσίες | Zarifaki Sons – Καύσιμα, Διανομή, Πλυντήριο & Περισσότερα",
  description: "Βενζίνη AVIN, φυσικό αέριο CNG, υγραέριο Coral Gas, διανομή καυσίμων, πλυντήριο αυτοκινήτου, snack bar, αξεσουάρ. Όλα στο 15ο χλμ. Ηρακλείου–Μοιρών.",
  alternates: { canonical: "https://zarifakisons.gr/services" },
  openGraph: {
    title: "Υπηρεσίες | Zarifaki Sons",
    description: "Βενζίνη, φυσικό αέριο, υγραέριο, διανομή, πλυντήριο & snack bar στην Κρήτη.",
    url: "https://zarifakisons.gr/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
