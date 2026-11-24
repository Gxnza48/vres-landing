import { memo, type ReactNode } from "react";

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
const FLOOR_LINES = Array.from({ length: 13 }, (_, index) => 600 + (index * index * 300) / 144);
const RAYS = Array.from({ length: 31 }, (_, index) => -1600 + index * 160);

/** La escena: ciudad de neón al atardecer, con alguien escondido en la sombra. */
const SceneArt = memo(function SceneArt({ id }: { id: string }) {
  return (
    <>
      <rect width="1600" height="900" fill={`url(#${id}-sky)`} />
      {STARS.map((star, index) => (
        <circle key={index} cx={star.x} cy={star.y} r={star.r} fill="#ffffff" opacity={star.o} />
      ))}
      <circle cx="800" cy="600" r="250" fill={`url(#${id}-sun)`} mask={`url(#${id}-stripes)`} />
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
      <rect y="600" width="1600" height="300" fill={`url(#${id}-floor)`} />
      <g stroke="#ff3fd2" strokeWidth="2" opacity="0.6">
        {FLOOR_LINES.map((y) => (
          <line key={y} x1="0" y1={y} x2="1600" y2={y} />
        ))}
        {RAYS.map((x) => (
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

interface CitySceneProps {
  /** Prefijo único de los degradados (cada copia de la escena necesita el suyo). */
  id: string;
  /** Filtro SVG a aplicar (`url(#...)`), definido en `defs`. */
  filter?: string;
  defs?: ReactNode;
  label?: string;
  className?: string;
}

/** La escena completa, lista para poner de fondo (cubre su contenedor). */
export function CityScene({ id, filter, defs, label, className = "" }: CitySceneProps) {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={`absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#140a35" />
          <stop offset="0.25" stopColor="#3d1670" />
          <stop offset="0.42" stopColor="#a8317f" />
          <stop offset="0.52" stopColor="#f0566f" />
          <stop offset="0.62" stopColor="#ff9a5a" />
          <stop offset="1" stopColor="#ffc06b" />
        </linearGradient>
        <linearGradient id={`${id}-sun`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe680" />
          <stop offset="0.55" stopColor="#ff8a5c" />
          <stop offset="1" stopColor="#ff3f8e" />
        </linearGradient>
        <linearGradient id={`${id}-floor`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#24073f" />
          <stop offset="1" stopColor="#050109" />
        </linearGradient>
        <mask id={`${id}-stripes`}>
          <rect width="1600" height="900" fill="#fff" />
          {[480, 515, 545, 572, 596].map((y, index) => (
            <rect key={y} x="0" y={y} width="1600" height={4 + index * 3} fill="#000" />
          ))}
        </mask>
        {defs}
      </defs>
      <g filter={filter}>
        <SceneArt id={id} />
      </g>
    </svg>
  );
}
