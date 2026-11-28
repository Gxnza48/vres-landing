import { Magnetic, Marquee } from "@vizzele/react";
import { ArrowRight, ChevronsLeftRight, Download } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";

import { useLang } from "../lang";
import { DISCORD_URL, RELEASES_URL, useRelease } from "../release";
import { useScene } from "../scene-state";
import { ScenePicker } from "./ScenePicker";
import { DiscordIcon } from "./ui";

const MIN = 8;
const MAX = 92;
const clamp = (value: number) => Math.min(MAX, Math.max(MIN, value));

/**
 * Primera pantalla: la escena de neón partida en "sin VRes" y "con VRes", con
 * un divisor que se arrastra. Hasta que lo tocas, se mueve solo.
 */
export function Hero() {
  const { t } = useLang();
  const release = useRelease();
  const { scene } = useScene();
  const section = useRef<HTMLElement>(null);
  const [touched, setTouched] = useState(false);
  const [value, setValue] = useState(60);

  // El divisor vive en una variable CSS: moverlo no re-renderiza la escena.
  const place = (percent: number) => {
    section.current?.style.setProperty("--split", `${clamp(percent)}%`);
  };

  useEffect(() => {
    if (touched || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      place(60 + 16 * Math.sin((now - start) / 1500));
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [touched]);

  const fromPointer = (event: PointerEvent<HTMLElement>) => {
    const rect = section.current?.getBoundingClientRect();
    if (!rect) return;
    const percent = clamp(((event.clientX - rect.left) / rect.width) * 100);
    place(percent);
    setValue(Math.round(percent));
  };

  const onKey = (event: KeyboardEvent<HTMLButtonElement>) => {
    const step = event.shiftKey ? 10 : 3;
    const next = event.key === "ArrowLeft" ? value - step : event.key === "ArrowRight" ? value + step : null;
    if (next === null) return;
    event.preventDefault();
    setTouched(true);
    setValue(clamp(next));
    place(next);
  };

  return (
    <section
      ref={section}
      id="top"
      className="relative isolate min-h-[max(100svh,46rem)] overflow-hidden"
      style={{ "--split": "60%" } as CSSProperties}
    >
      {/* Antes: la imagen tal cual. */}
      <div aria-hidden className="absolute inset-0 [filter:saturate(0.28)_brightness(0.8)_contrast(0.92)]">
        <img
          key={scene.id}
          src={scene.src}
          alt=""
          className="h-full w-full animate-[fade_0.6s_ease-out] object-cover"
          style={{ objectPosition: scene.position }}
        />
      </div>
      {/* Después: con VRes. */}
      <div
        aria-hidden
        className="absolute inset-0 [clip-path:inset(0_0_0_var(--split))] [filter:saturate(1.75)_contrast(1.08)_brightness(1.04)]"
      >
        <img
          key={scene.id}
          src={scene.src}
          alt=""
          className="h-full w-full animate-[fade_0.6s_ease-out] object-cover"
          style={{ objectPosition: scene.position }}
        />
      </div>
      <div aria-hidden className="scanlines pointer-events-none absolute inset-0 opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/55 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent"
      />

      {/* Divisor. */}
      <div className="absolute top-0 bottom-0 z-20" style={{ left: "var(--split)" }}>
        <div aria-hidden className="absolute inset-y-0 -left-px w-0.5 bg-lime shadow-[0_0_24px_#9efa12]" />
        <span className="absolute top-[7.1rem] right-10 font-mono text-[11px] font-semibold tracking-[0.3em] whitespace-nowrap text-white/80 uppercase">
          ◀ {t.hero.before}
        </span>
        <span className="absolute top-[7.1rem] left-10 font-mono text-[11px] font-semibold tracking-[0.3em] whitespace-nowrap text-lime uppercase">
          {t.hero.after} ▶
        </span>
        <button
          type="button"
          role="slider"
          aria-label={t.hero.drag}
          aria-valuemin={MIN}
          aria-valuemax={MAX}
          aria-valuenow={value}
          onPointerDown={(event) => {
            event.currentTarget.setPointerCapture(event.pointerId);
            setTouched(true);
            fromPointer(event);
          }}
          onPointerMove={(event) => {
            if (event.currentTarget.hasPointerCapture(event.pointerId)) fromPointer(event);
          }}
          onKeyDown={onKey}
          className="cut-sm absolute top-[6rem] left-0 flex size-14 -translate-x-1/2 cursor-ew-resize touch-none items-center justify-center bg-lime text-ink shadow-[0_0_40px_rgb(158_250_18/0.7)] transition-transform hover:scale-110"
        >
          <ChevronsLeftRight className="size-6" aria-hidden />
        </button>
      </div>

      <ScenePicker
        label={t.hero.scene}
        layout="column"
        className="absolute right-8 bottom-24 z-30 hidden lg:flex"
      />

      {/* Contenido. */}
      <div className="pointer-events-none relative z-10 mx-auto flex min-h-[max(100svh,46rem)] max-w-7xl flex-col justify-end px-5 pt-48 pb-28 sm:px-8 sm:pb-32">
        <ScenePicker label={t.hero.scene} layout="row" className="pointer-events-auto mb-8 lg:hidden" />
        <a
          href="#potato"
          className="cut-sm pointer-events-auto mb-6 inline-flex items-center gap-2.5 self-start border border-lime/50 bg-black/70 py-2 pr-3 pl-2 text-xs font-semibold text-white backdrop-blur transition hover:border-lime hover:bg-lime/15 sm:text-sm"
        >
          <span className="bg-lime px-1.5 py-0.5 font-display text-[10px] font-black tracking-widest text-ink uppercase">
            NVIDIA
          </span>
          {t.hero.potatoPill}
          <ArrowRight className="size-4 text-lime" aria-hidden />
        </a>
        <p className="font-mono text-[11px] font-semibold tracking-[0.3em] text-lime uppercase sm:text-xs">
          // {release ? `v${release.version}` : "VRes"} · {t.hero.badge}
        </p>
        <h1 className="mt-4 font-display text-[clamp(1.75rem,7.4vw,7rem)] leading-[0.9] font-black tracking-tight uppercase">
          <span className="block text-white">{t.hero.title1}</span>
          <span className="block text-lime [text-shadow:0_0_48px_rgb(158_250_18/0.45)]">{t.hero.title2}</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-pretty text-white/80 sm:text-lg">{t.hero.subtitle}</p>
        <div className="pointer-events-auto mt-8 flex flex-col gap-3 sm:flex-row">
          <Magnetic
            as="a"
            href={release?.url ?? RELEASES_URL}
            strength={0.25}
            radius={40}
            style={{ display: "flex" }}
            className="cut group items-center justify-center gap-3 bg-lime px-7 py-4 text-ink shadow-[0_0_40px_rgb(158_250_18/0.35)] transition-[filter] hover:brightness-110"
          >
            <Download className="size-5 transition group-hover:translate-y-0.5" aria-hidden />
            <span className="flex flex-col items-start leading-tight">
              <span className="font-display text-sm font-black tracking-wider uppercase">{t.hero.download}</span>
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
            className="cut inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 px-7 py-4 text-white backdrop-blur transition hover:bg-discord/30"
          >
            <DiscordIcon className="size-5" />
            <span className="font-display text-sm font-black tracking-wider uppercase">{t.hero.discord}</span>
          </a>
        </div>
        <p className="mt-4 text-xs text-white/55">
          {t.hero.meta} ·{" "}
          <a
            href="#trust"
            className="pointer-events-auto font-semibold text-white/80 underline decoration-white/30 underline-offset-2 transition hover:text-lime hover:decoration-lime"
          >
            {t.hero.virustotal}
          </a>
        </p>
      </div>

      {/* Cinta tipo transmisión: se frena al pasar el mouse y se puede arrastrar. */}
      <div className="absolute inset-x-0 bottom-0 z-20 bg-lime py-3 text-ink">
        <Marquee speed={45} gap={0} fade={false} label={t.hero.ticker.join(" · ")}>
          {t.hero.ticker.map((item) => (
            <span
              key={item}
              className="flex items-center gap-6 pr-6 font-display text-xs font-black tracking-[0.2em] whitespace-nowrap uppercase sm:text-sm"
            >
              {item}
              <span aria-hidden className="text-ink/50">
                ✦
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
