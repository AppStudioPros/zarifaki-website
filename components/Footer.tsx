"use client";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer style={{ background: "#050d18", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "3rem 1.5rem 2rem" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "3rem", marginBottom: "2.5rem" }}>
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <Image src="/images/logo-zarifaki.png" alt="Zarifaki Sons" width={44} height={44} style={{ objectFit: "contain" }} />
            <div>
              <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "1rem", color: "white" }}>ZARIFAKI SONS</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>Υιοί Ζαριφάκη</div>
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: "280px" }}>
            {lang === "el"
              ? "Τρεις γενιές εξυπηρέτησης στο 15ο χλμ. Ηρακλείου–Μοιρών, Κρήτη."
              : "Three generations of service at 15th km Heraklion–Moires, Crete."}
          </p>
          {/* Partner logos */}
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginTop: "1.5rem" }}>
            <Image src="/images/logo-avin.png" alt="AVIN" width={50} height={32} style={{ objectFit: "contain", opacity: 0.7 }} />
            <Image src="/images/logo-coral-gas.png" alt="Coral Gas" width={60} height={32} style={{ objectFit: "contain", opacity: 0.7 }} />
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.8rem", color: "var(--gold)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
            {t("nav_contact", lang)}
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <a href="tel:+302810792192" style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>2810 792 192</a>
            <a href="tel:+306973207285" style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>6973 207 285</a>
            <a href="mailto:g.zarifakis@gmail.com" style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>g.zarifakis@gmail.com</a>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.8rem", color: "var(--gold)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
            {lang === "el" ? "Ώρες" : "Hours"}
          </h4>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
            {lang === "el" ? "Δευτ–Κυρ" : "Mon–Sun"}<br />
            06:00 – 20:30
          </p>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
          © {new Date().getFullYear()} {t("footer_copy", lang)}
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>
          {lang === "el" ? "Σχεδιάστηκε από" : "Designed by"}{" "}
          <a href="https://webdesignpros365.com" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Web Design Pros 365</a>
        </p>
      </div>
    </footer>
  );
}
