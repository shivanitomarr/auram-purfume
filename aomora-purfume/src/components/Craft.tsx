import { Droplets, FlaskConical, Gem, Leaf } from "lucide-react";
import { Reveal, SectionHead } from "./ui";
import { CountUp } from "./ui";

const PILLARS = [
  {
    icon: FlaskConical,
    num: "01",
    title: "Distilled the old way",
    copy: "Copper alembics, low heat, weeks of maceration. Our third-generation atelier extracts aromatics the way it was done before alcohol shortcuts existed.",
  },
  {
    icon: Gem,
    num: "02",
    title: "Materials money barely buys",
    copy: "CITES-certified Cambodian oud aged 8 years, dawn-picked Taif roses, cold-pressed Mysore santal. We buy harvests, not suppliers' leftovers.",
  },
  {
    icon: Droplets,
    num: "03",
    title: "Zero alcohol. 100% oil.",
    copy: "Nothing to evaporate, nothing to burn off. The oil bonds to skin lipids and releases in waves — top at noon, base at midnight.",
  },
  {
    icon: Leaf,
    num: "04",
    title: "Kind to skin, by design",
    copy: "IFRA-compliant, dermatologically reviewed, and naturally hypoallergenic for most skin that react to spray perfumes. No synthetics left naked on skin.",
  },
];

export default function Craft() {
  return (
    <section id="craft" className="relative overflow-hidden py-24 sm:py-32" aria-label="The craft behind AURUM attars">
      {/* ambient */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-full opacity-[0.5]"
        style={{
          background:
            "radial-gradient(700px 420px at 85% 20%, rgba(200,162,78,0.07), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="The Craft"
          title={
            <>
              Perfume, before <em className="gold-text font-semibold italic">perfume.</em>
            </>
          }
          copy="Attar is the 1,000-year-old art modern fragrance forgot. Pure botanical oil, no alcohol, no dilution — the most intimate and longest-wearing form of scent ever made."
        />

        <div className="mt-16 grid items-center gap-14 lg:mt-20 lg:grid-cols-2 lg:gap-20">
          {/* Visual */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[2rem] border border-gold/15 ring-glow">
              <img
                src="/images/craft.jpg"
                alt="Artisan distilling attar oil in a copper alembic still surrounded by oud wood and rose petals"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/25" aria-hidden />

              <div className="glass absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl px-5 py-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
                    Atelier No. 3
                  </p>
                  <p className="font-display mt-1 text-lg leading-tight text-cream">
                    Kannauj & Dubai
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display text-2xl font-semibold text-gold-2">
                    <CountUp to={27} />
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/50">
                    years of mastery
                  </p>
                </div>
              </div>
            </div>

            {/* floating chip */}
            <div className="glass absolute -right-3 -top-6 hidden animate-float-slow rounded-2xl px-5 py-3.5 sm:block lg:-right-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cream/50">
                Batch yield
              </p>
              <p className="font-display mt-0.5 text-xl text-gold-2">
                500 kg roses → <span className="text-cream">1 L oil</span>
              </p>
            </div>
          </Reveal>

          {/* Pillars */}
          <div className="order-1 lg:order-2">
            <ul className="space-y-2">
              {PILLARS.map((p, i) => (
                <Reveal key={p.num} delay={i * 0.08}>
                  <li className="group relative flex gap-5 rounded-3xl border border-transparent p-5 transition-all duration-500 hover:border-gold/15 hover:bg-cream/[0.025] sm:p-6">
                    <div className="relative shrink-0">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl border border-gold/25 bg-gold/[0.08] text-gold transition-all duration-500 group-hover:scale-110 group-hover:border-gold/50 group-hover:shadow-[0_0_30px_-6px_rgba(200,162,78,0.5)]">
                        <p.icon className="h-5 w-5" strokeWidth={1.6} />
                      </span>
                    </div>
                    <div>
                      <p className="mb-1 text-[10px] font-bold tracking-[0.3em] text-gold/50">
                        {p.num}
                      </p>
                      <h3 className="font-display text-xl font-semibold text-cream sm:text-[1.35rem]">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-sand">{p.copy}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
