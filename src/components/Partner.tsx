import { ArrowUpRight, BadgeCheck } from "lucide-react";

import { useLang } from "../lang";
import { PARTNER_ROBRUN_DISCORD_URL } from "../release";
import { DiscordIcon, Reveal } from "./ui";

/** Banner del servidor partner: ROB RUN LATAM. */
export function Partner() {
  const { t } = useLang();
  return (
    <section id="partner" className="relative scroll-mt-20 px-5 py-16 sm:px-8">
      <Reveal className="mx-auto max-w-6xl">
        <a
          href={PARTNER_ROBRUN_DISCORD_URL}
          target="_blank"
          rel="noreferrer"
          className="partner-sweep group relative block overflow-hidden rounded-[2rem] border border-[#f5c542]/40 shadow-[0_0_60px_rgb(245_197_66/0.15)] transition hover:border-[#f5c542]/80"
        >
          <img
            src="/partners/robrun-latam.jpg"
            alt="ROB RUN LATAM"
            loading="lazy"
            className="absolute inset-0 size-full object-cover object-[50%_40%] transition duration-700 group-hover:scale-[1.03]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10 sm:bg-gradient-to-r sm:from-black/90 sm:via-black/50 sm:to-transparent"
          />
          <div className="relative flex min-h-72 flex-col justify-end gap-6 p-7 sm:min-h-80 sm:flex-row sm:items-end sm:justify-between sm:p-10">
            <div className="max-w-xl">
              <p className="partner-gold flex items-center gap-2 font-display text-2xl font-black tracking-[0.2em] uppercase sm:text-3xl">
                <BadgeCheck className="size-7 shrink-0 text-[#f5c542]" aria-hidden />
                {t.partner.badge}
              </p>
              <h2 className="mt-3 font-display text-xl font-black tracking-wide uppercase sm:text-2xl">
                {t.partner.name}
              </h2>
              <p className="mt-2 text-sm text-white/80 sm:text-base">{t.partner.text}</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-3 self-start rounded-2xl bg-discord px-6 py-3.5 text-base font-bold text-white shadow-[0_0_40px_rgb(88_101_242/0.5)] transition group-hover:-translate-y-0.5 group-hover:brightness-110 sm:self-auto">
              <DiscordIcon className="size-5" />
              {t.partner.cta}
              <ArrowUpRight className="size-5" aria-hidden />
            </span>
          </div>
        </a>
      </Reveal>
    </section>
  );
}
