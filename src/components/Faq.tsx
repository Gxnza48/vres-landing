import { Magnetic } from "@vizzele/react";
import { Download, Plus } from "lucide-react";

import { useLang } from "../lang";
import { DISCORD_URL, RELEASES_URL, useRelease } from "../release";
import { DiscordIcon, Reveal, SectionHeader } from "./ui";

/** Preguntas frecuentes (acordeón nativo) y la llamada final a descargar. */
export function Faq() {
  const { t } = useLang();
  const release = useRelease();
  return (
    <section id="faq" className="relative scroll-mt-16 border-t border-line px-5 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32">
      <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} />
      <div className="mx-auto flex max-w-3xl flex-col border-t border-line">
        {t.faq.items.map((item, index) => (
          <Reveal key={item.q} delay={index * 50}>
            <details className="group border-b border-line py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-fg transition-colors hover:text-lime sm:text-lg [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="mr-3 font-mono text-xs text-lime/70">0{index + 1}</span>
                  {item.q}
                </span>
                <Plus className="size-5 shrink-0 text-lime transition-transform duration-300 group-open:rotate-45" aria-hidden />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:pl-8 sm:text-base">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>

      {/* Llamada final. */}
      <Reveal className="mx-auto mt-24 max-w-6xl">
        <div className="cut relative overflow-hidden border border-line-strong bg-panel px-6 py-14 text-center sm:px-12 sm:py-20">
          <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" />
          <div className="relative">
            <img src="/icon.png" alt="" width={64} height={64} loading="lazy" className="mx-auto size-14 sm:size-16" />
            <h2 className="mt-6 font-display text-3xl leading-tight font-black tracking-tight uppercase sm:text-5xl">
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-pretty text-muted sm:text-lg">{t.cta.text}</p>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Magnetic
                as="a"
                href={release?.url ?? RELEASES_URL}
                strength={0.25}
                radius={40}
                style={{ display: "flex" }}
                className="cut items-center justify-center gap-3 bg-lime px-7 py-4 text-ink shadow-[0_0_40px_rgb(158_250_18/0.3)] transition-[filter] hover:brightness-110"
              >
                <Download className="size-5" aria-hidden />
                <span className="flex flex-col items-start leading-tight">
                  <span className="font-display text-sm font-black tracking-wider uppercase">{t.cta.download}</span>
                  {release && (
                    <span className="font-mono text-[11px] font-semibold opacity-75">
                      {t.hero.version.replace("{v}", release.version)}
                      {release.sizeMb ? ` · ${release.sizeMb} MB` : ""}
                    </span>
                  )}
                </span>
              </Magnetic>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer"
                className="cut inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 px-7 py-4 text-white transition hover:bg-discord/30"
              >
                <DiscordIcon className="size-5" />
                <span className="font-display text-sm font-black tracking-wider uppercase">{t.cta.discord}</span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
