import { Check, Copy, ExternalLink, FileSearch, Terminal } from "lucide-react";
import { useState } from "react";

import { useLang } from "../lang";
import { RELEASES_URL, useRelease } from "../release";
import { BrandMark } from "./brands";
import { Reveal, SectionHeader, trackSpotlight } from "./ui";

/** La captura que pasó el autor: el análisis de la v0.1.0 del 24/11/2026, tal cual. */
const SNAPSHOT = {
  version: "0.1.0",
  date: "2026-11-24",
  sha256: "dcc2e2e13bc28382e726277b04a388d18cfde3a2cce5ddf10d3c25082f029bd8",
  flagged: 1,
  engines: 69,
  image: "/virustotal/vres-0.1.0.png",
  width: 1778,
  height: 210,
};

const LOCALES = { es: "es", en: "en", pt: "pt-BR" } as const;

/** La página de VirusTotal de un archivo, por su SHA-256. */
function virusTotalUrl(sha256: string): string {
  return `https://www.virustotal.com/gui/file/${sha256}`;
}

/** Reemplaza `{clave}` por su valor. */
function fill(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (match, key: string) => String(values[key] ?? match));
}

function CopyButton({ text }: { text: string }) {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        void navigator.clipboard
          .writeText(text)
          .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
          })
          .catch(() => undefined);
      }}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-fg transition hover:border-lime/50"
    >
      {copied ? <Check className="size-3.5 text-lime" aria-hidden /> : <Copy className="size-3.5" aria-hidden />}
      {copied ? t.virustotal.copied : t.virustotal.copy}
    </button>
  );
}

/** El instalador visto por VirusTotal: la captura real y cómo revisar la versión actual. */
export function VirusTotal() {
  const { t, lang } = useLang();
  const release = useRelease();
  const v = t.virustotal;
  const date = new Intl.DateTimeFormat(LOCALES[lang], { day: "numeric", month: "short", year: "numeric" }).format(
    new Date(`${SNAPSHOT.date}T12:00:00`),
  );
  const snapshotUrl = virusTotalUrl(SNAPSHOT.sha256);
  // Responde True si el archivo descargado es idéntico al publicado (-eq no distingue mayúsculas).
  const command =
    release?.sha256 && release.fileName
      ? `(Get-FileHash "$HOME\\Downloads\\${release.fileName}").Hash -eq "${release.sha256}"`
      : null;

  return (
    <section id="virustotal" className="relative scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeader eyebrow={v.eyebrow} title={v.title} subtitle={v.subtitle} />

      <Reveal className="relative mx-auto max-w-6xl">
        <figure className="cut border border-line bg-panel p-3 sm:p-5">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 px-1 font-mono text-[10px] font-semibold tracking-[0.25em] text-muted uppercase sm:text-[11px]">
            <span className="inline-flex items-center gap-2 text-fg">
              <BrandMark name="virustotal" className="size-4 text-virustotal" />
              virustotal.com
            </span>
            <span>{fill(v.shotLabel, { version: SNAPSHOT.version, date })}</span>
          </div>
          {/* La captura abre el análisis real, para que cualquiera la compare. */}
          <a
            href={snapshotUrl}
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden rounded-lg border border-white/10"
          >
            <img
              src={SNAPSHOT.image}
              width={SNAPSHOT.width}
              height={SNAPSHOT.height}
              alt={v.shotAlt}
              loading="lazy"
              className="h-auto w-full transition duration-300 group-hover:brightness-110"
            />
          </a>
        </figure>
      </Reveal>

      <div className="relative mx-auto mt-4 grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-[1fr_1.4fr]">
        <Reveal delay={80}>
          <article className="cut flex h-full flex-col justify-between gap-8 border border-line bg-panel p-7 sm:p-8">
            <div>
              <p className="font-display text-6xl leading-none font-black tracking-tight">
                {SNAPSHOT.flagged}
                <span className="text-muted">/{SNAPSHOT.engines}</span>
              </p>
              <p className="mt-3 font-mono text-[11px] font-semibold tracking-[0.25em] text-muted uppercase">
                {fill(v.statLabel, { version: SNAPSHOT.version })}
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-black tracking-tight">{v.whyTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.whyText}</p>
              <a
                href={snapshotUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-lime hover:underline"
              >
                {v.shotLink}
                <ExternalLink className="size-3.5" aria-hidden />
              </a>
            </div>
          </article>
        </Reveal>

        <Reveal delay={160}>
          <article
            onMouseMove={trackSpotlight}
            className="spotlight cut flex h-full flex-col border border-line bg-panel p-7 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border border-virustotal/40 bg-virustotal/15">
                <BrandMark name="virustotal" className="size-5 text-virustotal" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-xl font-black tracking-tight">{v.currentTitle}</h3>
                <p className="font-mono text-xs text-muted">{release ? `v${release.version}` : "…"}</p>
              </div>
            </div>

            {release?.sha256 ? (
              <>
                <p className="mt-6 font-mono text-[11px] font-semibold tracking-[0.25em] text-muted uppercase">
                  {v.hashLabel}
                </p>
                <div className="mt-2 flex items-start gap-2 rounded-xl border border-line bg-ink/60 p-2 pl-4">
                  <code className="min-w-0 flex-1 self-center font-mono text-xs leading-relaxed break-all text-lime sm:text-sm">
                    {release.sha256}
                  </code>
                  <CopyButton text={release.sha256} />
                </div>
                <a
                  href={virusTotalUrl(release.sha256)}
                  target="_blank"
                  rel="noreferrer"
                  className="cut-sm mt-5 inline-flex items-center justify-center gap-2 self-start bg-lime px-5 py-3 text-ink transition hover:brightness-110"
                >
                  <FileSearch className="size-4" aria-hidden />
                  <span className="font-display text-xs font-black tracking-wider uppercase sm:text-sm">
                    {fill(v.currentCta, { version: release.version })}
                  </span>
                  <ExternalLink className="size-3.5" aria-hidden />
                </a>
                <p className="mt-3 text-xs text-muted">{v.currentHint}</p>

                {command && (
                  <div className="mt-6 border-t border-line pt-5">
                    <p className="flex items-center gap-2 text-sm font-semibold text-fg">
                      <Terminal className="size-4 text-lime" aria-hidden />
                      {v.verifyTitle}
                    </p>
                    <div className="mt-2 flex items-start gap-2 rounded-xl border border-line bg-ink/60 p-2 pl-4">
                      <code className="min-w-0 flex-1 self-center font-mono text-[11px] leading-relaxed break-all text-fg/90">
                        {command}
                      </code>
                      <CopyButton text={command} />
                    </div>
                    <p className="mt-2 text-xs text-muted">{v.verifyText}</p>
                  </div>
                )}
              </>
            ) : (
              <p className="mt-6 text-sm leading-relaxed text-muted">
                {v.currentFallback}{" "}
                <a
                  href={RELEASES_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-lime hover:underline"
                >
                  {v.currentFallbackLink}
                  <ExternalLink className="size-3.5" aria-hidden />
                </a>
              </p>
            )}
          </article>
        </Reveal>
      </div>

      <Reveal className="relative mx-auto mt-8 max-w-3xl text-center" delay={200}>
        <p className="text-[11px] text-muted/70">{v.disclaimer}</p>
      </Reveal>
    </section>
  );
}
