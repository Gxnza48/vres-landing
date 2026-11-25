import { useEffect, useRef } from "react";

import type { CrosshairShape } from "../crosshairs-data";

/** Grosor par o impar alineado al píxel (como el renderer de VRes). */
function span(thickness: number): [number, number] {
  const t = Math.max(1, Math.round(thickness));
  return t % 2 === 1 ? [-t / 2, t / 2] : [-t / 2 + 0.5, t / 2 + 0.5];
}

interface Parts {
  rects: [number, number, number, number][];
  dot: [number, number] | null;
  ring: [number, number] | null;
}

function parts(shape: CrosshairShape, scale: number): Parts {
  const px = (value: number) => Math.round(value * scale);
  const rects: Parts["rects"] = [];
  const { arms } = shape;
  if (arms.enabled && px(arms.length) > 0) {
    const [a, b] = span(px(arms.thickness));
    const near = 0.5 + px(arms.gap);
    const far = near + px(arms.length);
    if (arms.right) rects.push([near, a, far, b]);
    if (arms.left) rects.push([-far, a, -near, b]);
    if (arms.top) rects.push([a, -far, b, -near]);
    if (arms.bottom) rects.push([a, near, b, far]);
  }
  let dot: Parts["dot"] = null;
  if (shape.dot.enabled) {
    const size = Math.max(1, px(shape.dot.size));
    const [a, b] = span(size);
    if (shape.dot.round) dot = [(a + b) / 2, size / 2];
    else rects.push([a, a, b, b]);
  }
  const ring: Parts["ring"] = shape.ring.enabled
    ? [Math.max(1, px(shape.ring.radius)), Math.max(1, px(shape.ring.thickness))]
    : null;
  return { rects, dot, ring };
}

function rgba(hex: string, opacity: number): string {
  const value = Number.parseInt(hex.slice(1), 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgb(${r} ${g} ${b} / ${Math.min(Math.max(opacity, 0), 100) / 100})`;
}

/** Dibuja las partes, agrandadas `grow` píxeles (para el contorno). */
function paint(ctx: CanvasRenderingContext2D, p: Parts, grow: number) {
  for (const [l, t, r, b] of p.rects) ctx.fillRect(l - grow, t - grow, r - l + grow * 2, b - t + grow * 2);
  if (p.dot) {
    ctx.beginPath();
    ctx.arc(p.dot[0], p.dot[0], p.dot[1] + grow, 0, Math.PI * 2);
    ctx.fill();
  }
  if (p.ring) {
    ctx.beginPath();
    ctx.lineWidth = p.ring[1] + grow * 2;
    ctx.arc(0.5, 0.5, p.ring[0], 0, Math.PI * 2);
    ctx.stroke();
  }
}

/**
 * Vista previa de un crosshair: se dibuja a tamaño real y se agranda sin
 * suavizar, así se ve cada píxel como en el juego.
 */
export function CrosshairPreview({
  shape,
  size = 96,
  zoom = 3,
  label,
}: {
  shape: CrosshairShape;
  size?: number;
  zoom?: number;
  label: string;
}) {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const target = canvas.current;
    if (!target) return;
    const ratio = window.devicePixelRatio || 1;
    target.width = Math.round(size * ratio);
    target.height = Math.round(size * ratio);
    // Las miras grandes se agrandan menos, para que entren enteras.
    const reach =
      Math.max(
        shape.arms.enabled ? shape.arms.gap + shape.arms.length : 0,
        shape.ring.enabled ? shape.ring.radius + shape.ring.thickness : 0,
        shape.dot.enabled ? shape.dot.size : 0,
      ) *
        (shape.scale / 100) +
      (shape.outline.enabled ? shape.outline.thickness : 0) +
      2;
    const fit = Math.max(1, Math.min(zoom, Math.floor(size / (reach * 2))));
    const real = Math.ceil(size / fit);
    const small = document.createElement("canvas");
    small.width = real;
    small.height = real;
    const ctx = small.getContext("2d");
    const out = target.getContext("2d");
    if (!ctx || !out) return;

    const p = parts(shape, shape.scale / 100);
    ctx.translate(Math.floor(real / 2), Math.floor(real / 2));
    ctx.rotate((shape.rotation * Math.PI) / 180);
    const outline = shape.outline.enabled ? Math.max(1, Math.round(shape.outline.thickness)) : 0;
    if (outline > 0) {
      ctx.fillStyle = ctx.strokeStyle = rgba(shape.outline.color, shape.outline.opacity);
      paint(ctx, p, outline);
      // El relleno reemplaza al contorno (no se mezcla con él).
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = ctx.strokeStyle = "black";
      paint(ctx, p, 0);
      ctx.globalCompositeOperation = "source-over";
    }
    ctx.fillStyle = ctx.strokeStyle = rgba(shape.color, shape.opacity);
    paint(ctx, p, 0);

    out.imageSmoothingEnabled = false;
    out.clearRect(0, 0, target.width, target.height);
    out.drawImage(small, 0, 0, real * fit * ratio, real * fit * ratio);
  }, [shape, size, zoom]);

  return (
    <canvas
      ref={canvas}
      role="img"
      aria-label={label}
      style={{ width: size, height: size }}
      className="rounded-xl bg-[radial-gradient(circle,rgb(255_255_255/0.06),transparent_70%)]"
    />
  );
}
