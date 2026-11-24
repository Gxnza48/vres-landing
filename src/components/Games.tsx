import { Plus } from "lucide-react";
import type { ReactNode } from "react";

import { useLang } from "../lang";
import { BrandMark } from "./brands";
import { Reveal, SectionHeader } from "./ui";

interface Game {
  name: string;
  /** Degradado del ícono, en los colores de cada juego. */
  tile: string;
  glow: string;
  mark: ReactNode;
}

/** Los juegos que pidió la comunidad, con sus logos oficiales. VRes funciona con cualquiera. */
const GAMES: Game[] = [
  {
    name: "CS2",
    tile: "from-[#f6a623] via-[#d9731a] to-[#5b2307]",
    glow: "rgb(246 166 35 / 0.55)",
    mark: <BrandMark name="counterStrike" className="size-[58%] text-white drop-shadow-[0_4px_12px_rgb(0_0_0/0.45)]" />,
  },
  {
    name: "VALORANT",
    tile: "from-[#ff5865] via-[#e03445] to-[#5a0d18]",
    glow: "rgb(255 70 85 / 0.55)",
    mark: <BrandMark name="valorant" className="size-[52%] text-white drop-shadow-[0_4px_12px_rgb(0_0_0/0.45)]" />,
  },
  {
    name: "Fortnite",
    tile: "from-[#2fb4ff] via-[#5b5cf6] to-[#3b0f7a]",
    glow: "rgb(91 92 246 / 0.55)",
    mark: <BrandMark name="fortnite" className="size-[50%] text-white drop-shadow-[0_4px_12px_rgb(0_0_0/0.45)]" />,
  },
  {
    name: "GTA V",
    tile: "from-[#3c8f3a] via-[#1c4d21] to-[#050f07]",
    glow: "rgb(76 175 80 / 0.5)",
    mark: <img src="/brands/gtav.png" alt="" className="w-full scale-[1.2] drop-shadow-[0_4px_12px_rgb(0_0_0/0.5)]" loading="lazy" />,
  },
  {
    name: "ROB RUN",
    tile: "from-[#e4572e] via-[#7c2412] to-[#170604]",
    glow: "rgb(228 87 46 / 0.5)",
    mark: <img src="/brands/robrun.png" alt="" className="w-[92%] drop-shadow-[0_4px_12px_rgb(0_0_0/0.5)]" loading="lazy" />,
  },
];

/** Íconos de los juegos, estilo biblioteca. */
export function Games() {
  const { t } = useLang();
  return (
    <section id="games" className="relative scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeader eyebrow={t.games.eyebrow} title={t.games.title} subtitle={t.games.subtitle} />
      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-4 sm:grid-cols-6 sm:gap-5">
        {GAMES.map((game, index) => (
          <Reveal key={game.name} delay={index * 70}>
            <figure className="group flex flex-col items-center gap-3">
              <div
                className={`relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[1.6rem] bg-gradient-to-br ${game.tile} ring-1 ring-white/15 transition duration-300 group-hover:-translate-y-2 group-hover:rotate-[-2deg]`}
                style={{ boxShadow: `0 18px 40px rgb(0 0 0 / 0.6)` }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                  style={{ boxShadow: `0 0 60px ${game.glow} inset` }}
                />
                <div
                  aria-hidden
                  className="absolute -top-1/2 -left-1/4 h-full w-[150%] rotate-[-12deg] bg-gradient-to-b from-white/25 to-transparent"
                />
                <div className="relative flex w-full items-center justify-center">{game.mark}</div>
              </div>
              <figcaption className="font-display text-[11px] font-black tracking-wider text-white/90 uppercase sm:text-xs">
                {game.name}
              </figcaption>
            </figure>
          </Reveal>
        ))}
        <Reveal delay={GAMES.length * 70}>
          <figure className="flex flex-col items-center gap-3">
            <div className="flex aspect-square w-full items-center justify-center rounded-[1.6rem] border-2 border-dashed border-lime/40 bg-lime/5 text-lime">
              <Plus className="size-1/3" aria-hidden />
            </div>
            <figcaption className="text-center font-display text-[11px] font-black tracking-wider text-lime uppercase sm:text-xs">
              {t.games.others}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
