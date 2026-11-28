import { ArrowUpRight, Check, ShieldAlert } from "lucide-react";

import { useLang } from "../lang";
import { ANTICHEAT_URL, useRelease } from "../release";
import { BrandMark } from "./brands";
import { Reveal, SectionHeader } from "./ui";

/** El análisis de la v0.1.0 (24/11/2026) que pasó el autor, tal cual. */
const SNAPSHOT_SHA256 = "dcc2e2e13bc28382e726277b04a388d18cfde3a2cce5ddf10d3c25082f029bd8";

const virusTotalUrl = (sha256: string) => `https://www.virustotal.com/gui/file/${sha256}`;

/** Confianza: privacidad, qué hace y qué no, VirusTotal y la nota honesta sobre anti-cheats. */
export function Trust() {
  const { t } = useLang();
  const release = useRelease();
  const tr = t.trust;
  return (
    <section id="trust" className="relative scroll-mt-16 border-t border-line px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeader eyebrow={tr.eyebrow} title={tr.title} subtitle={tr.subtitle} />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <ul className="grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-3">
            {tr.points.map((point) => (
              <li key={point.title} className="flex gap-2.5 bg-ink p-4 sm:gap-3 sm:p-6">
                <Check className="mt-px size-4 shrink-0 text-lime sm:mt-0.5 sm:size-5" aria-hidden />
                <div className="min-w-0">
                  <p className="font-display text-xs font-bold tracking-wide uppercase sm:text-sm">{point.title}</p>
                  <p className="mt-1.5 text-[13px] leading-snug text-muted sm:text-sm sm:leading-relaxed">{point.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-2">
          <Reveal delay={80}>
            <article className="flex h-full flex-col border border-line bg-panel p-6">
              <h3 className="flex items-center gap-2.5 font-display text-base font-bold tracking-wide uppercase">
                <BrandMark name="virustotal" className="size-5 text-virustotal" />
                {tr.vtTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{tr.vtText}</p>
              <a href={virusTotalUrl(SNAPSHOT_SHA256)} target="_blank" rel="noreferrer" className="mt-5 block border border-line bg-ink p-1.5 transition hover:border-lime/60">
                <img
                  src="/virustotal/vres-0.1.0.png"
                  alt={tr.vtAlt}
                  width={1778}
                  height={210}
                  loading="lazy"
                  className="w-full"
                />
              </a>
              <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-5 text-sm font-semibold">
                <a
                  href={virusTotalUrl(SNAPSHOT_SHA256)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-lime hover:underline"
                >
                  {tr.vtSnapshot}
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
                {release?.sha256 && (
                  <a
                    href={virusTotalUrl(release.sha256)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-fg hover:text-lime"
                  >
                    {tr.vtCurrent.replace("{version}", release.version)}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
          <Reveal delay={140}>
            <article className="flex h-full flex-col border border-amber-400/30 bg-amber-400/[0.04] p-6">
              <h3 className="flex items-center gap-2.5 font-display text-base font-bold tracking-wide uppercase">
                <ShieldAlert className="size-5 text-amber-300" aria-hidden />
                {tr.anticheatTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{tr.anticheatText}</p>
              <a
                href={ANTICHEAT_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-amber-200 hover:underline"
              >
                {tr.anticheatLink}
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
