"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = target;
    const duration = 1200;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      setVal(Math.round(start));
      if (start >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export default function About() {
  const { lang } = useLang();

  return (
    <section id="about" style={{ background: "var(--night)", overflow: "hidden", paddingTop: "5rem", paddingBottom: "5rem" }}>
      <div className="container" style={{ padding: "0 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          {/* Photos collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ position: "relative" }}
          >
            <div style={{ borderRadius: "24px", overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
              <Image src="/images/IMG_20241114_140948924_HDR-scaled.jpg" alt="Zarifaki Sons station" fill style={{ objectFit: "cover" }} />
            </div>
            {/* Floating second photo */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", bottom: "-2rem", right: "-2rem", width: "45%", aspectRatio: "1", borderRadius: "16px", overflow: "hidden", border: "4px solid var(--night)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
            >
              <Image src="/images/IMG_20241114_135502504-scaled.jpg" alt="AVIN pump" fill style={{ objectFit: "cover" }} />
            </motion.div>
            {/* Solar panel badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.5 }}
              style={{ position: "absolute", top: "1rem", right: "1rem", background: "var(--gold)", borderRadius: "12px", padding: "0.6rem 0.9rem", boxShadow: "0 4px 16px rgba(245,166,35,0.4)" }}
            >
              <div style={{ fontSize: "1.4rem", lineHeight: 1 }}>☀️</div>
              <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "0.6rem", color: "var(--night)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "0.2rem" }}>
                {lang === "el" ? "SOLAR" : "SOLAR"}
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(245,166,35,0.12)", border: "1px solid rgba(245,166,35,0.35)", borderRadius: "999px", padding: "0.35rem 1rem", marginBottom: "1.5rem" }}>
              <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.72rem", color: "var(--gold)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                {t("about_tag", lang)}
              </span>
            </div>
            <h2 style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "white", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              {t("about_h2", lang).split("\n").map((line, i) => (
                <span key={i} style={{ display: "block", color: i === 1 ? "var(--gold)" : "white" }}>{line}</span>
              ))}
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "1rem" }}>
              {t("about_p1", lang)}
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              {t("about_p2", lang)}
            </p>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
              {[
                { n: 3, suffix: "", label: t("about_stat1_l", lang) },
                { n: 7, suffix: "/7", label: t("about_stat2_l", lang) },
                { n: 6, suffix: ":00", label: t("about_stat3_l", lang) },
              ].map((s, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.25rem 1rem", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "2rem", color: "var(--red)", lineHeight: 1 }}>
                    <CountUp target={s.n} suffix={s.suffix} />
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", marginTop: "0.35rem", letterSpacing: "0.05em" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
