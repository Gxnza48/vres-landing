import { AntiCheat } from "./components/AntiCheat";
import { Community } from "./components/Community";
import { CrosshairsPage } from "./components/CrosshairsPage";
import { Demo } from "./components/Demo";
import { Faq } from "./components/Faq";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Games } from "./components/Games";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Nav } from "./components/Nav";
import { Trust } from "./components/Trust";
import { VirusTotal } from "./components/VirusTotal";
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
        <Demo />
        <Features />
        <Games />
        <AntiCheat />
        <HowItWorks />
        <Trust />
        <VirusTotal />
        <Faq />
        <Community />
      </main>
      <Footer />
      </SceneProvider>
    </LangProvider>
  );
}
