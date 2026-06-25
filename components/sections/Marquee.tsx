"use client";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/i18n";

export default function Marquee() {
  const { lang } = useLang();
  const items = translations.marquee_items[lang];
  const reel = [...items, ...items];

  return (
    <div style={{ background: "var(--red)", borderTop: "3px solid var(--red-dark)", borderBottom: "3px solid var(--red-dark)", overflow: "hidden", padding: "0.875rem 0" }}>
      <div className="marquee-track">
        {reel.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
            <span style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "clamp(0.85rem, 2vw, 1.1rem)", color: "white", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              {item}
            </span>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", marginLeft: "0.75rem" }}>—</span>
          </div>
        ))}
      </div>
    </div>
  );
}
