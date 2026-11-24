import { Ban, Cpu, Gamepad2, Layers, Lock, Monitor, MonitorCog } from "lucide-react";

import { useLang } from "../lang";
import { Reveal, SectionHeader } from "./ui";

const ICONS = [Layers, MonitorCog, Cpu];

/**
 * El camino de la imagen: el juego queda intacto y VRes actúa después, en
 * Windows, en la placa de video y en el monitor.
 */
function Pipeline() {
  const { t } = useLang();
  const touched = t.how.layers;
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Línea que une los pasos, con un pulso que baja. */}
      <div aria-hidden className="absolute top-8 bottom-8 left-8 w-px bg-gradient-to-b from-line via-lime/60 to-lime/20" />
      <div
        aria-hidden
        className="absolute left-[30px] size-1.5 animate-[pipeline_4s_ease-in-out_infinite] rounded-full bg-lime shadow-[0_0_12px_#9efa12]"
      />
      <ol className="relative flex flex-col gap-4">
        <li className="flex items-center gap-4 rounded-2xl border border-line bg-panel-2 p-4">
          <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-ink text-muted">
            <Gamepad2 className="size-4" aria-hidden />
          </span>
          <span className="flex-1 text-sm font-semibold text-fg">{t.how.game}</span>
          <span className="inline-flex items-center gap-1 rounded-full border border-line-strong px-2.5 py-1 text-[11px] font-semibold text-muted">
            <Lock className="size-3" aria-hidden />
            {t.how.untouched}
          </span>
        </li>
        {touched.map((layer, index) => {
          const Icon = ICONS[index] ?? Layers;
          return (
            <li
              key={layer.name}
              className="flex items-center gap-4 rounded-2xl border border-lime/35 bg-gradient-to-r from-lime/10 to-transparent p-4"
            >
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-lime/40 bg-ink text-lime">
                <Icon className="size-4" aria-hidden />
              </span>
              <span className="flex-1 text-sm font-semibold text-fg">{layer.name}</span>
              <span className="rounded-full bg-lime px-2.5 py-1 text-[11px] font-bold text-ink">VRes</span>
            </li>
          );
        })}
        <li className="flex items-center gap-4 rounded-2xl border border-line bg-panel-2 p-4">
          <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-ink text-fg">
            <Monitor className="size-4" aria-hidden />
          </span>
          <span className="flex-1 text-sm font-semibold text-fg">{t.how.screen}</span>
        </li>
      </ol>
    </div>
  );
}

/** Cómo funciona: el camino de la imagen, las tres capas y lo que nunca hace. */
export function HowItWorks() {
  const { t } = useLang();
  return (
    <section id="how" className="relative scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeader eyebrow={t.how.eyebrow} title={t.how.title} subtitle={t.how.subtitle} />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Pipeline />
        </Reveal>

        <div className="flex flex-col gap-4">
          {t.how.layers.map((layer, index) => {
            const Icon = ICONS[index] ?? Layers;
            return (
              <Reveal key={layer.name} delay={index * 80}>
                <article className="flex gap-4 rounded-3xl border border-line bg-panel p-5">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border border-lime/30 bg-lime/10 text-lime">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold">
                      {layer.name}
                      <span className="ml-2 align-middle text-xs font-semibold text-lime">· {layer.scope}</span>
                    </h3>
                    <p className="mt-1 text-sm text-muted">{layer.text}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
          <Reveal delay={240}>
            <ul className="mt-2 grid grid-cols-2 gap-2">
              {t.how.never.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-line bg-ink px-3 py-2.5 text-xs text-fg sm:text-sm"
                >
                  <Ban className="size-4 shrink-0 text-[#ff5a6b]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
