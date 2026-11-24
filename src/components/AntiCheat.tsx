import { BadgeCheck, ExternalLink, ShieldCheck } from "lucide-react";

import { useLang } from "../lang";
import { ANTICHEAT_URL } from "../release";
import { Reveal, SectionHeader, trackSpotlight } from "./ui";

/** Anti-cheats: con qué convive VRes y por qué (sin prometer lo que no se puede). */
export function AntiCheat() {
  const { t } = useLang();
  return (
    <section id="anticheat" className="relative scroll-mt-20 px-5 py-24 sm:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-72 max-w-4xl -translate-y-1/2 rounded-full bg-lime/10 blur-[120px]"
      />
      <SectionHeader eyebrow={t.anticheat.eyebrow} title={t.anticheat.title} subtitle={t.anticheat.subtitle} />
      <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
        {t.anticheat.items.map((item, index) => (
          <Reveal key={item.name} delay={index * 100}>
            <article
              onMouseMove={trackSpotlight}
              className="spotlight flex h-full flex-col items-center rounded-3xl border border-line bg-panel px-6 py-9 text-center transition-colors hover:border-lime/40"
            >
              <span className="relative mb-5 inline-flex size-16 items-center justify-center rounded-2xl border border-lime/40 bg-lime/10">
                <ShieldCheck className="size-8 text-lime" aria-hidden />
                <BadgeCheck
                  className="absolute -right-2 -bottom-2 size-7 rounded-full bg-ink text-lime"
                  aria-hidden
                />
              </span>
              <h3 className="font-display text-xl font-black tracking-tight">{item.name}</h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
              <p className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-xs font-semibold text-lime">
                <BadgeCheck className="size-3.5" aria-hidden />
                {t.anticheat.badge}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="relative mx-auto mt-10 max-w-3xl text-center" delay={200}>
        <p className="text-sm leading-relaxed text-muted">{t.anticheat.note}</p>
        <a
          href={ANTICHEAT_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-lime hover:underline"
        >
          {t.anticheat.link}
          <ExternalLink className="size-3.5" aria-hidden />
        </a>
      </Reveal>
    </section>
  );
}
