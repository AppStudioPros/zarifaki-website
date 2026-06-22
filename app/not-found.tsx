"use client";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { LangProvider } from "@/lib/LangContext";

function NotFoundContent() {
  const { lang } = useLang();

  return (
    <main style={{ minHeight: "100vh", background: "var(--night)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center", paddingTop: "80px" }}>
      <Image src="/images/cat-mascot.png" alt="Mascot" width={140} height={140} style={{ objectFit: "contain", marginBottom: "1.5rem", filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.5))" }} />
      <h1 style={{ fontFamily: "var(--font-head)", fontWeight: 900, fontSize: "clamp(2rem, 6vw, 4rem)", color: "white", marginBottom: "0.75rem" }}>
        404
      </h1>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "rgba(255,255,255,0.55)", marginBottom: "2rem" }}>
        {lang === "el" ? "Η σελίδα δεν βρέθηκε." : "Page not found."}
      </p>
      <Link href="/" style={{ background: "var(--red)", color: "white", fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "0.9rem", padding: "0.875rem 2rem", borderRadius: "999px", textDecoration: "none", letterSpacing: "0.05em" }}>
        {lang === "el" ? "Πίσω στην Αρχική" : "Back to Home"}
      </Link>
    </main>
  );
}

export default function NotFound() {
  return (
    <LangProvider>
      <NotFoundContent />
    </LangProvider>
  );
}
