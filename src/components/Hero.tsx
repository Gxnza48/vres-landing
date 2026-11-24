import { ChevronDown, Download } from "lucide-react";
import { useEffect, useRef } from "react";

import { useLang } from "../lang";
import { DISCORD_URL, RELEASES_URL, useRelease } from "../release";
import { DiscordIcon, Reveal } from "./ui";

/** El ícono de VRes dentro del marco de enfoque, que "fija el objetivo" al cargar. */
function FocusIcon() {
  const corners = [
    { position: "top-0 left-0 border-t-[3px] border-l-[3px] rounded-tl-lg", delay: 0 },
    { position: "top-0 right-0 border-t-[3px] border-r-[3px] rounded-tr-lg", delay: 90 },
    { position: "bottom-0 left-0 border-b-[3px] border-l-[3px] rounded-bl-lg", delay: 180 },
    { position: "bottom-0 right-0 border-b-[3px] border-r-[3px] rounded-br-lg", delay: 270 },
  ];
  return (
    <div className="relative mx-auto mb-10 size-36 animate-float sm:size-44">
      <div aria-hidden className="absolute inset-4 rounded-[2rem] bg-lime/30 blur-2xl" />
      <div className="absolute inset-5 overflow-hidden rounded-[1.6rem] border border-lime/30 bg-ink">
        <img src="/icon.png" alt="" className="h-full w-full object-cover" width={256} height={256} />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-1/3 animate-scan bg-gradient-to-b from-transparent via-lime/25 to-transparent"
        />
      </div>
      {corners.map((corner) => (
        <span
          key={corner.position}
          aria-hidden
          className={`corner animate-lock ${corner.position}`}
          style={{ animationDelay: `${corner.delay}ms` }}
        />
      ))}
    </div>
  );
}

/** Primera pantalla: marca, promesa y descarga. */
export function Hero() {
  const { t } = useLang();
  const release = useRelease();
  const glow = useRef<HTMLDivElement>(null);

  // El brillo sigue al mouse (suave, sin re-render).
  useEffect(() => {
    const element = glow.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (event: PointerEvent) => {
      element.style.setProperty("--gx", `${event.clientX}px`);
      element.style.setProperty("--gy", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_50%_0%,black_25%,transparent_70%)]" />
        <div className="absolute top-[-18rem] left-1/2 size-[48rem] -translate-x-1/2 animate-pulse-glow rounded-full bg-lime/20 blur-[140px]" />
        <div
          ref={glow}
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(500px circle at var(--gx, 50%) var(--gy, 30%), rgb(158 250 18 / 0.08), transparent 60%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 text-center">
        <FocusIcon />
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-lime uppercase sm:text-sm">
          <span className="size-1.5 animate-pulse rounded-full bg-lime" aria-hidden />
          {t.hero.badge}
        </p>
        <h1 className="font-display text-5xl leading-[1.05] font-black tracking-tight sm:text-7xl lg:text-8xl">
          <span className="block">{t.hero.title1}</span>
          <span className="block animate-shimmer text-gradient">{t.hero.title2}</span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-base text-pretty text-muted sm:text-xl">
          {t.hero.subtitle}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={release?.url ?? RELEASES_URL}
            className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-lime px-7 py-4 text-lg font-bold text-ink shadow-[0_0_40px_rgb(158_250_18/0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgb(158_250_18/0.6)] sm:w-auto"
          >
            <Download className="size-5 transition group-hover:translate-y-0.5" aria-hidden />
            <span className="flex flex-col items-start leading-tight">
              {t.hero.download}
              {release && (
                <span className="text-xs font-semibold opacity-70">
                  {t.hero.version.replace("{v}", release.version)}
                  {release.sizeMb ? ` · ${release.sizeMb} MB` : ""}
                </span>
              )}
            </span>
          </a>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-discord/50 bg-discord/15 px-7 py-4 text-lg font-semibold text-fg transition hover:-translate-y-0.5 hover:bg-discord/25 sm:w-auto"
          >
            <DiscordIcon className="size-5 text-[#8b93ff]" />
            {t.hero.discord}
          </a>
        </div>
        <p className="mt-5 text-xs text-muted sm:text-sm">{t.hero.meta}</p>

        <Reveal className="mt-16" delay={150}>
          <dl className="grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-panel/70 backdrop-blur sm:grid-cols-4">
            {t.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center gap-1 px-4 py-6 ${
                  index > 0 ? "sm:border-l sm:border-line" : ""
                } ${index % 2 === 1 ? "border-l border-line sm:border-l" : ""} ${
                  index > 1 ? "border-t border-line sm:border-t-0" : ""
                }`}
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-xl font-black whitespace-nowrap text-lime sm:text-2xl lg:text-[1.7rem]">
                  {stat.value}
                </dd>
                <dd className="text-center text-xs text-muted sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <a
          href="#demo"
          className="mt-12 inline-flex flex-col items-center gap-1 text-xs text-muted transition hover:text-fg"
        >
          {t.hero.scroll}
          <ChevronDown className="size-5 animate-bounce" aria-hidden />
        </a>
      </div>
    </section>
  );
}
