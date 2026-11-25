import { Check, Copy, Download } from "lucide-react";
import { useEffect, useState } from "react";

import type { Lang } from "../copy";
import { CROSSHAIRS, type CrosshairItem } from "../crosshairs-data";
import { useLang } from "../lang";
import { DISCORD_URL, RELEASES_URL, useRelease } from "../release";
import { CrosshairPreview } from "./CrosshairPreview";
import { DiscordIcon, Reveal } from "./ui";

const TEXT: Record<
  Lang,
  {
    title: string;
    eyebrow: string;
    subtitle: string;
    copy: string;
    copied: string;
    steps: string[];
    stepsTitle: string;
    shareTitle: string;
    shareText: string;
    discord: string;
    download: string;
    all: string;
    colors: Record<string, string>;
  }
> = {
  es: {
    title: "Miras para VRes",
    eyebrow: "Galería",
    subtitle:
      "Elige una mira, copia su código y pégalo en VRes. La galería vive acá para que la app siga liviana: no carga ninguna mira que no uses.",
    copy: "Copiar código",
    copied: "¡Copiado!",
    stepsTitle: "Cómo ponerla",
    steps: [
      "Copia el código de la mira que te guste.",
      "En VRes, abre Crosshair y baja hasta «Compartir el crosshair».",
      "Pega el código y toca Aplicar. También puedes guardarla con un nombre.",
      "¿Tienes una mira de VALORANT o CS2? Pega su código igual: VRes la traduce.",
    ],
    shareTitle: "¿Te armaste una mira?",
    shareText:
      "En VRes › Crosshair puedes crear la tuya parte por parte y copiar su código. Compártela en el Discord y las mejores entran a esta galería.",
    discord: "Compartir en el Discord",
    download: "Descargar VRes",
    all: "Todas",
    colors: { "#9EFA12": "Verde", "#00E5FF": "Cian", "#FF3DF5": "Magenta", "#FFE600": "Amarillo", "#FF2E2E": "Rojo", "#FFFFFF": "Blanco", "#B266FF": "Violeta" },
  },
  en: {
    title: "Crosshairs for VRes",
    eyebrow: "Gallery",
    subtitle:
      "Pick a crosshair, copy its code and paste it into VRes. The gallery lives here so the app stays light: it never loads crosshairs you don't use.",
    copy: "Copy code",
    copied: "Copied!",
    stepsTitle: "How to use it",
    steps: [
      "Copy the code of the crosshair you like.",
      "In VRes, open Crosshair and scroll to “Share the crosshair”.",
      "Paste the code and tap Apply. You can also save it with a name.",
      "Got a VALORANT or CS2 crosshair? Paste its code too: VRes translates it.",
    ],
    shareTitle: "Made your own crosshair?",
    shareText:
      "In VRes › Crosshair you can build yours part by part and copy its code. Share it on Discord and the best ones join this gallery.",
    discord: "Share on Discord",
    download: "Download VRes",
    all: "All",
    colors: { "#9EFA12": "Green", "#00E5FF": "Cyan", "#FF3DF5": "Magenta", "#FFE600": "Yellow", "#FF2E2E": "Red", "#FFFFFF": "White", "#B266FF": "Purple" },
  },
  pt: {
    title: "Miras para o VRes",
    eyebrow: "Galeria",
    subtitle:
      "Escolha uma mira, copie o código e cole no VRes. A galeria fica aqui para o app continuar leve: ele não carrega nenhuma mira que você não usa.",
    copy: "Copiar código",
    copied: "Copiado!",
    stepsTitle: "Como usar",
    steps: [
      "Copie o código da mira de que você gostar.",
      "No VRes, abra Crosshair e desça até «Compartilhar o crosshair».",
      "Cole o código e toque em Aplicar. Você também pode salvá-la com um nome.",
      "Tem uma mira do VALORANT ou do CS2? Cole o código também: o VRes traduz.",
    ],
    shareTitle: "Montou sua própria mira?",
    shareText:
      "Em VRes › Crosshair você cria a sua parte por parte e copia o código. Compartilhe no Discord e as melhores entram nesta galeria.",
    discord: "Compartilhar no Discord",
    download: "Baixar o VRes",
    all: "Todas",
    colors: { "#9EFA12": "Verde", "#00E5FF": "Ciano", "#FF3DF5": "Magenta", "#FFE600": "Amarelo", "#FF2E2E": "Vermelho", "#FFFFFF": "Branco", "#B266FF": "Roxo" },
  },
};

