import { Crosshair, Eye, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useLang } from "../lang";
import { CityScene } from "./scene";
import { Reveal, SectionHeader } from "./ui";

/** Matriz de saturación (pesos Rec. 709), como la de VRes. */
function saturationMatrix(s: number): string {
  const [r, g, b] = [0.2126, 0.7152, 0.0722];
  return [
    [r + (1 - r) * s, g - g * s, b - b * s, 0, 0],
    [r - r * s, g + (1 - g) * s, b - b * s, 0, 0],
    [r - r * s, g - g * s, b + (1 - b) * s, 0, 0],
    [0, 0, 0, 1, 0],
  ]
    .flat()
    .map((value) => value.toFixed(4))
    .join(" ");
}

/** Crosshair como el de VRes por defecto: verde lima con contorno negro. */
function CrosshairOverlay() {
  const arms = [
    { x: 29, y: 6, w: 6, h: 16 },
    { x: 29, y: 42, w: 6, h: 16 },
    { x: 6, y: 29, w: 16, h: 6 },
    { x: 42, y: 29, w: 16, h: 6 },
  ];
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden
      className="pointer-events-none absolute top-1/2 left-1/2 size-12 -translate-x-1/2 -translate-y-1/2 sm:size-16"
    >
      {arms.map((arm, index) => (
        <rect key={`o${index}`} x={arm.x - 1.5} y={arm.y - 1.5} width={arm.w + 3} height={arm.h + 3} fill="#000" />
      ))}
      <rect x="28.5" y="28.5" width="7" height="7" fill="#000" />
      {arms.map((arm, index) => (
        <rect key={`f${index}`} x={arm.x} y={arm.y} width={arm.w} height={arm.h} fill="#9efa12" />
      ))}
      <rect x="30" y="30" width="4" height="4" fill="#9efa12" />
    </svg>
  );
}

interface SliderProps {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  unit: string;
  onChange: (value: number) => void;
}

function Slider({ id, label, value, min, max, unit, onChange }: SliderProps) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="flex items-baseline justify-between text-sm">
        <span className="font-semibold text-fg">{label}</span>
        <span className="font-mono text-lime">
          {Math.round(value)}
          {unit}
        </span>
      </span>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={1}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer"
      />
    </label>
  );
}

/** Demostración: saturación, Dark Boost, crosshair y comparar, sobre una escena propia. */
export function Demo() {
  const { t } = useLang();
  const [saturation, setSaturation] = useState(100);
  const [boost, setBoost] = useState(0);
  const [crosshair, setCrosshair] = useState(true);
  const [comparing, setComparing] = useState(false);
  const [touched, setTouched] = useState(false);
  const stage = useRef<HTMLDivElement>(null);

  // Hasta que la tocas, la demo se mueve sola (solo mientras se ve).
  useEffect(() => {
    if (touched || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const element = stage.current;
    if (!element) return;
    let frame = 0;
    let visible = false;
    let last = 0;
    const start = performance.now();
    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      if (!visible || now - last < 33) return;
      last = now;
      const phase = ((now - start) / 7000) * Math.PI * 2;
      setSaturation(100 + 95 * (0.5 - 0.5 * Math.cos(phase)));
      setBoost(70 * (0.5 - 0.5 * Math.cos(phase + Math.PI)));
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = Boolean(entry?.isIntersecting);
    });
    observer.observe(element);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [touched]);

  const touch = () => setTouched(true);
  const active = !comparing;
  const matrix = saturationMatrix(active ? saturation / 100 : 1);
  const exponent = active ? 1 - 0.6 * (boost / 100) : 1;
  const offset = active ? 0.035 * (boost / 100) : 0;

  return (
    <section id="demo" className="relative scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeader eyebrow={t.demo.eyebrow} title={t.demo.title} subtitle={t.demo.subtitle} />
      <Reveal className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[2rem] border border-line bg-panel shadow-[0_0_80px_rgb(158_250_18/0.08)]">
          <div ref={stage} className="relative aspect-video w-full select-none">
            <CityScene
              id="demo"
              filter="url(#vres-demo)"
              label={t.demo.scene}
              defs={
                <filter id="vres-demo" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
                  <feComponentTransfer>
                    <feFuncR type="gamma" amplitude={1} exponent={exponent} offset={offset} />
                    <feFuncG type="gamma" amplitude={1} exponent={exponent} offset={offset} />
                    <feFuncB type="gamma" amplitude={1} exponent={exponent} offset={offset} />
                  </feComponentTransfer>
                  <feColorMatrix type="matrix" values={matrix} />
                </filter>
              }
            />

            {crosshair && <CrosshairOverlay />}

            <div className="pointer-events-none absolute top-4 left-4 flex flex-col gap-1 font-mono text-[11px] tracking-wider text-lime uppercase sm:text-xs">
              <span className="rounded bg-ink/70 px-2 py-1 backdrop-blur">
                {t.demo.saturation} {comparing ? 100 : Math.round(saturation)}%
              </span>
              <span className="rounded bg-ink/70 px-2 py-1 backdrop-blur">
                {t.demo.darkBoost} {comparing ? 0 : Math.round(boost)}
              </span>
            </div>
            {comparing && (
              <span className="absolute top-4 right-4 rounded bg-ink/80 px-2 py-1 font-mono text-xs text-fg uppercase">
                Original
              </span>
            )}
          </div>

          <div className="grid gap-6 border-t border-line p-6 sm:p-8 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
            <Slider
              id="demo-saturation"
              label={t.demo.saturation}
              value={saturation}
              min={0}
              max={300}
              unit="%"
              onChange={(value) => {
                touch();
                setSaturation(value);
              }}
            />
            <Slider
              id="demo-boost"
              label={t.demo.darkBoost}
              value={boost}
              min={0}
              max={100}
              unit=""
              onChange={(value) => {
                touch();
                setBoost(value);
              }}
            />
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                aria-pressed={crosshair}
                onClick={() => {
                  touch();
                  setCrosshair(!crosshair);
                }}
                className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                  crosshair ? "border-lime/50 bg-lime/15 text-lime" : "border-line text-muted hover:text-fg"
                }`}
              >
                <Crosshair className="size-4" aria-hidden />
                {t.demo.crosshair}
              </button>
              <button
                type="button"
                onPointerDown={() => {
                  touch();
                  setComparing(true);
                }}
                onPointerUp={() => setComparing(false)}
                onPointerLeave={() => setComparing(false)}
                onPointerCancel={() => setComparing(false)}
                onKeyDown={(event) => {
                  if (event.key === " " || event.key === "Enter") setComparing(true);
                }}
                onKeyUp={() => setComparing(false)}
                className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm font-semibold text-fg transition hover:border-lime/50 active:bg-lime/15"
              >
                <Eye className="size-4" aria-hidden />
                {t.demo.compare}
              </button>
              <button
                type="button"
                onClick={() => {
                  touch();
                  setSaturation(100);
                  setBoost(0);
                }}
                aria-label={t.demo.reset}
                title={t.demo.reset}
                className="rounded-xl border border-line p-2.5 text-muted transition hover:text-fg"
              >
                <RotateCcw className="size-4" aria-hidden />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center justify-between gap-2 text-center text-xs text-muted sm:flex-row sm:text-left">
          <span className="text-lime/90">{t.demo.hint}</span>
          <span>{t.demo.disclaimer}</span>
        </div>
      </Reveal>
    </section>
  );
}
