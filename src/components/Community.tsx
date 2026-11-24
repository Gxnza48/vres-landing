import { ArrowRight } from "lucide-react";

import { useLang } from "../lang";
import { DISCORD_URL, REPO_URL } from "../release";
import { DiscordIcon, GitHubIcon, Reveal } from "./ui";

/** Llamado a sumarse al Discord. */
export function Community() {
  const { t } = useLang();
  return (
    <section className="relative px-5 py-24 sm:px-8">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-discord/40 bg-gradient-to-br from-[#161a4d] via-[#0c0d24] to-ink px-8 py-16 text-center sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-discord/40 blur-[120px]"
          />
          <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative">
            <span className="mx-auto mb-6 inline-flex size-20 items-center justify-center rounded-3xl bg-discord text-white shadow-[0_0_60px_rgb(88_101_242/0.6)]">
              <DiscordIcon className="size-10" />
            </span>
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-[#a5abff] uppercase">
              {t.community.eyebrow}
            </p>
            <h2 className="font-display text-3xl font-black tracking-tight sm:text-5xl">{t.community.title}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-[#c9ccf5] sm:text-lg">{t.community.text}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-2xl bg-discord px-7 py-4 text-lg font-bold text-white shadow-[0_0_40px_rgb(88_101_242/0.5)] transition hover:-translate-y-0.5 hover:brightness-110"
              >
                <DiscordIcon className="size-5" />
                {t.community.cta}
                <ArrowRight className="size-5 transition group-hover:translate-x-1" aria-hidden />
              </a>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/15 px-7 py-4 text-lg font-semibold text-fg transition hover:bg-white/5"
              >
                <GitHubIcon className="size-5" />
                {t.community.github}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
