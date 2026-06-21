"use client";
import { createContext, useContext, useState, useEffect } from "react";
import type { Lang } from "./i18n";

const LangContext = createContext<{ lang: Lang; toggle: () => void }>({ lang: "el", toggle: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("el");
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "el" || saved === "en") setLang(saved);
  }, []);
  function toggle() {
    setLang((l) => {
      const next = l === "el" ? "en" : "el";
      localStorage.setItem("lang", next);
      return next;
    });
  }
  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
