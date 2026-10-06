import { useState } from "react";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { NAV_LINKS } from "../data";

const InstagramIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={props.className} aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);
const YoutubeIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={props.className} aria-hidden>
    <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
    <path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
  </svg>
);
const PinterestIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={props.className} aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 20.5c.8-2.4 1.5-4.7 2-7" />
    <path d="M11.5 13.5c-1.8-.4-2.6-1.9-2.4-3.6.3-2 2-3.7 4.3-3.7 2.1 0 3.7 1.4 3.7 3.5 0 2.4-1.5 4.4-3.4 4.4-1 0-1.8-.6-2-1.5" />
  </svg>
);

const COLUMNS = [
  {
    title: "Collection",
    links: ["Oud Impérial", "Rose Sultane", "Musk Céleste", "Ambre Noir", "The Discovery Ritual", "The Aurum Vault"],
    href: "#collection",
  },
  {
    title: "Maison",
    links: ["The Craft", "Ateliers & sourcing", "Certificates", "Journal", "Sustainability"],
    href: "#craft",
  },
  {
    title: "Care",
    links: ["Shipping & returns", "Sillage Guarantee", "Track order", "FAQ", "Concierge"],
    href: "#faq",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="relative border-t border-gold/12 bg-ink-2/70" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          {/* brand + newsletter */}
          <div>
            <a href="#top" className="flex items-center gap-2.5" aria-label="AURUM Attar — back to top">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/35 bg-gold/10">
                <svg viewBox="0 0 32 32" className="h-5 w-5 fill-gold" aria-hidden>
                  <path d="M16 2C16 2 6 14 6 21a10 10 0 0 0 20 0C26 14 16 2 16 2z" />
                </svg>
              </span>
              <span className="leading-none">
                <span className="font-display block text-[1.5rem] font-semibold tracking-[0.18em] text-cream">
                  AURUM
                </span>
                <span className="block text-[0.55rem] font-semibold uppercase tracking-[0.5em] text-gold/90">
                  Attar
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand">
              A third-generation maison of pure attar — alcohol-free oils of oud, Taif rose
              and amber, distilled from Kannauj to Dubai since 1998.
            </p>

            <form
              className="mt-7"
              onSubmit={(e) => {
                e.preventDefault();
                if (!email.includes("@")) return;
                setSent(true);
              }}
            >
              <label
                htmlFor="newsletter-email"
                className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold/80"
              >
                The Private List — first drops & batch releases
              </label>
              {sent ? (
                <p className="glass mt-3 flex items-center gap-2.5 rounded-2xl px-5 py-4 text-sm text-gold-2" role="status">
                  <Check className="h-4 w-4" strokeWidth={3} />
                  Welcome to the Private List. Your first note arrives Friday.
                </p>
              ) : (
                <div className="mt-3 flex items-center gap-2">
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@finest-address.com"
                    className="field w-full min-w-0 flex-1 rounded-full px-5 py-3.5 text-sm text-cream"
                  />
                  <button
                    type="submit"
                    className="btn-gold grid h-12 w-12 shrink-0 place-items-center rounded-full"
                    aria-label="Subscribe to the private list"
                  >
                    <ArrowRight className="h-4.5 w-4.5" />
                  </button>
                </div>
              )}
            </form>

            <div className="mt-7 flex items-center gap-3">
              {[
                { icon: InstagramIcon, label: "Instagram" },
                { icon: YoutubeIcon, label: "YouTube" },
                { icon: PinterestIcon, label: "Pinterest" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={`AURUM on ${s.label}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-gold/20 text-cream/60 transition-all duration-300 hover:-translate-y-1 hover:border-gold/55 hover:text-gold-2"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
              <span className="ml-2 flex items-center gap-2 text-xs text-cream/40">
                <MapPin className="h-3.5 w-3.5 text-gold/60" /> Dubai · Rotterdam · Kannauj
              </span>
            </div>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.28em] text-cream/40">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href={col.href}
                        className="group text-sm text-sand transition-colors duration-300 hover:text-gold-2"
                      >
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                          {l}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* quick nav for accessibility */}
        <nav aria-label="Footer quick links" className="mt-14 border-t border-gold/10 pt-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/45 transition-colors hover:text-gold-2"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 text-xs text-cream/35 sm:flex-row">
          <p>© {new Date().getFullYear()} Maison AURUM Attar. All rights reserved.</p>
          <p className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <a href="#top" className="transition-colors hover:text-gold-2">Privacy</a>
            <a href="#top" className="transition-colors hover:text-gold-2">Terms</a>
            <a href="#top" className="transition-colors hover:text-gold-2">Authenticity</a>
            <span className="text-cream/25">Visa · Mastercard · Amex · Apple Pay</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
