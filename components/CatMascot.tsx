"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/LangContext";

const messages: Record<string, { el: string; en: string }> = {
  "fuel-delivery": {
    el: "Φέρνουμε καύσιμα σπίτι σας! 🚚",
    en: "We deliver fuel to your door! 🚚",
  },
  default: {
    el: "Καλωσήρθατε!",
    en: "Welcome!",
  },
};

export default function CatMascot() {
  const [hovered, setHovered] = useState(false);
  const [activeSection, setActiveSection] = useState("default");
  const { lang } = useLang();

  useEffect(() => {
    const sectionIds = ["fuel-delivery"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
          else setActiveSection((prev) => (prev === id ? "default" : prev));
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const msg = messages[activeSection] ?? messages.default;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 200,
        cursor: "pointer",
        userSelect: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Speech bubble — shows on hover OR when a section-specific message is active */}
      {(hovered || activeSection !== "default") && (
        <div style={{
          position: "absolute",
          bottom: "calc(100% + 12px)",
          right: 0,
          background: "var(--night-mid)",
          border: "1px solid var(--gold)",
          borderRadius: "12px",
          padding: "0.5rem 0.75rem",
          whiteSpace: "nowrap",
          fontFamily: "var(--font-head)",
          fontSize: "0.75rem",
          fontWeight: 700,
          color: "var(--gold)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}>
          {lang === "el" ? msg.el : msg.en}
          <div style={{
            position: "absolute",
            bottom: "-6px",
            right: "20px",
            width: 0,
            height: 0,
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderTop: "6px solid var(--gold)",
          }} />
        </div>
      )}

      {/* Cat image */}
      <div style={{
        width: "120px",
        height: "120px",
        transition: "transform 0.2s",
        transform: hovered ? "scale(1.08)" : "scale(1)",
        filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.5))",
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/cat-mascot.png" alt="Zarifaki Sons Mascot" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
    </div>
  );
}
