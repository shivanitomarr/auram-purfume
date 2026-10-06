import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Crown, Gift, Infinity as InfinityIcon, Package, RefreshCcw, Sparkles } from "lucide-react";
import { EASE, Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

type Tier = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  compareAt?: number;
  image?: string;
  popular?: boolean;
  icon: typeof Package;
  cta: string;
  features: string[];
};

const TIERS: Tier[] = [
  {
    id: "discovery",
    name: "The Discovery Ritual",
    tagline: "Taste all five moods first",
    price: 59,
    image: "/images/discovery-set.jpg",
    icon: Sparkles,
    cta: "Begin the ritual",
    features: [
      "Five scents × 2ml crystal vials",
      "Full $59 credited to your flacon",
      "Note-by-note scent atlas & layering guide",
      "Free insured worldwide shipping",
    ],
  },
  {
    id: "signature",
    name: "Signature Flacon",
    tagline: "Your one true scent",
    price: 145,
    compareAt: 185,
    popular: true,
    icon: Crown,
    cta: "Claim your flacon",
    features: [
      "One 12ml hand-cut crystal flacon",
      "Any scent from the collection",
      "Numbered certificate of authenticity",
      "Gilded gift coffret & silk pouch",
      "30-day Sillage Guarantee",
    ],
  },
  {
    id: "vault",
    name: "The Aurum Vault",
    tagline: "The complete wardrobe",
    price: 420,
    compareAt: 620,
    icon: Gift,
    cta: "Open the vault",
    features: [
      "All four 12ml flacons, matched batch",
      "Walnut & brass keepsake vault",
      "Lifetime 20% off refills",
      "Private concierge refill reminders",
      "Personalised engraving on each cap",
    ],
  },
];

export default function Pricing({ onAdd }: { onAdd: (name: string) => void }) {
  const [circle, setCircle] = useState(false);
  const [added, setAdded] = useState<string | null>(null);

  const priceOf = (t: Tier) =>
    circle && t.id !== "discovery" ? Math.round(t.price * 0.85) : t.price;

  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-24 sm:py-32"
      aria-label="Pricing and offers"
    >
      {/* ambient smoke */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <img
          src="/images/gold-smoke.jpg"
          alt=""
          className="h-full w-full object-cover opacity-[0.16]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Begin Tonight"
          title={
            <>
              Choose how the story <em className="gold-text font-semibold italic">begins.</em>
            </>
          }
          copy="Every order ships insured within 24 hours, gift-wrapped in black and gold — and every drop is covered by the 30-day Sillage Guarantee."
        />

        {/* toggle */}
        <Reveal className="mt-10 flex justify-center">
          <div
            className="glass relative flex items-center rounded-full p-1.5"
            role="group"
            aria-label="Purchase type"
          >
            {[
              { id: false, label: "One-time", icon: Package },
              { id: true, label: "Scent Circle · save 15%", icon: RefreshCcw },
            ].map((opt) => (
              <button
                key={String(opt.id)}
                type="button"
                onClick={() => setCircle(opt.id)}
                aria-pressed={circle === opt.id}
                className={cn(
                  "relative z-10 flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold tracking-wide transition-colors duration-400 sm:text-[13px]",
                  circle === opt.id ? "text-ink" : "text-cream/60 hover:text-cream"
                )}
              >
                {circle === opt.id && (
                  <motion.span
                    layoutId="toggle-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-gold to-gold-2"
                    transition={{ duration: 0.45, ease: EASE }}
                  />
                )}
                <opt.icon className="h-3.5 w-3.5" />
                {opt.label}
              </button>
            ))}
          </div>
        </Reveal>
        <AnimatePresence>
          {circle && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="mt-4 text-center text-xs text-gold-2/90"
            >
              Scent Circle: fresh flacon every 3 months, pause or cancel anytime.
            </motion.p>
          )}
        </AnimatePresence>

        {/* Atmospheric Tiers */}
        <div className="mt-14 grid items-stretch gap-12 lg:mt-32 lg:grid-cols-3 lg:gap-8">
          {TIERS.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.15} className="h-full">
              <article className="relative flex h-full flex-col p-4" aria-label={`${t.name} plan`}>
                {t.popular && (
                  <div className="absolute -top-12 left-4 flex items-center gap-3">
                    <span className="h-px w-10 bg-gold/50" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-gold">Most Reserved</span>
                  </div>
                )}

                {t.image && (
                  <div className="relative mb-10 overflow-hidden rounded-sm grayscale-[0.5] transition-all duration-700 hover:grayscale-0">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="aspect-[4/5] w-full object-cover sm:aspect-[16/9] lg:aspect-[4/5]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-[1.8rem] font-medium leading-tight text-gold-light">
                    {t.name}
                  </h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold/40">{t.tagline}</p>
                </div>

                <div className="mt-6 flex items-baseline gap-4">
                  <span className="font-display text-4xl font-semibold text-gold-light">${priceOf(t)}</span>
                  {(t.compareAt || (circle && t.id !== "discovery")) && (
                    <span className="text-sm font-semibold text-gold/20 line-through">
                      ${circle && t.id !== "discovery" ? t.price : t.compareAt}
                    </span>
                  )}
                </div>

                <ul className="mt-8 flex-1 space-y-4 border-t border-gold/10 pt-8">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-4 text-[12px] leading-relaxed text-gold-light/50">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold/40" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => {
                    onAdd(t.name);
                    setAdded(t.id);
                    setTimeout(() => setAdded(null), 1800);
                  }}
                  className={cn(
                    "mt-10 inline-flex w-full items-center justify-center gap-3 rounded-none border-b border-gold/20 py-4 text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-700 hover:border-gold hover:text-gold",
                    added === t.id ? "text-emerald-400 border-emerald-400" : "text-gold/60"
                  )}
                >
                  {added === t.id ? "Reserved" : t.cta}
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-xs text-cream/45">
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-gold" /> 30-day Sillage Guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <InfinityIcon className="h-3.5 w-3.5 text-gold" /> Batch numbered & certified
            </span>
            <span className="flex items-center gap-1.5">
              <Package className="h-3.5 w-3.5 text-gold" /> Free shipping over $95
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
