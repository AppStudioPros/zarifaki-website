"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/i18n";

export default function FAQ() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(null);
  const items = translations.faq[lang];

  return (
    <section style={{ background: "var(--night-mid)", paddingTop: "5rem", paddingBottom: "5rem" }}>
      <div className="container" style={{ padding: "0 1.5rem", maxWidth: "760px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <h2 style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "white" }}>
            {lang === "el" ? "Συχνές Ερωτήσεις" : "Frequently Asked Questions"}
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${open === i ? "rgba(196,30,37,0.5)" : "rgba(255,255,255,0.08)"}`, borderRadius: "16px", overflow: "hidden", cursor: "pointer" }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem" }}>
                <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.95rem", color: "white" }}>{item.q}</span>
                <span style={{ color: "var(--red)", fontSize: "1.25rem", fontWeight: 700, flexShrink: 0, marginLeft: "1rem", transition: "transform 0.3s", transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
              </div>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ overflow: "hidden" }}
                  >
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "rgba(255,255,255,0.65)", padding: "0 1.5rem 1.25rem", lineHeight: 1.7 }}>
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
