"use client";
import { createContext, useContext, useState, useEffect } from "react";
import type { Lang } from "./i18n";

const LangContext = createContext<{ lang: Lang; toggle: () => void }>({ lang: "el", toggle: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("el");

  useEffect(() => {
    // Only restore saved preference if user explicitly chose English
    // Default is always Greek ("el") unless they toggled
    const saved = localStorage.getItem("zarifaki_lang") as Lang | null;
    if (saved === "en") setLang("en");
  }, []);

  function toggle() {
    setLang((l) => {
      const next = l === "el" ? "en" : "el";
      localStorage.setItem("zarifaki_lang", next);
      return next;
    });
  }

  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
