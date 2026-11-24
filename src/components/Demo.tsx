import { Crosshair, Eye, RotateCcw } from "lucide-react";
import { memo, useEffect, useRef, useState } from "react";

import { useLang } from "../lang";
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

/** Generador fijo (siempre las mismas estrellas y ventanas). */
function seeded(seed: number) {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

const random = seeded(7);
const STARS = Array.from({ length: 70 }, () => ({
  x: random() * 1600,
  y: random() * 420,
  r: 0.8 + random() * 1.8,
  o: 0.3 + random() * 0.6,
}));
const SKYLINE = Array.from({ length: 26 }, (_, index) => {
  const width = 40 + random() * 70;
  const height = 90 + random() * 210;
  return { x: 330 + index * 46 + random() * 10, width, height };
});
const WINDOWS = SKYLINE.flatMap((building) =>
  Array.from({ length: Math.floor(building.height / 34) }, (_, row) => ({
    x: building.x + 8 + random() * (building.width - 22),
    y: 600 - building.height + 14 + row * 30,
    cyan: random() > 0.5,
    on: random() > 0.45,
  })),
).filter((window) => window.on);

/** La escena: ciudad de neón al atardecer, con alguien escondido en la sombra. */
const SceneArt = memo(function SceneArt() {
  const floorLines = Array.from({ length: 13 }, (_, index) => 600 + (index * index * 300) / 144);
  const rays = Array.from({ length: 31 }, (_, index) => -1600 + index * 160);
  return (
    <>
      <rect width="1600" height="900" fill="url(#demo-sky)" />
      {STARS.map((star, index) => (
        <circle key={index} cx={star.x} cy={star.y} r={star.r} fill="#ffffff" opacity={star.o} />
      ))}
      <circle cx="800" cy="600" r="250" fill="url(#demo-sun)" mask="url(#demo-sun-stripes)" />
      <polygon
        points="0,600 140,470 260,520 420,400 560,500 700,430 860,520 1000,410 1160,500 1300,420 1460,510 1600,450 1600,600"
        fill="#3a1463"
        opacity="0.9"
      />
      {SKYLINE.map((building, index) => (
        <rect
          key={index}
          x={building.x}
          y={600 - building.height}
          width={building.width}
          height={building.height}
          fill="#180a31"
        />
      ))}
      {WINDOWS.map((window, index) => (
        <rect
          key={index}
          x={window.x}
          y={window.y}
          width="9"
          height="12"
          fill={window.cyan ? "#34f5ff" : "#ff3fd2"}
          opacity="0.85"
        />
      ))}
      <rect y="596" width="1600" height="8" fill="#ff3fd2" opacity="0.8" />
      <rect y="600" width="1600" height="300" fill="url(#demo-floor)" />
      <g stroke="#ff3fd2" strokeWidth="2" opacity="0.6">
        {floorLines.map((y) => (
          <line key={y} x1="0" y1={y} x2="1600" y2={y} />
        ))}
        {rays.map((x) => (
          <line key={x} x1="800" y1="600" x2={x} y2="900" />
        ))}
      </g>

      {/* Edificio de la derecha con su cartel de neón. */}
      <rect x="1130" y="170" width="470" height="730" fill="#120722" />
      <rect x="1180" y="250" width="330" height="96" rx="12" fill="none" stroke="#34f5ff" strokeWidth="5" />
      <text
        x="1345"
        y="318"
        textAnchor="middle"
        fontFamily="Orbitron, sans-serif"
        fontWeight="900"
        fontSize="58"
        fill="#34f5ff"
        letterSpacing="8"
      >
        ARENA
      </text>
      <rect x="1180" y="400" width="140" height="190" fill="#1b0b33" />
      <rect x="1360" y="400" width="140" height="190" fill="#1b0b33" />

      {/* Callejón en sombra: la figura casi no se ve sin Dark Boost. */}
      <polygon points="0,0 430,60 430,900 0,900" fill="#0a0610" />
      <rect x="165" y="430" width="140" height="330" fill="#030204" />
      <g fill="#0a070d">
        <circle cx="235" cy="503" r="33" />
        <path d="M168 760 C170 640 190 560 235 552 C280 560 300 640 302 760 Z" />
      </g>
      <rect x="216" y="495" width="38" height="7" rx="3" fill="#100b16" />
      <rect x="0" y="760" width="430" height="140" fill="#07040b" />
    </>
  );
});

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
            <svg
              viewBox="0 0 1600 900"
              preserveAspectRatio="xMidYMid slice"
              role="img"
              aria-label={t.demo.scene}
              className="absolute inset-0 h-full w-full"
            >
              <defs>
                <linearGradient id="demo-sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#140a35" />
                  <stop offset="0.25" stopColor="#3d1670" />
                  <stop offset="0.42" stopColor="#a8317f" />
                  <stop offset="0.52" stopColor="#f0566f" />
                  <stop offset="0.62" stopColor="#ff9a5a" />
                  <stop offset="1" stopColor="#ffc06b" />
                </linearGradient>
                <linearGradient id="demo-sun" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#ffe680" />
                  <stop offset="0.55" stopColor="#ff8a5c" />
                  <stop offset="1" stopColor="#ff3f8e" />
                </linearGradient>
                <linearGradient id="demo-floor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#24073f" />
                  <stop offset="1" stopColor="#050109" />
                </linearGradient>
                <mask id="demo-sun-stripes">
                  <rect width="1600" height="900" fill="#fff" />
                  {[480, 515, 545, 572, 596].map((y, index) => (
                    <rect key={y} x="0" y={y} width="1600" height={4 + index * 3} fill="#000" />
                  ))}
                </mask>
                <filter id="vres-demo" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
                  <feComponentTransfer>
                    <feFuncR type="gamma" amplitude={1} exponent={exponent} offset={offset} />
                    <feFuncG type="gamma" amplitude={1} exponent={exponent} offset={offset} />
                    <feFuncB type="gamma" amplitude={1} exponent={exponent} offset={offset} />
                  </feComponentTransfer>
                  <feColorMatrix type="matrix" values={matrix} />
                </filter>
              </defs>
              <g filter="url(#vres-demo)">
                <SceneArt />
              </g>
            </svg>

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
