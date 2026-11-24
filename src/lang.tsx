import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import { COPY, type Copy, detectLang, type Lang } from "./copy";

interface LangContext {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Copy;
}

const Context = createContext<LangContext | null>(null);

/** Idioma de la página (se recuerda en el navegador). */
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
    document.title = COPY[lang].meta.title;
  }, [lang]);

  const setLang = (next: Lang) => {
    localStorage.setItem("vres-lang", next);
    setLangState(next);
  };

  return <Context.Provider value={{ lang, setLang, t: COPY[lang] }}>{children}</Context.Provider>;
}

export function useLang(): LangContext {
  const value = useContext(Context);
  if (!value) throw new Error("useLang fuera de LangProvider");
  return value;
}
