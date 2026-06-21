"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";

const SERVICES = [
  { icon: "⛽", key: "svc_fuel",  img: "/images/IMG_20241114_135502504-scaled.jpg" },
  { icon: "🌿", key: "svc_cng",   img: "/images/IMG_20241114_135345589_HDR-scaled.jpg" },
  { icon: "💨", key: "svc_lpg",   img: "/images/IMG_20241114_135452680_HDR-scaled.jpg" },
  { icon: "🚿", key: "svc_wash",  img: "/images/IMG_20241114_140155783_HDR-scaled.jpg" },
  { icon: "☕", key: "svc_snack", img: "/images/IMG_20241114_140948924_HDR-scaled.jpg" },
  { icon: "🔧", key: "svc_acc",   img: "/images/IMG_20241114_140418239_HDR-scaled.jpg" },
] as const;

export default function Services() {
  const { lang } = useLang();

  return (
    <section id="services" style={{ background: "var(--cream)", paddingTop: "5rem", paddingBottom: "5rem" }}>
      <div className="container" style={{ padding: "0 1.5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <h2 style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3rem)", color: "var(--night)", marginBottom: "0.75rem" }}>
            {t("services_h2", lang)}
          </h2>
          <div style={{ width: 60, height: 4, background: "var(--red)", borderRadius: 2, margin: "0 auto" }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {SERVICES.map(({ icon, key, img }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              style={{ borderRadius: "20px", overflow: "hidden", background: "white", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", cursor: "default" }}
            >
              {/* Photo */}
              <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                <Image src={img} alt={t(key as Parameters<typeof t>[0], lang)} fill style={{ objectFit: "cover", transition: "transform 0.5s" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,26,43,0.5) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", top: "1rem", left: "1rem", background: "var(--red)", borderRadius: "12px", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>
                  {icon}
                </div>
              </div>
              {/* Text */}
              <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "1.05rem", color: "var(--night)", marginBottom: "0.5rem" }}>
                  {t(key as Parameters<typeof t>[0], lang)}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--ink-soft)", lineHeight: 1.65 }}>
                  {t(`${key}_d` as Parameters<typeof t>[0], lang)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
