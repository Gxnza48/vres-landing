import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { LANGS } from "../copy";
import { useLang } from "../lang";
import { DISCORD_URL, REPO_URL, useRelease, RELEASES_URL } from "../release";
import { DiscordIcon, GitHubIcon } from "./ui";

/** Barra superior: se vuelve sólida al bajar. */
export function Nav() {
  const { t, lang, setLang } = useLang();
  const release = useRelease();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fuera de la portada (por ejemplo en /miras), los enlaces vuelven a ella.
  const home = window.location.pathname === "/" ? "" : "/";
  const links = [
    { href: `${home}#potato`, label: t.nav.potato },
    { href: `${home}#features`, label: t.nav.features },
    { href: "/miras", label: t.nav.crosshairs },
    { href: `${home}#trust`, label: t.nav.trust },
    { href: `${home}#faq`, label: t.nav.faq },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href={home ? "/" : "#top"} className="flex shrink-0 items-center" aria-label="VRes">
          <img src="/logo.png" alt="VRes" className="h-7 w-auto" width={99} height={28} />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div
            role="group"
            aria-label={t.nav.language}
            className="hidden items-center rounded-lg border border-line p-0.5 sm:flex"
          >
            {LANGS.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={lang === item.id}
                onClick={() => setLang(item.id)}
                className={`rounded-md px-2 py-1 text-xs font-semibold transition-colors ${
                  lang === item.id ? "bg-lime text-ink" : "text-muted hover:text-fg"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Discord"
            className="hidden rounded-lg p-2 text-muted transition-colors hover:text-fg sm:block"
          >
            <DiscordIcon />
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden rounded-lg p-2 text-muted transition-colors hover:text-fg sm:block"
          >
            <GitHubIcon />
          </a>
          <a
            href={release?.url ?? RELEASES_URL}
            className="inline-flex items-center gap-2 rounded-xl bg-lime px-4 py-2 text-sm font-bold text-ink shadow-[0_0_24px_rgb(158_250_18/0.35)] transition hover:brightness-110"
          >
            <Download className="size-4" aria-hidden />
            {t.nav.download}
          </a>
          <button
            type="button"
            aria-label={t.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-muted hover:text-fg lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line px-5 pb-5 lg:hidden">
          <div className="flex flex-col py-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base text-fg"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {LANGS.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={lang === item.id}
                onClick={() => setLang(item.id)}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
                  lang === item.id ? "bg-lime text-ink" : "border border-line text-muted"
                }`}
              >
                {item.label}
              </button>
            ))}
            <a href={DISCORD_URL} target="_blank" rel="noreferrer" aria-label="Discord" className="ml-auto p-2 text-muted">
              <DiscordIcon />
            </a>
            <a href={REPO_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 text-muted">
              <GitHubIcon />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
