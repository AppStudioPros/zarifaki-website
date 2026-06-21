import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "Σχετικά με εμάς | Zarifaki Sons – Τρεις Γενιές στην Κρήτη",
  description: "Η ιστορία των Υιών Ζαριφάκη — τρεις γενιές οικογενειακής εξυπηρέτησης, ηλιακά πάνελ, φιλοξενία και αγάπη για την Κρήτη. 15ο χλμ. Ηρακλείου–Μοιρών.",
  alternates: { canonical: "https://zarifakisons.gr/about" },
  openGraph: {
    title: "Σχετικά | Zarifaki Sons",
    description: "Τρεις γενιές οικογενειακής εξυπηρέτησης στην Κρήτη.",
    url: "https://zarifakisons.gr/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
