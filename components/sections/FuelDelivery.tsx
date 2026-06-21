"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";

export default function FuelDelivery() {
  const { lang } = useLang();

  return (
    <section style={{ background: "var(--night-mid)", overflow: "hidden" }}>
      <div className="container section-pad" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(196,30,37,0.15)", border: "1px solid rgba(196,30,37,0.4)", borderRadius: "999px", padding: "0.35rem 1rem", marginBottom: "1.5rem" }}>
            <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.72rem", color: "var(--red)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              {t("delivery_tag", lang)}
            </span>
          </div>
          <h2 style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "white", lineHeight: 1.05, marginBottom: "1.5rem" }}>
            {t("delivery_h2", lang).split("\n").map((line, i) => (
              <span key={i} style={{ display: "block", color: i === 1 ? "var(--gold)" : "white" }}>{line}</span>
            ))}
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "440px" }}>
            {t("delivery_p", lang)}
          </p>
          <a href="tel:+302810792192" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--red)", color: "white", fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.05em", padding: "0.9rem 2rem", borderRadius: "999px", textDecoration: "none", boxShadow: "0 4px 24px rgba(196,30,37,0.35)", transition: "transform 0.2s" }}
            onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseOut={(e)  => e.currentTarget.style.transform = "translateY(0)"}
          >
            📞 {t("delivery_cta", lang)}
          </a>
        </motion.div>

        {/* Animated truck visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ position: "relative" }}
        >
          <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", aspectRatio: "4/3" }}>
            <Image
              src="/images/IMG_20241114_135345589_HDR-scaled.jpg"
              alt="AVIN Fuel Pump"
              fill
              style={{ objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,26,43,0.6) 0%, transparent 60%)" }} />
          </div>
          {/* Floating badge */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", top: "-1rem", right: "-1rem", background: "var(--red)", borderRadius: "16px", padding: "1rem 1.25rem", boxShadow: "0 8px 32px rgba(196,30,37,0.4)" }}
          >
            <div style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "2rem", color: "white", lineHeight: 1 }}>🚚</div>
            <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.65rem", color: "rgba(255,255,255,0.85)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.25rem" }}>
              {lang === "el" ? "ΔΙΑΝΟΜΗ" : "DELIVERY"}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile: stack vertically */}
      <style>{`
        @media (max-width: 768px) {
          .delivery-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
