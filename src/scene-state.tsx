import { createContext, useContext, useState, type ReactNode } from "react";

/** Capturas de juegos para el hero (de sus respectivos dueños). */
export interface Scene {
  id: "fortnite" | "valorant" | "cs2" | "robrun";
  name: string;
  src: string;
  thumb: string;
  /** Encuadre en el hero (`object-position`). */
  position: string;
}

export const SCENES: Scene[] = [
  { id: "fortnite", name: "Fortnite", src: "/scenes/fortnite.jpg", thumb: "/scenes/fortnite-thumb.jpg", position: "50% 45%" },
  { id: "valorant", name: "VALORANT", src: "/scenes/valorant.jpg", thumb: "/scenes/valorant-thumb.jpg", position: "60% 40%" },
  { id: "cs2", name: "CS2", src: "/scenes/cs2.jpg", thumb: "/scenes/cs2-thumb.jpg", position: "62% 50%" },
  { id: "robrun", name: "ROB RUN", src: "/scenes/robrun.jpg", thumb: "/scenes/robrun-thumb.jpg", position: "55% 50%" },
];

interface SceneContext {
  scene: Scene;
  setScene: (id: Scene["id"]) => void;
}

const Context = createContext<SceneContext | null>(null);

/** El juego elegido en el hero. */
export function SceneProvider({ children }: { children: ReactNode }) {
  const [id, setId] = useState<Scene["id"]>("fortnite");
  const scene = SCENES.find((item) => item.id === id) ?? SCENES[0];
  return <Context.Provider value={{ scene, setScene: setId }}>{children}</Context.Provider>;
}

export function useScene(): SceneContext {
  const value = useContext(Context);
  if (!value) throw new Error("useScene fuera de SceneProvider");
  return value;
}
