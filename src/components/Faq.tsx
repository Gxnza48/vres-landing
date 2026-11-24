import { Plus } from "lucide-react";

import { useLang } from "../lang";
import { Reveal, SectionHeader } from "./ui";

/** Preguntas frecuentes (acordeón nativo: funciona sin JavaScript extra). */
export function Faq() {
  const { t } = useLang();
  return (
    <section id="faq" className="relative scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeader title={t.faq.title} />
      <div className="mx-auto flex max-w-3xl flex-col gap-3">
        {t.faq.items.map((item, index) => (
          <Reveal key={item.q} delay={index * 60}>
            <details className="group rounded-2xl border border-line bg-panel px-6 py-5 transition-colors open:border-lime/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-fg [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus
                  className="size-5 shrink-0 text-lime transition-transform duration-300 group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
