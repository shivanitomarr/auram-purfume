import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "../data";
import { EASE, Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

function Item({
  q,
  a,
  open,
  onToggle,
  index,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className={cn(
        "group glass overflow-hidden rounded-2xl transition-colors duration-500",
        open && "border-gold/35 bg-cream/[0.045]"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-a-${index}`}
        id={`faq-q-${index}`}
        className="flex w-full items-center gap-4 px-6 py-5 text-left sm:px-7"
      >
        <span
          className={cn(
            "font-display shrink-0 text-lg font-semibold transition-colors duration-300",
            open ? "text-gold-2" : "text-gold/40"
          )}
        >
          0{index + 1}
        </span>
        <span className="flex-1 text-[15px] font-semibold text-cream sm:text-base">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className={cn(
            "grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors duration-300",
            open ? "border-gold/60 bg-gold/15 text-gold-2" : "border-gold/20 text-cream/55 group-hover:border-gold/45"
          )}
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="a"
            id={`faq-a-${index}`}
            role="region"
            aria-labelledby={`faq-q-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 pl-[4.35rem] pr-8 text-[13.5px] leading-relaxed text-sand sm:px-7 sm:pl-[4.6rem]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32" aria-label="Frequently asked questions">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Before You Begin"
          title={
            <>
              Questions, <em className="gold-text font-semibold italic">answered.</em>
            </>
          }
          copy="Everything collectors ask before their first drop. Something else on your mind? Our concierge replies within hours — concierge@aurumattar.com."
        />

        <div className="mt-12 space-y-3.5">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.06}>
              <Item
                q={f.q}
                a={f.a}
                index={i}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
