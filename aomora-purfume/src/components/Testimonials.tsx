import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BadgeCheck, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { EASE, Reveal, SectionHead, Stars } from "./ui";
import { cn } from "../utils/cn";

const AUTOPLAY_MS = 6000;

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const t = TESTIMONIALS[idx];
  const timer = useRef<number | null>(null);

  const step = useCallback((d: number) => {
    setDir(d);
    setIdx((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setTimeout(() => step(1), AUTOPLAY_MS);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [idx, paused, step]);

  return (
    <section
      id="reviews"
      className="relative overflow-hidden py-24 sm:py-32"
      aria-label="Customer reviews"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(760px 460px at 50% 0%, rgba(200,162,78,0.08), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Word of Nose"
          title={
            <>
              Worn, judged, <em className="gold-text font-semibold italic">repurchased.</em>
            </>
          }
        />

        <Reveal className="mt-14">
          <div
            className="glass relative rounded-[2.2rem] px-6 py-10 sm:px-14 sm:py-14"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            role="region"
            aria-roledescription="carousel"
            aria-label="Testimonials"
          >
            <Quote className="absolute -top-5 left-8 h-10 w-10 fill-gold/20 text-gold/20" aria-hidden />

            <div className="min-h-[220px] sm:min-h-[190px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.figure
                  key={idx}
                  initial={{ opacity: 0, x: dir * 42, filter: "blur(6px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: dir * -42, filter: "blur(6px)" }}
                  transition={{ duration: 0.55, ease: EASE }}
                  className="text-center"
                >
                  <blockquote className="font-display mx-auto max-w-3xl text-xl font-medium leading-snug text-cream sm:text-2xl lg:text-[1.7rem]">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-8 flex flex-col items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/30 bg-gradient-to-br from-gold/25 to-ember/20 font-display text-lg font-semibold text-gold-2">
                      {t.name.split(" ").map((w) => w[0]).join("")}
                    </span>
                    <div>
                      <p className="flex items-center justify-center gap-1.5 text-sm font-bold text-cream">
                        {t.name}
                        <BadgeCheck className="h-4 w-4 text-gold" aria-label="Verified buyer" />
                      </p>
                      <p className="mt-0.5 text-xs text-cream/45">
                        {t.role} · {t.location}
                      </p>
                    </div>
                    <span className="mt-1 rounded-full border border-gold/20 bg-gold/[0.07] px-3.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold-2">
                      Wears {t.scent}
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* controls */}
            <div className="mt-8 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={() => step(-1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-gold/20 text-cream/70 transition-all duration-300 hover:scale-110 hover:border-gold/50 hover:text-gold-2"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setDir(i > idx ? 1 : -1);
                      setIdx(i);
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === idx}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-500",
                      i === idx ? "w-8 bg-gold" : "w-2 bg-cream/15 hover:bg-cream/30"
                    )}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => step(1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-gold/20 text-cream/70 transition-all duration-300 hover:scale-110 hover:border-gold/50 hover:text-gold-2"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 text-center text-sm text-cream/50">
            <Stars />
            <span>
              <strong className="text-cream">4.9 out of 5</strong> across 12,400+ verified orders —
              96% say they'll buy again
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
