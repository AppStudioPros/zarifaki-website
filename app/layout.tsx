import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CatMascot from "@/components/CatMascot";

import { LangProvider } from "@/lib/LangContext";

export const metadata: Metadata = {
  title: "Zarifaki Sons | Πρατήριο Καυσίμων – Ηράκλειο, Κρήτη",
  description: "Τρεις γενιές εξυπηρέτησης στην Κρήτη. Βενζίνη AVIN, φυσικό αέριο, υγραέριο Coral Gas, διανομή καυσίμων, πλυντήριο αυτοκινήτων & snack bar. 15ο χλμ. Ηρακλείου–Μοιρών.",
  keywords: ["πρατήριο καυσίμων Ηράκλειο", "διανομή καυσίμων Κρήτη", "φυσικό αέριο Κρήτη", "AVIN Ηράκλειο", "Coral Gas Κρήτη", "πλυντήριο αυτοκινήτου Κρήτη", "gas station Heraklion Crete", "fuel delivery Crete", "Zarifaki Sons"],
  openGraph: {
    title: "Zarifaki Sons | Πρατήριο Καυσίμων – Κρήτη",
    description: "Τρεις γενιές εξυπηρέτησης. Βενζίνη, φυσικό αέριο, υγραέριο, διανομή & πλυντήριο στην Κρήτη.",
    url: "https://zarifakisons.gr",
    siteName: "Zarifaki Sons",
    locale: "el_GR",
    type: "website",
  },
  alternates: { canonical: "https://zarifakisons.gr" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GasStation",
              "name": "Zarifaki Sons – Υιοί Ζαριφάκη",
              "url": "https://zarifakisons.gr",
              "telephone": ["+302810792192", "+306973207285"],
              "email": "g.zarifakis@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "15ο χλμ. Ηρακλείου – Μοιρών",
                "addressLocality": "Ηράκλειο",
                "addressRegion": "Κρήτη",
                "addressCountry": "GR"
              },
              "openingHours": "Mo-Su 06:00-20:30",
              "hasMap": "https://maps.app.goo.gl/d8v2Dpsu7TzfhzdP8",
              "description": "Πρατήριο υγρών καυσίμων AVIN, φυσικό αέριο CNG, υγραέριο Coral Gas, διανομή καυσίμων, πλυντήριο αυτοκινήτου, snack bar. Τρεις γενιές οικογενειακής εξυπηρέτησης στην Κρήτη.",
              "priceRange": "€",
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Car Wash", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Snack Bar", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Wi-Fi", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Natural Gas (CNG)", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Auto Gas (LPG)", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Fuel Delivery", "value": true }
              ]
            })
          }}
        />
      </head>
      <body>
        <LangProvider>
          <Header />
          {children}
          <Footer />
          <CatMascot />
        </LangProvider>
      </body>
    </html>
  );
}
