import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ShoppingBag } from "lucide-react";
import { PRODUCTS, type Product } from "../data";
import { EASE, Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";
import BottleScene from "./BottleScene";

function NoteRow({ label, notes }: { label: string; notes: string[] }) {
  return (
    <div className="flex items-start gap-4">
      <span className="w-12 shrink-0 pt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-gold/60">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {notes.map((n) => (
          <span
            key={n}
            className="rounded-full border border-gold/15 bg-cream/[0.03] px-3.5 py-1.5 text-xs font-medium text-cream/75 transition-colors duration-300 hover:border-gold/40 hover:text-cream"
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

function Intensity({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-2" aria-label={`Sillage intensity ${level} of 5`}>
      <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold/60">Sillage</span>
      <span className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              i < level ? "w-5 bg-gradient-to-r from-gold to-gold-2" : "w-2.5 bg-cream/12"
            )}
          />
        ))}
      </span>
    </div>
  );
}

function AddButton({ product, onAdd }: { product: Product; onAdd: (p: Product) => void }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        onAdd(product);
        setDone(true);
        setTimeout(() => setDone(false), 1800);
      }}
      className={cn(
        "group relative inline-flex min-w-[190px] items-center justify-center gap-2.5 overflow-hidden rounded-full px-8 py-4 text-sm font-bold tracking-wide transition-all duration-500",
        done ? "bg-emerald-400/90 text-ink" : "btn-gold"
      )}
      aria-live="polite"
    >
      <AnimatePresence mode="wait" initial={false}>
        {done ? (
          <motion.span
            key="added"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-2"
          >
            <Check className="h-4 w-4" strokeWidth={3} /> Added to Bag
          </motion.span>
        ) : (
          <motion.span
            key="add"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-2.5"
          >
            <ShoppingBag className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
            Add to Bag — ${product.price}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function Collection({ onAdd }: { onAdd: (p: Product) => void }) {
  const [idx, setIdx] = useState(0);
  const p = PRODUCTS[idx];

  useEffect(() => {
    PRODUCTS.forEach((pr) => {
      const img = new Image();
      img.src = pr.image;
    });
  }, []);

  const go = (n: number) => {
    setIdx((n + PRODUCTS.length) % PRODUCTS.length);
  };
  const step = (d: number) => {
    setIdx((i) => (i + d + PRODUCTS.length) % PRODUCTS.length);
  };

  return (
    <section
      id="collection"
      className="relative overflow-hidden py-24 sm:py-32"
      aria-label="The attar collection"
    >
      {/* refined shadow glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-colors duration-1000"
        style={{
          background: `radial-gradient(1000px 600px at 25% 50%, ${p.hue}08, transparent 80%)`,
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Maison Portfolio"
          title={
            <>
              Rare Extraits. <em className="gold-text font-semibold italic">Enduring Sillage.</em>
            </>
          }
          copy="Four olfactory architectures, each distilled over twelve weeks. Alcohol-free, lipid-bound, and designed to bloom uniquely on your skin."
        />

        <div className="mt-14 grid items-center gap-10 lg:mt-32 lg:grid-cols-[1.2fr_1fr] lg:gap-32">
          {/* Visual - Floating on silk, no hard borders */}
          <Reveal className="relative">
            <div className="relative aspect-square w-full sm:aspect-[4/5] lg:aspect-square">
              {/* Internal glow aura */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(21,107,83,0.15),transparent_70%)] blur-[40px]" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(20px)" }}
                  transition={{ duration: 1.2, ease: EASE }}
                  className="absolute inset-0 z-10"
                >
                  <BottleScene 
                    oilColor={p.hue} 
                    className="h-full w-full cursor-grab active:cursor-grabbing" 
                  />
                </motion.div>
              </AnimatePresence>

              {p.badge && (
                <div className="absolute left-0 top-0 z-30 flex flex-col items-start gap-4">
                  <span className="h-px w-16 bg-gradient-to-r from-gold/60 to-transparent" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold/70">
                    {p.badge}
                  </span>
                </div>
              )}

              {/* Studio Prompt - Minimalist */}
              <div className="absolute bottom-0 left-0 z-30 flex flex-col items-start gap-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-gold/40">
                  Tactile Discovery
                </span>
                <span className="h-px w-12 bg-gradient-to-r from-gold/30 to-transparent" />
              </div>

              {/* Seamless Navigation */}
              <div className="absolute -right-12 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-6 lg:flex">
                {([-1, 1] as const).map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => step(d)}
                    className="group relative h-14 w-14 rounded-full border border-gold/10 transition-all duration-700 hover:border-gold/40 hover:bg-gold/5"
                  >
                    <span className="grid h-full w-full place-items-center text-gold/40 transition-colors duration-500 group-hover:text-gold">
                      {d === 1 ? <ArrowRight className="h-5 w-5" /> : <ArrowLeft className="h-5 w-5" />}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Thumbnails to switch scents */}
            <div className="mt-6 grid grid-cols-4 gap-4">
              {PRODUCTS.map((pr, i) => (
                <button
                  key={pr.id}
                  type="button"
                  onClick={() => go(i)}
                  className={cn(
                    "group relative aspect-square overflow-hidden rounded-2xl border-2 transition-all duration-700",
                    i === idx
                      ? "border-gold scale-105 shadow-[0_0_30px_rgba(200,162,78,0.4)]"
                      : "border-transparent opacity-40 grayscale hover:opacity-100 hover:grayscale-0"
                  )}
                >
                  <img src={pr.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-120" />
                  <div className={cn("absolute inset-0 transition-opacity", i === idx ? "opacity-0" : "opacity-40 bg-ink")} />
                </button>
              ))}
            </div>
          </Reveal>

          {/* Details */}
          <div className="lg:pl-2">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.55, ease: EASE }}
              >
                <p className="eyebrow">{p.tagline}</p>
                <h3 className="font-display mt-3 text-5xl font-medium leading-[1.02] text-cream sm:text-6xl">
                  {p.name}
                </h3>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold/80">
                  {p.accent}
                </p>
                <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-sand">
                  {p.description}
                </p>

                <div className="mt-8 space-y-5 border-t border-white/5 pt-8">
                  <NoteRow label="Opening" notes={p.notes.top} />
                  <NoteRow label="Heart" notes={p.notes.heart} />
                  <NoteRow label="Dry Down" notes={p.notes.base} />
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-8">
                  <Intensity level={p.intensity} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-pearl/30">
                    Atmosphere · {p.mood}
                  </span>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-8">
                  <div className="min-w-[120px]">
                    <p className="flex items-baseline gap-3">
                      <span className="font-display text-5xl font-semibold text-gold-light">
                        ${p.price}
                      </span>
                      {p.compareAt && (
                        <span className="text-sm font-semibold text-gold/30 line-through">${p.compareAt}</span>
                      )}
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gold/40">
                      12ml Imperial Extrait
                    </p>
                  </div>
                  <AddButton product={p} onAdd={onAdd} />
                </div>

                <div className="mt-8 flex items-center gap-3 rounded-2xl bg-gold/[0.03] border border-gold/10 p-4 text-[11px] text-gold-light/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold/60" />
                  International complimentary shipping for the Royal Collection.
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
