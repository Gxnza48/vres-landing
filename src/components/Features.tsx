import { Counter, SpotlightCard } from "@vizzele/react";
import { ArrowRight, Contrast, Crosshair, Gamepad2, MoonStar, Scaling, TriangleAlert, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { useLang } from "../lang";
import { Reveal, SectionHeader } from "./ui";

/** 300 % que sube con un resorte, sobre una barra que se satura al pasar el mouse. */
function ColorVisual() {
  const { t } = useLang();
  return (
    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end">
      <div className="shrink-0">
        <Counter
          value={300}
          suffix="%"
          className="block font-display text-5xl leading-none font-black text-lime tabular-nums sm:text-6xl"
        />
        <span className="mt-1 block font-mono text-[10px] font-semibold tracking-[0.3em] text-muted uppercase">
          {t.features.counterLabel}
        </span>
      </div>
      <div className="flex h-14 w-full flex-none overflow-hidden border sm:w-auto sm:flex-1 border-line saturate-[0.55] transition duration-700 group-hover:saturate-[1.8]">
        {["#ff3b5c", "#ff9f1c", "#ffe14d", "#7dff3b", "#22d3ee", "#4f6bff", "#b44dff"].map((color) => (
          <span key={color} className="flex-1" style={{ background: color }} />
        ))}
      </div>
    </div>
  );
}

/** Crosshair y el enlace a la galería. */
function CrosshairVisual() {
  const { t } = useLang();
  return (
    <div className="mt-6 flex items-center gap-4">
      <div className="flex size-20 shrink-0 items-center justify-center border border-line bg-[radial-gradient(circle,#1a1a1a,#050505)]">
        <svg viewBox="0 0 64 64" className="size-12 transition duration-700 group-hover:rotate-45" aria-hidden>
          <rect x="30" y="10" width="4" height="14" fill="#9efa12" />
          <rect x="30" y="40" width="4" height="14" fill="#9efa12" />
          <rect x="10" y="30" width="14" height="4" fill="#9efa12" />
          <rect x="40" y="30" width="14" height="4" fill="#9efa12" />
          <rect x="30" y="30" width="4" height="4" fill="#fff" />
        </svg>
      </div>
      <a
        href="/miras"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-lime underline-offset-4 hover:underline"
      >
        {t.features.items.crosshair.link}
        <ArrowRight className="size-4" aria-hidden />
      </a>
    </div>
  );
}

/** Un 4:3 que se estira a 16:9. */
function StretchVisual() {
  return (
    <div className="mt-6 flex h-20 items-center justify-center border border-line bg-ink/60">
      <div className="relative flex h-12 w-16 items-center justify-center border-2 border-lime/70 bg-lime/5 transition-all duration-700 group-hover:w-[8.5rem]">
        <span className="font-mono text-[11px] text-lime">4:3</span>
      </div>
    </div>
  );
}

/** Un perfil por juego, con el activo resaltado. */
function ProfilesVisual() {
  const { t } = useLang();
  return (
    <div className="mt-6 flex flex-wrap gap-1.5">
      {["CS2", "VALORANT", "Fortnite", "ROB RUN"].map((game, index) => (
        <span
          key={game}
          className={`border px-2 py-1 font-display text-[10px] font-bold tracking-wide ${
            index === 0 ? "border-lime/60 bg-lime/15 text-lime" : "border-line text-muted"
          }`}
        >
          {game}
        </span>
      ))}
      <span className="mt-1.5 flex w-full items-center gap-1.5 text-xs text-lime">
        <span className="size-1.5 animate-pulse rounded-full bg-lime" aria-hidden />
        {t.features.activeProfile}: CS2
      </span>
    </div>
  );
}

/** Aviso del Dark Boost. */
function DarkBoostNote() {
  const { t } = useLang();
  return (
    <p className="mt-6 flex gap-2 border border-amber-400/30 bg-amber-400/[0.06] px-3 py-2.5 text-xs leading-relaxed text-amber-100/90">
      <TriangleAlert className="mt-px size-4 shrink-0 text-amber-300" aria-hidden />
      {t.features.items.darkBoost.note}
    </p>
  );
}

interface Item {
  key: keyof ReturnType<typeof useLang>["t"]["features"]["items"];
  icon: LucideIcon;
  visual: ReactNode;
  wide?: boolean;
}

const ITEMS: Item[] = [
  { key: "color", icon: Contrast, visual: <ColorVisual />, wide: true },
  { key: "crosshair", icon: Crosshair, visual: <CrosshairVisual /> },
  { key: "stretch", icon: Scaling, visual: <StretchVisual /> },
  { key: "profiles", icon: Gamepad2, visual: <ProfilesVisual /> },
  { key: "darkBoost", icon: MoonStar, visual: <DarkBoostNote /> },
];

/** Funciones, en una grilla compacta. */
export function Features() {
  const { t } = useLang();
  return (
    <section id="features" className="relative scroll-mt-16 border-t border-line px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeader eyebrow={t.features.eyebrow} title={t.features.title} />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item, index) => {
          const copy = t.features.items[item.key];
          const Icon = item.icon;
          return (
            <Reveal key={item.key} delay={(index % 3) * 70} className={item.wide ? "sm:col-span-2" : ""}>
              <SpotlightCard
                as="article"
                className="group flex h-full flex-col border border-line bg-panel p-6 transition-colors duration-300 hover:border-line-strong"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-9 items-center justify-center border border-lime/30 bg-lime/10 text-lime">
                    <Icon className="size-[18px]" aria-hidden />
                  </span>
                  <h3 className="font-display text-base font-bold tracking-tight uppercase sm:text-lg">{copy.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{copy.text}</p>
                <div className="mt-auto">{item.visual}</div>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