function CrosshairCard({ item, lang }: { item: CrosshairItem; lang: Lang }) {
  const text = TEXT[lang];
  const [copied, setCopied] = useState(false);

  const copy = () => {
    void navigator.clipboard.writeText(item.code).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <li className="group flex flex-col items-center gap-3 rounded-2xl border border-line bg-white/[0.02] p-4 transition-colors hover:border-lime/50">
      <CrosshairPreview shape={item.shape} size={112} zoom={3} label={item.name[lang]} />
      <span className="text-sm font-semibold text-fg">{item.name[lang]}</span>
      <code className="w-full truncate rounded-lg border border-line bg-ink px-2 py-1.5 text-center font-mono text-[11px] text-muted select-all">
        {item.code}
      </code>
      <button
        type="button"
        onClick={copy}
        className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-bold transition ${
          copied ? "bg-lime text-ink" : "border border-line text-fg hover:border-lime hover:text-lime"
        }`}
      >
        {copied ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />}
        {copied ? text.copied : text.copy}
      </button>
    </li>
  );
}

/** /miras: galería de crosshairs con su código para pegar en VRes. */
export function CrosshairsPage() {
  const { lang } = useLang();
  const text = TEXT[lang];
  const release = useRelease();
  const [color, setColor] = useState<string | null>(null);

  useEffect(() => {
    document.title = `${text.title} — VRes`;
  }, [text.title]);

  const colors = [...new Set(CROSSHAIRS.map((item) => item.shape.color.toUpperCase()))];
  const shown = color ? CROSSHAIRS.filter((item) => item.shape.color.toUpperCase() === color) : CROSSHAIRS;

  return (
    <section id="top" className="relative px-5 pt-32 pb-24 sm:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgb(158_250_18/0.12),transparent_65%)]" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 font-mono text-xs font-bold tracking-[0.3em] text-lime uppercase">
            {"// "}
            {text.eyebrow}
          </p>
          <h1 className="font-display text-4xl font-black tracking-tight text-fg sm:text-6xl">{text.title}</h1>
          <p className="mt-5 text-base text-muted sm:text-lg">{text.subtitle}</p>
        </Reveal>

        <Reveal className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            aria-pressed={color === null}
            onClick={() => setColor(null)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              color === null ? "bg-lime text-ink" : "border border-line text-muted hover:text-fg"
            }`}
          >
            {text.all}
          </button>
          {colors.map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={color === value}
              onClick={() => setColor(value)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                color === value ? "bg-lime text-ink" : "border border-line text-muted hover:text-fg"
              }`}
            >
              <span aria-hidden className="size-2.5 rounded-full" style={{ background: value }} />
              {text.colors[value] ?? value}
            </button>
          ))}
        </Reveal>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {shown.map((item) => (
            <CrosshairCard key={item.id} item={item} lang={lang} />
          ))}
        </ul>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-line bg-white/[0.02] p-8">
            <h2 className="font-display text-xl font-black text-fg">{text.stepsTitle}</h2>
            <ol className="mt-5 flex flex-col gap-4">
              {text.steps.map((step, index) => (
                <li key={step} className="flex items-start gap-4 text-sm text-muted">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-lime font-mono text-xs font-black text-ink">
                    {index + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal className="flex flex-col justify-between gap-6 rounded-3xl border border-lime/30 bg-lime/[0.04] p-8">
            <div>
              <h2 className="font-display text-xl font-black text-fg">{text.shareTitle}</h2>
              <p className="mt-3 text-sm text-muted">{text.shareText}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#5865f2] px-4 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
              >
                <DiscordIcon />
                {text.discord}
              </a>
              <a
                href={release?.url ?? RELEASES_URL}
                className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm font-bold text-fg transition hover:border-lime hover:text-lime"
              >
                <Download className="size-4" aria-hidden />
                {text.download}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
