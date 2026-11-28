import { CrosshairsPage } from "./components/CrosshairsPage";
import { Faq } from "./components/Faq";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Partner } from "./components/Partner";
import { Potato } from "./components/Potato";
import { Trust } from "./components/Trust";
import { LangProvider } from "./lang";
import { SceneProvider } from "./scene-state";

/** La galería de miras vive en /miras (misma app, sin recargar la portada). */
const isCrosshairs = () => window.location.pathname.replace(/\/+$/, "") === "/miras";

export function App() {
  if (isCrosshairs()) {
    return (
      <LangProvider>
        <Nav />
        <main>
          <CrosshairsPage />
        </main>
        <Footer />
      </LangProvider>
    );
  }
  return (
    <LangProvider>
      <SceneProvider>
      <Nav />
      <main>
        <Hero />
        <Potato />
        <Features />
        <Partner />
        <Trust />
        <Faq />
      </main>
      <Footer />
      </SceneProvider>
    </LangProvider>
  );
}
