import { Check, Keyboard, Lock, RotateCcw } from "lucide-react";

import { useLang } from "../lang";
import { Reveal } from "./ui";

/** Seguridad de la pantalla y privacidad. */
export function Trust() {
  const { t } = useLang();
  return (
    <section className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-[2rem] border border-line bg-panel p-8">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-lime/30 bg-lime/10 text-lime">
              <RotateCcw className="size-6" aria-hidden />
            </span>
            <h2 className="mt-6 font-display text-2xl font-black tracking-tight sm:text-3xl">
              {t.trust.safetyTitle}
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {t.trust.safety.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-fg sm:text-base">
                  <Check className="mt-0.5 size-5 shrink-0 text-lime" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-2" aria-hidden>
              {["Ctrl", "Alt", "Shift", "R"].map((key) => (
                <kbd
                  key={key}
                  className="rounded-lg border border-line-strong border-b-4 bg-panel-2 px-3 py-1.5 font-mono text-sm text-fg"
                >
                  {key}
                </kbd>
              ))}
              <Keyboard className="ml-1 size-5 text-muted" />
            </div>
          </article>
        </Reveal>
        <Reveal delay={120}>
          <article className="h-full rounded-[2rem] border border-line bg-gradient-to-br from-[#121a08] to-panel p-8">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-lime/30 bg-lime/10 text-lime">
              <Lock className="size-6" aria-hidden />
            </span>
            <h2 className="mt-6 font-display text-2xl font-black tracking-tight sm:text-3xl">
              {t.trust.privacyTitle}
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {t.trust.privacy.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 rounded-2xl border border-lime/25 bg-ink/60 px-4 py-4 text-sm font-semibold text-fg"
                >
                  <Check className="size-4 shrink-0 text-lime" aria-hidden />
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted">{t.trust.privacyText}</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
