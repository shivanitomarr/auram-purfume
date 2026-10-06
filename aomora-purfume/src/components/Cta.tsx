import { ArrowRight, ShieldCheck, Truck, Undo2 } from "lucide-react";
import { Flourish, Reveal } from "./ui";

export default function Cta({ onShop }: { onShop: () => void }) {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32" aria-label="Final call to action">
      <Reveal className="relative mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/20 px-6 py-16 text-center sm:px-12 sm:py-24">
          {/* backdrop */}
          <div className="absolute inset-0" aria-hidden>
            <img
              src="/images/gold-smoke.jpg"
              alt=""
              className="h-full w-full object-cover opacity-40"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink/85" />
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(200,162,78,0.22),transparent)] blur-2xl" />
          </div>

          <div className="relative">
            <Flourish className="mb-8" />
            <h2 className="font-display mx-auto max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] font-medium leading-[1.02] text-cream">
              Some fragrances you wear.
              <br />
              <em className="gold-text font-semibold italic">This one remembers you.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-cream/70 sm:text-base">
              Tonight it opens as saffron and rose. By midnight, it's skin and amber and
              entirely yours. Start with the Discovery Ritual — the $59 comes straight off
              your first flacon.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onShop}
                className="btn-gold group inline-flex items-center gap-2.5 rounded-full px-9 py-4 text-sm font-bold tracking-wide"
              >
                Shop the Collection
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                href="#pricing"
                className="btn-ghost inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold"
              >
                Start with Discovery — $59
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-cream/55">
              <span className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-gold" /> Insured worldwide, 24h dispatch
              </span>
              <span className="flex items-center gap-2">
                <Undo2 className="h-4 w-4 text-gold" /> 30-day Sillage Guarantee
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold" /> Certified authentic oils
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
