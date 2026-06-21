"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

export default function Partners() {
  const { lang } = useLang();

  return (
    <section style={{ background: "var(--night-mid)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "3rem 1.5rem" }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.75rem" }}>
        <p style={{ fontFamily: "var(--font-head)", fontWeight: 600, fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          {lang === "el" ? "Εξουσιοδοτημένος Αντιπρόσωπος" : "Authorized Partner"}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "3rem", flexWrap: "wrap", justifyContent: "center" }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}
          >
            <Image src="/images/logo-avin.png" alt="AVIN" width={90} height={50} style={{ objectFit: "contain", filter: "brightness(1.1)" }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>
              {lang === "el" ? "Βενζίνη · Diesel · Πετρέλαιο Θέρμανσης" : "Petrol · Diesel · Heating Oil"}
            </span>
          </motion.div>

          <div style={{ width: 1, height: 50, background: "rgba(255,255,255,0.1)" }} />

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}
          >
            <Image src="/images/logo-coral-gas.png" alt="Coral Gas" width={100} height={50} style={{ objectFit: "contain", filter: "brightness(1.1)" }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>
              {lang === "el" ? "Υγραέριο Auto Gas · CNG Φυσικό Αέριο" : "LPG Auto Gas · CNG Natural Gas"}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
