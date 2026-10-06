import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck, Sparkles, Timer } from "lucide-react";
import BottleScene from "./BottleScene";
import { CountUp, EASE, Stars } from "./ui";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
};
const item = {
  hidden: { opacity: 0, y: 34, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: EASE },
  },
};

export default function Hero({ onShop }: { onShop: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 350]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink"
      aria-label="AURUM Attar introduction"
    >
      {/* Silky Atmospheric Backdrop */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="silk-flow" />
        <div className="absolute top-0 h-full w-full bg-[radial-gradient(ellipse_at_top_left,rgba(21,107,83,0.2),transparent_60%)]" />
        <div className="absolute bottom-0 h-full w-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,175,55,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* Cinematic 3D Scene */}
      <motion.div
        style={{ y: sceneY, opacity: sceneOpacity }}
        className="absolute inset-0 z-10 flex items-center justify-center lg:left-[50%]"
      >
        <div className="relative h-[90vh] w-[90vh]">
          {/* Soft Glow Beams instead of circles */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,44,30,0.4),transparent_70%)] blur-[60px]" />
          
          <BottleScene 
            oilColor="#d4af37"
            className="relative h-full w-full cursor-grab active:cursor-grabbing scale-100" 
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="absolute bottom-[10%] left-1/2 -translate-x-1/2"
          >
             <div className="flex flex-col items-center gap-3">
                <div className="h-16 w-px bg-gradient-to-b from-transparent to-gold/40" />
                <span className="text-[9px] font-bold uppercase tracking-[0.6em] text-gold/60">360° Discovery</span>
             </div>
          </motion.div>
        </div>
      </motion.div>

      {/* readability scrim on mobile */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent lg:hidden"
        aria-hidden
      />

      {/* copy */}
      <motion.div
        style={{ y: copyY }}
        className="pointer-events-none relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-24 pt-32 sm:px-8 lg:pb-16"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.p
            variants={item}
            className="eyebrow mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-gradient-to-r from-gold to-transparent" />
            Maison d'Attar · Est. 1998
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[clamp(3.1rem,8.5vw,6rem)] font-medium leading-[0.98] text-cream"
          >
            Liquid gold,
            <br />
            <em className="gold-text italic font-semibold">worn on skin.</em>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-sand sm:text-lg"
          >
            Alcohol-free attar oils of rare oud, Taif rose and amber — distilled
            by a third-generation atelier. One drop. Twelve hours of sillage.
            Nothing else on your shelf comes close.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={onShop}
              className="btn-gold pointer-events-auto group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold tracking-wide"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href="#craft"
              className="btn-ghost pointer-events-auto inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold"
            >
              <Sparkles className="h-4 w-4 text-gold" />
              Discover the craft
            </a>
          </motion.div>

          {/* stats */}
          <motion.dl
            variants={item}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-gold/12 pt-7"
          >
            {[
              {
                icon: Timer,
                top: <CountUp to={12} suffix="+" />,
                label: "hour wear, one drop",
              },
              {
                icon: ShieldCheck,
                top: <CountUp to={100} suffix="%" />,
                label: "pure oil, 0% alcohol",
              },
              {
                icon: null,
                top: <CountUp to={4.9} decimals={1} />,
                label: "from 12,400+ reviews",
              },
            ].map((s, i) => (
              <div key={i}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="font-display block text-[1.7rem] font-semibold leading-none text-cream sm:text-3xl">
                    {s.top}
                  </span>
                  <span className="mt-1.5 flex items-center gap-1.5 text-[10.5px] font-semibold uppercase leading-tight tracking-[0.14em] text-cream/45">
                    {s.icon && <s.icon className="h-3 w-3 shrink-0 text-gold/70" />}
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>

          <motion.div variants={item} className="mt-5 flex items-center gap-2.5">
            <Stars />
            <span className="text-xs font-medium text-cream/50">
              "The pinnacle of modern attar" — Robb Report
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#press"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream/40 transition-colors hover:text-gold"
        aria-label="Scroll to explore"
      >
        <motion.span
          animate={reduce ? undefined : { y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
