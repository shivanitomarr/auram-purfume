import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Flame, Gem, HeartHandshake, Plane } from "lucide-react";
import { EASE, Reveal, SectionHead } from "./ui";

const BARS = [
  { name: "Eau de Toilette", pct: 8, wear: "2–3 h", dim: true },
  { name: "Eau de Parfum", pct: 18, wear: "4–6 h", dim: true },
  { name: "Extrait de Parfum", pct: 30, wear: "6–8 h", dim: true },
  { name: "AURUM Attar", pct: 100, wear: "12–14 h", dim: false },
];

const STEPS = [
  {
    num: "01",
    title: "Warm one drop",
    copy: "Unscrew the glass wand and let a single drop fall onto your pulse point — wrist, throat, or behind the ear. Oil blooms with body heat.",
  },
  {
    num: "02",
    title: "Press, never rub",
    copy: "Press wrists together softly. Rubbing fractures the top notes; pressing lets the accord unfold in three acts across the day.",
  },
  {
    num: "03",
    title: "Layer for signature",
    copy: "Pair Musk Céleste beneath any scent to double its depth, or wear Oud Impérial alone when the room belongs to you.",
  },
];

const BENEFITS = [
  { icon: Flame, title: "12–14 hour wear", copy: "One morning drop, still present at midnight." },
  { icon: Gem, title: "Travels at 12ml", copy: "Cabin-safe crystal flacon. Two months per refill." },
  { icon: HeartHandshake, title: "Unisex by nature", copy: "Oil amplifies your chemistry, not a gendered brief." },
  { icon: Plane, title: "Aircraft-quiet sillage", copy: "Intimate projection: your scent, your space." },
];

export default function Benefits() {
  const barRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  return (
    <section id="ritual" className="relative overflow-hidden py-24 sm:py-32" aria-label="The attar ritual and benefits">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(900px 520px at 80% 75%, rgba(200,162,78,0.06), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="The Ritual · The Proof"
          title={
            <>
              Why a drop outlasts <em className="gold-text font-semibold italic">a hundred sprays.</em>
            </>
          }
          copy="Alcohol carries scent for minutes; oil carries it for hours. Compare the concentration — then learn the 10-second ritual that unlocks it."
        />

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Comparison chart */}
          <Reveal>
            <div className="glass relative overflow-hidden rounded-[2rem] p-7 sm:p-9">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold/70">
                Pure aromatic concentration
              </p>
              <div ref={barRef} className="mt-7 space-y-6">
                {BARS.map((b, i) => (
                  <div key={b.name}>
                    <div className="mb-2 flex items-baseline justify-between gap-3">
                      <span
                        className={
                          b.dim ? "text-[13px] font-medium text-cream/50" : "text-[13px] font-bold text-gold-2"
                        }
                      >
                        {b.name}
                      </span>
                      <span
                        className={
                          b.dim ? "text-xs text-cream/35" : "text-xs font-bold text-gold-2"
                        }
                      >
                        {b.pct}% · {b.wear}
                      </span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-cream/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${b.pct}%` }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: reduce ? 0 : 1.4, delay: 0.15 + i * 0.12, ease: EASE }}
                        className={
                          b.dim
                            ? "h-full rounded-full bg-cream/20"
                            : "h-full rounded-full bg-gradient-to-r from-gold-3 via-gold to-gold-2 shadow-[0_0_18px_-2px_rgba(200,162,78,0.8)]"
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-7 text-xs leading-relaxed text-cream/40">
                Measured by aromatic compound percentage. Alcohol-based sprays flash off
                within hours; oil anchors to skin and releases slowly across the day.
              </p>
            </div>
          </Reveal>

          {/* Ritual steps + image */}
          <div className="relative">
            <div className="absolute inset-x-10 -bottom-6 top-24 hidden lg:block" aria-hidden>
              <div className="h-full w-full rounded-[2rem] border border-gold/10" />
            </div>
            <Reveal className="relative overflow-hidden rounded-[2rem] border border-gold/15 ring-glow">
              <div className="relative">
                <img
                  src="/images/ritual.jpg"
                  alt="A golden drop of attar oil applied to a wrist pulse point"
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" aria-hidden />
                <p className="glass absolute left-5 top-5 rounded-full px-4 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.24em] text-gold-2">
                  10 seconds, every morning
                </p>
              </div>
              <ol className="glass relative space-y-1 rounded-b-[2rem] p-6 sm:p-8">
                {STEPS.map((s, i) => (
                  <Reveal key={s.num} delay={i * 0.1}>
                    <li className="flex gap-5 rounded-2xl p-4 transition-colors duration-500 hover:bg-cream/[0.03]">
                      <span className="font-display text-3xl font-semibold text-gold/50">{s.num}</span>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-cream">{s.title}</h3>
                        <p className="mt-1.5 text-[13.5px] leading-relaxed text-sand">{s.copy}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>

        {/* benefit chips */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="group glass h-full rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/35 hover:shadow-[0_20px_60px_-30px_rgba(200,162,78,0.55)]">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-gold/25 bg-gold/[0.08] text-gold transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                  <b.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-cream">{b.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-sand">{b.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
