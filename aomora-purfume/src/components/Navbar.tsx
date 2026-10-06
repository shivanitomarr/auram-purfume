import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import { NAV_LINKS } from "../data";
import { EASE } from "./ui";
import { cn } from "../utils/cn";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="#top"
      onClick={onClick}
      className="group flex items-center gap-3"
      aria-label="AURUM Attar — home"
    >
      <span className="grid h-10 w-10 place-items-center rounded-2xl border border-bronze/30 bg-bronze/5 transition-all duration-700 group-hover:rotate-[180deg] group-hover:border-bronze/60 group-hover:bg-bronze/15">
        <svg viewBox="0 0 32 32" className="h-5 w-5 fill-bronze" aria-hidden>
          <path d="M16 2C16 2 6 14 6 21a10 10 0 0 0 20 0C26 14 16 2 16 2z" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="font-display block text-[1.4rem] font-bold tracking-[0.1em] text-gold-light">
          AURUM
        </span>
        <span className="block text-[0.5rem] font-bold uppercase tracking-[0.6em] text-gold">
          MAISON D'ATTAR
        </span>
      </span>
    </a>
  );
}

export default function Navbar({ cartCount }: { cartCount: number }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [bump, setBump] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (cartCount === 0) return;
    setBump(true);
    const t = setTimeout(() => setBump(false), 600);
    return () => clearTimeout(t);
  }, [cartCount]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700",
          scrolled
            ? "border-b border-white/5 bg-black/80 backdrop-blur-2xl shadow-2xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <a
          href="#collection"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-bronze focus:px-5 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
        >
          Skip to collection
        </a>
        <nav
          className="mx-auto flex h-[84px] max-w-7xl items-center justify-between px-5 sm:px-8"
          aria-label="Primary"
        >
          <Logo />

          <ul className="hidden items-center gap-10 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-[10px] font-bold tracking-[0.3em] text-gold/50 uppercase transition-all duration-500 hover:text-gold-light hover:tracking-[0.4em]"
                >
                  {l.label}
                  <span className="absolute -bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gold transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => document.querySelector("#collection")?.scrollIntoView({ behavior: "smooth" })}
              className="relative grid h-10 w-10 place-items-center rounded-xl border border-gold/20 bg-gold/[0.05] text-gold/70 transition-all duration-500 hover:border-gold/60 hover:text-gold-light"
              aria-label={`Shopping bag, ${cartCount} item${cartCount === 1 ? "" : "s"}`}
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    key="badge"
                    initial={{ scale: 0 }}
                    animate={{ scale: bump ? [1, 1.2, 1] : 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-lg bg-gold px-1 text-[9px] font-black text-ink"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <a
              href="#pricing"
              className="btn-gold hidden rounded-full px-7 py-3 text-[11px] font-bold tracking-[0.15em] uppercase sm:inline-flex"
            >
              Reserve Now
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full border border-gold/20 text-cream lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" strokeWidth={1.8} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[70] flex flex-col bg-ink/95 backdrop-blur-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex h-[72px] items-center justify-between px-5">
              <Logo onClick={() => setOpen(false)} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-gold/25 text-cream"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center px-8" aria-label="Mobile">
              <ul className="space-y-2">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -32 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: EASE }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="font-display group flex items-baseline gap-4 border-b border-gold/10 py-4 text-4xl text-cream transition-colors hover:text-gold-2"
                    >
                      <span className="text-xs font-bold tracking-[0.3em] text-gold/60">
                        0{i + 1}
                      </span>
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.a
                href="#pricing"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
                className="btn-gold mt-10 inline-flex w-full items-center justify-center rounded-full py-4 text-sm font-bold tracking-wide"
              >
                Shop the Collection
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
