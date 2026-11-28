import { CompareSlider } from "@vizzele/react";
import { Download, Gauge, TriangleAlert } from "lucide-react";

import { useLang } from "../lang";
import { RELEASES_URL, useRelease } from "../release";
import { Reveal } from "./ui";

/** Esquinas de visor alrededor de una captura. */
function HudCorners() {
  return (
    <>
      <span aria-hidden className="hud-c -top-2 -left-2 border-t-2 border-l-2" />
      <span aria-hidden className="hud-c -top-2 -right-2 border-t-2 border-r-2" />
      <span aria-hidden className="hud-c -bottom-2 -left-2 border-b-2 border-l-2" />
      <span aria-hidden className="hud-c -right-2 -bottom-2 border-r-2 border-b-2" />
    </>
  );
}

/**
 * Gráficos Potato (NVIDIA, ROB RUN): capturas reales normal vs. potato, cómo se activa y el
 * aviso de riesgo, siempre visible.
 */
export function Potato() {
  const { t } = useLang();
  const release = useRelease();
  const p = t.potato;
  return (
    <section id="potato" className="relative scroll-mt-16 overflow-clip px-5 py-20 sm:px-8 sm:py-28">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_40%,#000,transparent_70%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-x-16 lg:gap-y-0">
        {/* Título. */}
        <Reveal className="lg:col-start-2 lg:row-start-1">
          <p className="font-mono text-xs font-semibold tracking-[0.35em] text-lime uppercase">
            <span className="text-lime/50">// </span>
            {p.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] font-black tracking-tight uppercase sm:text-6xl">
            {p.title.before && <span className="block">{p.title.before}</span>}
            <span className="block text-lime [text-shadow:0_0_40px_rgb(158_250_18/0.35)]">{p.title.accent}</span>
            {p.title.after && <span className="block">{p.title.after}</span>}
          </h2>
          <p className="mt-5 max-w-lg text-base text-pretty text-white/75 sm:text-lg">{p.subtitle}</p>
        </Reveal>

        {/* Comparador con capturas reales. */}
        <Reveal className="lg:sticky lg:top-24 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-start">
          <figure>
            <div className="hud-frame">
              <HudCorners />
              <CompareSlider
                className="aspect-[9/8] w-full border border-line-strong bg-panel"
                defaultPosition={50}
                beforeLabel={p.potato}
                afterLabel={p.normal}
                label={p.drag}
                before={
                  <img
                    src="/potato/potato.webp"
                    alt={`ROB RUN · ${p.potato}`}
                    width={1080}
                    height={960}
                    decoding="async"
                    draggable={false}
                  />
                }
                after={
                  <img
                    src="/potato/normal.webp"
                    alt={`ROB RUN · ${p.normal}`}
                    width={1080}
                    height={960}
                    decoding="async"
                    draggable={false}
                  />
                }
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between gap-3 font-mono text-[10px] font-semibold tracking-[0.25em] text-muted uppercase sm:text-[11px]">
              <span>{p.caption}</span>
              <span className="hidden text-lime sm:inline">◀ ▶</span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Ficha, la app y el aviso. */}
        <Reveal className="lg:col-start-2 lg:row-start-2" delay={100}>

          <dl className="grid lg:mt-8 grid-cols-1 border-t border-line sm:grid-cols-2">
            {p.specs.map((spec, index) => (
              <div
                key={spec.k}
                className={`flex items-baseline justify-between gap-4 border-b border-line py-3 sm:block sm:py-3.5 ${
                  index % 2 === 0 ? "sm:pr-5" : "sm:border-l sm:pl-5"
                } ${index === p.specs.length - 1 ? "sm:col-span-2 sm:border-l-0 sm:pl-0" : ""}`}
              >
                <dt className="font-mono text-[10px] font-semibold tracking-[0.3em] text-muted uppercase">{spec.k}</dt>
                <dd className="text-right text-sm font-semibold text-fg sm:mt-1 sm:text-left sm:text-base">{spec.v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 border border-line bg-panel p-2">
            <p className="px-1 pb-2 font-mono text-[10px] font-semibold tracking-[0.3em] text-muted uppercase">
              {p.appLabel}
            </p>
            <img
              src="/potato/app-levels.webp"
              alt={p.appAlt}
              width={957}
              height={200}
              loading="lazy"
              decoding="async"
              className="w-full"
            />
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted">{p.how}</p>

          <div className="mt-6 flex gap-3 border border-lime/40 bg-lime/[0.06] p-4">
            <Gauge className="mt-0.5 size-5 shrink-0 text-lime" aria-hidden />
            <p className="text-sm leading-relaxed text-fg/90">
              <strong className="font-semibold text-lime">{p.fpsTitle}</strong> {p.fps}
            </p>
          </div>

          <div role="note" className="mt-6 flex gap-3 border border-amber-400/40 bg-amber-400/[0.07] p-4">
            <TriangleAlert className="mt-0.5 size-5 shrink-0 text-amber-300" aria-hidden />
            <p className="text-sm leading-relaxed text-amber-50/90">
              <strong className="font-semibold text-amber-200">{p.riskTitle}.</strong> {p.risk}
            </p>
          </div>

          <a
            href={release?.url ?? RELEASES_URL}
            className="cut mt-8 inline-flex items-center gap-3 bg-lime px-6 py-3.5 font-display text-sm font-black tracking-wider text-ink uppercase transition hover:brightness-110"
          >
            <Download className="size-4" aria-hidden />
            {t.cta.download}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
