"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/i18n";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { lang, toggle } = useLang();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: t("nav_services", lang) },
    { href: "#about",    label: t("nav_about", lang) },
    { href: "#contact",  label: t("nav_contact", lang) },
  ];

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(14,26,43,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.75rem 1.5rem" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Image src="/images/logo-zarifaki.png" alt="Zarifaki Sons" width={48} height={48} style={{ objectFit: "contain" }} />
          <div>
            <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "1.1rem", color: "var(--white)", lineHeight: 1.1 }}>ZARIFAKI</div>
            <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.7rem", color: "var(--gold)", letterSpacing: "0.15em", lineHeight: 1 }}>SONS</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-head)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.05em", textDecoration: "none", transition: "color 0.2s" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseOut={(e)  => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
            >{l.label}</a>
          ))}
          {/* Lang toggle */}
          <button onClick={toggle} style={{ background: "rgba(245,166,35,0.15)", border: "1px solid var(--gold)", color: "var(--gold)", fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.75rem", padding: "0.35rem 0.75rem", borderRadius: "999px", cursor: "pointer", letterSpacing: "0.1em" }}>
            {lang === "el" ? "EN" : "ΕΛ"}
          </button>
        </nav>

        {/* Mobile */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="flex md:hidden">
          <button onClick={toggle} style={{ background: "rgba(245,166,35,0.15)", border: "1px solid var(--gold)", color: "var(--gold)", fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.7rem", padding: "0.3rem 0.6rem", borderRadius: "999px", cursor: "pointer" }}>
            {lang === "el" ? "EN" : "ΕΛ"}
          </button>
          <button onClick={() => setOpen((o) => !o)} style={{ color: "white", background: "none", border: "none", cursor: "pointer", padding: "0.25rem" }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "var(--night)", borderTop: "1px solid rgba(255,255,255,0.07)", padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-head)", fontWeight: 600, fontSize: "1rem", textDecoration: "none" }}>{l.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}
