import {
  Contrast,
  Crosshair,
  Gamepad2,
  MoonStar,
  Palette,
  Scaling,
  Share2,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Copy } from "lucide-react";
import { useState, type ReactNode } from "react";

import { useLang } from "../lang";
import { Reveal, SectionHeader, trackSpotlight } from "./ui";

/** Barra de colores que se satura al pasar el mouse. */
function ColorVisual() {
  return (
    <div className="mt-6 flex h-16 overflow-hidden rounded-xl border border-line saturate-[0.35] transition duration-700 group-hover:saturate-[2.2]">
      {["#ff3b5c", "#ff9f1c", "#ffe14d", "#7dff3b", "#22d3ee", "#4f6bff", "#b44dff"].map((color) => (
        <span key={color} className="flex-1" style={{ background: color }} />
      ))}
    </div>
  );
}

/** Vibrance por driver, monitor por monitor. */
function VibranceVisual() {
  return (
    <div className="mt-6 flex flex-col gap-3 rounded-xl border border-line bg-ink/60 p-4">
      {["NVIDIA", "AMD"].map((name, index) => (
        <div key={name} className="flex items-center gap-3">
          <span className="w-14 font-mono text-xs text-muted">{name}</span>
          <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-line">
            <div
              className="h-full rounded-full bg-gradient-to-r from-lime/40 to-lime transition-all duration-700 group-hover:w-full"
              style={{ width: index === 0 ? "55%" : "45%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/** Un perfil por juego, con el activo resaltado. */
function ProfilesVisual() {
  const { t } = useLang();
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {["CS2", "VALORANT", "Fortnite", "GTA V", "ROB RUN"].map((game, index) => (
        <span
          key={game}
          className={`rounded-lg border px-2.5 py-1 font-display text-[11px] font-bold tracking-wide ${
            index === 0 ? "border-lime/60 bg-lime/15 text-lime" : "border-line text-muted"
          }`}
        >
          {game}
        </span>
      ))}
      <span className="mt-1 flex w-full items-center gap-1.5 text-xs text-lime">
        <span className="size-1.5 animate-pulse rounded-full bg-lime" aria-hidden />
        {t.features.activeProfile}: CS2
      </span>
    </div>
  );
}

/** Un código real: pegado en VRes, aplica este look. */
const SAMPLE_CODE = "VRL1-0017G-11810-81067-9PT35-M";

function LooksVisual() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  return (
    <div className="mt-6 flex flex-col gap-2">
      <div className="flex items-center gap-2 rounded-xl border border-line bg-ink/60 p-2 pl-4">
        <code className="min-w-0 flex-1 truncate font-mono text-sm text-lime">{SAMPLE_CODE}</code>
        <button
          type="button"
          onClick={() => {
            void navigator.clipboard
              .writeText(SAMPLE_CODE)
              .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1800);
              })
              .catch(() => undefined);
          }}
          className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-fg transition hover:border-lime/50"
        >
          <Copy className="size-3.5" aria-hidden />
          {copied ? t.features.copied : t.features.copy}
        </button>
      </div>
      <p className="text-xs text-muted">{t.features.codeHint}</p>
    </div>
  );
}

/** Los colores de acento de la app. */
function CustomizeVisual() {
  const accents = ["#9efa12", "#22d3ee", "#4f8cff", "#a78bfa", "#f472b6", "#f43f5e", "#fb923c", "#facc15"];
  return (
    <div className="mt-6 flex flex-wrap gap-2.5">
      {accents.map((color, index) => (
        <span
          key={color}
          className="size-8 rounded-full ring-2 ring-white/10 transition duration-300 group-hover:-translate-y-1"
          style={{ background: color, transitionDelay: `${index * 30}ms` }}
        />
      ))}
    </div>
  );
}

/** Un 4:3 que se estira a 16:9. */
function StretchVisual() {
  return (
    <div className="mt-6 flex h-28 items-center justify-center rounded-xl border border-line bg-ink/60">
      <div className="relative flex h-20 w-[6.7rem] items-center justify-center rounded-md border-2 border-lime/70 bg-gradient-to-br from-[#1b0b33] to-[#3a1463] transition-all duration-700 group-hover:w-[14rem]">
        <span className="font-mono text-xs text-lime transition-opacity duration-300 group-hover:opacity-0">4:3</span>
        <span className="absolute font-mono text-xs text-lime opacity-0 transition-opacity delay-300 duration-300 group-hover:opacity-100">
          4:3 → 16:9
        </span>
      </div>
    </div>
  );
}

/** Crosshair que gira y cambia de color. */
function CrosshairVisual() {
  return (
    <div className="mt-6 flex h-28 items-center justify-center rounded-xl border border-line bg-[radial-gradient(circle,#1a1a1a,#050505)]">
      <svg viewBox="0 0 64 64" className="size-16 transition duration-700 group-hover:rotate-45" aria-hidden>
        <circle cx="32" cy="32" r="18" fill="none" stroke="#9efa12" strokeWidth="2" opacity="0.5" />
        <rect x="30" y="8" width="4" height="14" fill="#9efa12" />
        <rect x="30" y="42" width="4" height="14" fill="#9efa12" />
        <rect x="8" y="30" width="14" height="4" fill="#9efa12" />
        <rect x="42" y="30" width="14" height="4" fill="#9efa12" />
        <rect x="30" y="30" width="4" height="4" fill="#fff" />
      </svg>
    </div>
  );
}

/** Sombras que se aclaran al pasar el mouse. */
function DarkBoostVisual() {
  return (
    <div className="mt-6 h-28 overflow-hidden rounded-xl border border-line bg-[#06040a] transition duration-700 [filter:brightness(1)] group-hover:[filter:brightness(2.6)_contrast(1.1)]">
      <svg viewBox="0 0 200 80" className="h-full w-full" aria-hidden>
        <rect width="200" height="80" fill="#07050b" />
        <circle cx="140" cy="30" r="9" fill="#120d18" />
        <path d="M126 80 C127 55 132 42 140 40 C148 42 153 55 154 80 Z" fill="#120d18" />
        <rect x="134" y="27" width="12" height="3" rx="1.5" fill="#1d1628" />
      </svg>
    </div>
  );
}

interface Item {
  key: keyof ReturnType<typeof useLang>["t"]["features"]["items"];
  icon: LucideIcon;
  visual?: ReactNode;
  wide?: boolean;
}

const ITEMS: Item[] = [
  { key: "color", icon: Contrast, visual: <ColorVisual />, wide: true },
  { key: "vibrance", icon: Zap, visual: <VibranceVisual /> },
  { key: "stretch", icon: Scaling, visual: <StretchVisual /> },
  { key: "crosshair", icon: Crosshair, visual: <CrosshairVisual /> },
  { key: "profiles", icon: Gamepad2, visual: <ProfilesVisual /> },
  { key: "enhancers", icon: MoonStar, visual: <DarkBoostVisual />, wide: true },
  { key: "looks", icon: Share2, visual: <LooksVisual />, wide: true },
  { key: "customize", icon: Palette, visual: <CustomizeVisual />, wide: true },
];

/** Funciones, en una grilla de tarjetas. */
export function Features() {
  const { t } = useLang();
  return (
    <section id="features" className="relative scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeader eyebrow={t.features.eyebrow} title={t.features.title} subtitle={t.features.subtitle} />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item, index) => {
          const copy = t.features.items[item.key];
          const Icon = item.icon;
          return (
            <Reveal
              key={item.key}
              delay={(index % 4) * 80}
              className={item.wide ? "sm:col-span-2" : ""}
            >
              <article
                onMouseMove={trackSpotlight}
                className="spotlight group h-full rounded-3xl border border-line bg-panel p-6 transition-colors duration-300 hover:border-lime/40"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-2xl border border-lime/30 bg-lime/10 text-lime">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold tracking-tight">{copy.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{copy.text}</p>
                {item.visual}
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
