"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";

export default function FindUs() {
  const { lang } = useLang();

  return (
    <section id="contact" style={{ background: "var(--night)", paddingTop: "5rem", paddingBottom: "5rem" }}>
      <div className="container" style={{ padding: "0 1.5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <h2 style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3rem)", color: "white", marginBottom: "0.75rem" }}>
            {t("findus_h2", lang)}
          </h2>
          <div style={{ width: 60, height: 4, background: "var(--red)", borderRadius: 2, margin: "0 auto" }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {/* Address */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div style={{ background: "var(--red)", borderRadius: "12px", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>📍</div>
              <div>
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.8rem", color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                  {lang === "el" ? "Διεύθυνση" : "Address"}
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>
                  {t("findus_addr", lang)}
                </div>
              </div>
            </div>

            {/* Hours */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div style={{ background: "var(--red)", borderRadius: "12px", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>🕕</div>
              <div>
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.8rem", color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                  {lang === "el" ? "Ώρες Λειτουργίας" : "Opening Hours"}
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "rgba(255,255,255,0.8)" }}>
                  {t("findus_hours", lang)}
                </div>
              </div>
            </div>

            {/* Phone */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div style={{ background: "var(--red)", borderRadius: "12px", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>📞</div>
              <div>
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.8rem", color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                  {lang === "el" ? "Τηλέφωνα" : "Phone"}
                </div>
                <a href="tel:+302810792192" style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "1rem", color: "rgba(255,255,255,0.8)", textDecoration: "none" }} onMouseOver={(e) => e.currentTarget.style.color = "var(--gold)"} onMouseOut={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.8)"}>
                  2810 792 192
                </a>
                <a href="tel:+306973207285" style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "1rem", color: "rgba(255,255,255,0.8)", textDecoration: "none" }} onMouseOver={(e) => e.currentTarget.style.color = "var(--gold)"} onMouseOut={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.8)"}>
                  6973 207 285
                </a>
                <a href="tel:+306974722423" style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "1rem", color: "rgba(255,255,255,0.8)", textDecoration: "none" }} onMouseOver={(e) => e.currentTarget.style.color = "var(--gold)"} onMouseOut={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.8)"}>
                  6974 722 423
                </a>
              </div>
            </div>

            {/* Directions CTA */}
            <a
              href="https://maps.google.com/?q=15ο+χλμ+Ηρακλείου+Μοιρών+Κρήτη"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "transparent", color: "var(--gold)", fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.9rem", padding: "0.8rem 1.75rem", borderRadius: "999px", border: "2px solid var(--gold)", textDecoration: "none", width: "fit-content", transition: "background 0.2s, color 0.2s" }}
              onMouseOver={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--night)"; }}
              onMouseOut={(e)  => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
            >
              🗺️ {t("findus_dir", lang)}
            </a>
          </motion.div>

          {/* Google Maps embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", aspectRatio: "4/3" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.5!2d24.96!3d35.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA2JzAwLjAiTiAyNMKwNTcnNjAuMCJF!5e0!3m2!1sel!2sgr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zarifaki Sons location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
