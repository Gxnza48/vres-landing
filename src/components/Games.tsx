import { useLang } from "../lang";
import { Reveal } from "./ui";

/** Los juegos que pidió la comunidad (VRes funciona con cualquiera). */
const GAMES = ["CS2", "VALORANT", "Fortnite", "GTA V", "ROB RUN"];

/** Cinta de juegos que se desplaza sola. */
export function Games() {
  const { t } = useLang();
  const row = [...GAMES, ...GAMES, ...GAMES];
  return (
    <section className="relative overflow-hidden py-20">
      <Reveal className="mx-auto mb-10 max-w-3xl px-5 text-center">
        <h2 className="font-display text-2xl font-black tracking-tight sm:text-4xl">{t.games.title}</h2>
        <p className="mt-4 text-sm text-muted sm:text-base">{t.games.subtitle}</p>
      </Reveal>
      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {[...row, ...row].map((game, index) => (
            <span
              key={index}
              aria-hidden={index >= GAMES.length}
              className="rounded-2xl border border-line bg-panel px-8 py-5 font-display text-xl font-black tracking-wide whitespace-nowrap text-fg/90 transition-colors hover:border-lime/50 hover:text-lime sm:text-2xl"
            >
              {game}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-8 text-center font-display text-sm font-bold tracking-[0.25em] text-lime uppercase">
        + {t.games.others}
      </p>
    </section>
  );
}
