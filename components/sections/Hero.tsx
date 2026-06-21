"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";

export default function Hero() {
  const { lang } = useLang();
  const headline = t("hero_h1", lang).split("\n");

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: "80px" }}>
      {/* Background photo */}
      <Image
        src="/images/IMG_20241114_140459109-scaled.jpg"
        alt="Zarifaki Sons Gas Station"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "70% 30%" }}
      />
      {/* Overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(14,26,43,0.88) 0%, rgba(14,26,43,0.65) 60%, rgba(14,26,43,0.4) 100%)" }} />

      {/* Animated particles */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: `${4 + i * 2}px`,
              height: `${4 + i * 2}px`,
              borderRadius: "50%",
              background: i % 2 === 0 ? "rgba(196,30,37,0.3)" : "rgba(245,166,35,0.2)",
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{ y: [-20, 20, -20], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1, padding: "2rem 1.5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tag */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.4)", borderRadius: "999px", padding: "0.35rem 1rem", marginBottom: "1.5rem" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", animation: "float 2s ease-in-out infinite" }} />
            <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.75rem", color: "var(--gold)", letterSpacing: "0.1em" }}>
              {t("hero_tag", lang)}
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "clamp(3rem, 8vw, 6.5rem)", lineHeight: 1, color: "var(--white)", marginBottom: "1.5rem" }}>
            {headline.map((line, i) => (
              <span key={i} style={{ display: "block" }}>
                {i === 1 ? <span style={{ color: "var(--red)" }}>{line}</span> : line}
              </span>
            ))}
          </h1>

          {/* Sub */}
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: "rgba(255,255,255,0.75)", maxWidth: "520px", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            {t("hero_sub", lang)}
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a href="/services" style={{ background: "var(--red)", color: "white", fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.05em", padding: "0.875rem 2rem", borderRadius: "999px", textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s", boxShadow: "0 4px 20px rgba(196,30,37,0.4)", display: "inline-block" }}
              onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(196,30,37,0.5)"; }}
              onMouseOut={(e)  => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(196,30,37,0.4)"; }}
            >
              {t("hero_cta1", lang)}
            </a>
            <a href="#contact" style={{ background: "transparent", color: "white", fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.05em", padding: "0.875rem 2rem", borderRadius: "999px", textDecoration: "none", border: "2px solid rgba(255,255,255,0.3)", transition: "border-color 0.2s, color 0.2s", display: "inline-block" }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
              onMouseOut={(e)  => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "white"; }}
            >
              {t("hero_cta2", lang)}
            </a>
          </div>
        </motion.div>

        {/* Partner logos moved to Partners section below */}
      </div>
    </section>
  );
}
