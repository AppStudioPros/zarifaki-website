"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";

export default function Hero() {
  const { lang } = useLang();
  const headline = t("hero_h1", lang).split("\n");

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: "80px", background: "var(--night)" }}>

      {/* Abstract background — animated gradient orbs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {/* Large red orb top-left */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "-10%", left: "-5%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, var(--red) 0%, transparent 70%)" }}
        />
        {/* Blue orb bottom-left */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ position: "absolute", bottom: "0%", left: "10%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, var(--blue) 0%, transparent 70%)" }}
        />
        {/* Gold orb center */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ position: "absolute", top: "30%", left: "35%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
        />
        {/* Subtle grid lines */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1, padding: "2rem 1.5rem", width: "100%", display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "center" }}>

        {/* LEFT — text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: "600px" }}
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(245,166,35,0.12)", border: "1px solid rgba(245,166,35,0.35)", borderRadius: "999px", padding: "0.35rem 1rem", marginBottom: "1.5rem" }}
          >
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)" }} />
            <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.75rem", color: "var(--gold)", letterSpacing: "0.1em" }}>
              {t("hero_tag", lang)}
            </span>
          </motion.div>

          {/* Headline */}
          <h1 style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 1, color: "var(--white)", marginBottom: "1.5rem" }}>
            {headline.map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.15 }}
                style={{ display: "block", color: i === 1 ? "var(--red)" : "white" }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "480px" }}
          >
            {t("hero_sub", lang)}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
          >
            <a href="/services"
              style={{ background: "var(--red)", color: "white", fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.05em", padding: "0.875rem 2rem", borderRadius: "999px", textDecoration: "none", boxShadow: "0 4px 20px rgba(196,30,37,0.4)", transition: "transform 0.2s, box-shadow 0.2s", display: "inline-block" }}
              onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(196,30,37,0.5)"; }}
              onMouseOut={(e)  => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(196,30,37,0.4)"; }}
            >
              {t("hero_cta1", lang)}
            </a>
            <a href="#contact"
              style={{ background: "transparent", color: "white", fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.05em", padding: "0.875rem 2rem", borderRadius: "999px", textDecoration: "none", border: "2px solid rgba(255,255,255,0.25)", transition: "border-color 0.2s, color 0.2s", display: "inline-block" }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
              onMouseOut={(e)  => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "white"; }}
            >
              {t("hero_cta2", lang)}
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT — big cat with speech bubble */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.85 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, type: "spring", stiffness: 80 }}
          style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}
          className="hidden md:flex"
        >
          {/* Speech bubble */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.1, type: "spring" }}
            style={{
              position: "relative",
              background: "var(--white)",
              borderRadius: "20px",
              padding: "0.75rem 1.5rem",
              marginBottom: "1rem",
              boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            }}
          >
            <span style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "1.2rem", color: "var(--night)", whiteSpace: "nowrap" }}>
              {lang === "el" ? "Καλωσήρθατε!" : "Welcome!"}
            </span>
            {/* Bubble tail */}
            <div style={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderTop: "10px solid white",
            }} />
          </motion.div>

          {/* Cat */}
          <Image
            src="/images/cat-mascot.png"
            alt="Zarifaki Sons Mascot"
            width={300}
            height={300}
            style={{ objectFit: "contain", filter: "drop-shadow(0 12px 30px rgba(0,0,0,0.5))" }}
            priority
          />
        </motion.div>

      </div>

      {/* Mobile cat — small, bottom right */}
      <div className="flex md:hidden" style={{ position: "absolute", bottom: "1rem", right: "1rem", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
        <div style={{ background: "white", borderRadius: "12px", padding: "0.4rem 0.75rem", fontSize: "0.75rem", fontFamily: "var(--font-head)", fontWeight: 700, color: "var(--night)", position: "relative" }}>
          {lang === "el" ? "Καλωσήρθατε!" : "Welcome!"}
          <div style={{ position: "absolute", bottom: "-6px", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: "6px solid white" }} />
        </div>
        <Image src="/images/cat-mascot.png" alt="Mascot" width={80} height={80} style={{ objectFit: "contain" }} />
      </div>
    </section>
  );
}
