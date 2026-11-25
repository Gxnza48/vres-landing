import { SCENES, useScene } from "../scene-state";

interface ScenePickerProps {
  label: string;
  /** `column`: lista vertical (hero en pantallas grandes); `row`: fila. */
  layout: "column" | "row";
  className?: string;
}

/** Elegir el juego de fondo, con miniaturas. */
export function ScenePicker({ label, layout, className = "" }: ScenePickerProps) {
  const { scene, setScene } = useScene();
  const column = layout === "column";
  return (
    <div role="radiogroup" aria-label={label} className={`flex gap-2 ${column ? "flex-col" : "flex-row flex-wrap"} ${className}`}>
      <span className="font-mono text-[10px] font-semibold tracking-[0.3em] text-white/60 uppercase sm:text-[11px]">
        // {label}
      </span>
      <div className={`flex gap-2 ${column ? "flex-col" : "flex-row flex-wrap"}`}>
        {SCENES.map((item) => {
          const selected = item.id === scene.id;
          return (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => setScene(item.id)}
              onMouseEnter={() => {
                // Se adelanta la descarga de la imagen grande.
                const preload = new Image();
                preload.src = item.src;
              }}
              className={`cut-sm group flex items-center gap-3 border p-1.5 pr-3 text-left backdrop-blur transition ${
                selected
                  ? "border-lime bg-lime/15 text-lime shadow-[0_0_24px_rgb(158_250_18/0.35)]"
                  : "border-white/15 bg-black/50 text-white/80 hover:border-white/40 hover:text-white"
              }`}
            >
              <img
                src={item.thumb}
                alt=""
                width={64}
                height={36}
                className={`h-9 w-16 object-cover transition ${selected ? "" : "opacity-70 grayscale-[0.4] group-hover:opacity-100 group-hover:grayscale-0"}`}
              />
              <span className="font-display text-[11px] font-black tracking-wider whitespace-nowrap uppercase">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
