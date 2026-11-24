import { AntiCheat } from "./components/AntiCheat";
import { Community } from "./components/Community";
import { Demo } from "./components/Demo";
import { Faq } from "./components/Faq";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Games } from "./components/Games";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Nav } from "./components/Nav";
import { Trust } from "./components/Trust";
import { LangProvider } from "./lang";

export function App() {
  return (
    <LangProvider>
      <Nav />
      <main>
        <Hero />
        <Demo />
        <Features />
        <Games />
        <AntiCheat />
        <HowItWorks />
        <Trust />
        <Faq />
        <Community />
      </main>
      <Footer />
    </LangProvider>
  );
}
