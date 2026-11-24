import { useLang } from "../lang";
import { CHANGELOG_URL, DISCORD_URL, RELEASES_URL, REPO_URL } from "../release";
import { DiscordIcon, GitHubIcon } from "./ui";

/** Pie: marca, enlaces y descargo. */
export function Footer() {
  const { t } = useLang();
  const links = [
    { href: RELEASES_URL, label: t.footer.releases },
    { href: CHANGELOG_URL, label: t.footer.changelog },
    { href: REPO_URL, label: t.footer.github },
    { href: DISCORD_URL, label: t.footer.discord },
  ];
  return (
    <footer className="border-t border-line px-5 pt-14 pb-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <img src="/logo.png" alt="VRes" className="h-8 w-auto" width={113} height={32} loading="lazy" />
          <p className="mt-4 text-sm text-muted">{t.footer.tagline}</p>
          <div className="mt-5 flex gap-2">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
              className="rounded-xl border border-line p-2.5 text-muted transition hover:border-discord/60 hover:text-fg"
            >
              <DiscordIcon />
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-xl border border-line p-2.5 text-muted transition hover:border-lime/50 hover:text-fg"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
        <nav className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition hover:text-lime"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-line pt-6 text-xs text-muted md:flex-row md:justify-between">
        <span>© {new Date().getFullYear()} VRes · {t.footer.license}</span>
        <span className="max-w-xl md:text-right">{t.footer.disclaimer}</span>
      </div>
    </footer>
  );
}
