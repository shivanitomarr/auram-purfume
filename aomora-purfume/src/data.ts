export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  compareAt?: number;
  image: string;
  hue: string;
  accent: string;
  mood: string;
  intensity: number; // 1-5
  notes: { top: string[]; heart: string[]; base: string[] };
  badge?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "oud-imperial",
    name: "Oud Impérial",
    tagline: "The crown of the collection",
    description:
      "Cambodian oud aged eight years in oak, softened by saffron and smoked amber. Dark, regal, unmistakably rare — the attar collectors whisper about.",
    price: 185,
    compareAt: 220,
    image: "/images/oud-imperial.jpg",
    hue: "#b4641e",
    accent: "Smoke · Leather · Resin",
    mood: "Evening · Cold air · Presence",
    intensity: 5,
    notes: {
      top: ["Saffron", "Black Cardamom"],
      heart: ["Aged Cambodian Oud", "Rosewood"],
      base: ["Smoked Amber", "Grey Leather"],
    },
    badge: "Signature",
  },
  {
    id: "rose-sultane",
    name: "Rose Sultane",
    tagline: "A thousand petals in one drop",
    description:
      "Taif roses picked at dawn, steam-distilled the same afternoon over a saffron-sandalwood base. Velvet florals with a gilded, honeyed depth.",
    price: 145,
    image: "/images/rose-sultane.jpg",
    hue: "#a83250",
    accent: "Velvet · Honey · Dawn Rose",
    mood: "Romance · Daylight · Elegance",
    intensity: 4,
    notes: {
      top: ["Taif Rose", "Pink Pepper"],
      heart: ["Damask Absolute", "Saffron Threads"],
      base: ["Sandalwood", "Golden Honey"],
    },
    badge: "Bestseller",
  },
  {
    id: "musk-celeste",
    name: "Musk Céleste",
    tagline: "Your skin, but sacred",
    description:
      "A weightless white musk lifted by iris and vanilla orchid. The quiet luxury attar — clean, luminous, and impossible to place.",
    price: 125,
    image: "/images/musk-celeste.jpg",
    hue: "#d8c9ae",
    accent: "Clean · Silk · Skin-warm",
    mood: "Everyday · Office · Intimacy",
    intensity: 2,
    notes: {
      top: ["White Muscat", "Pear Blossom"],
      heart: ["Orris Butter", "White Musk"],
      base: ["Vanilla Orchid", "Cashmere Woods"],
    },
  },
  {
    id: "ambre-noir",
    name: "Ambre Noir",
    tagline: "Fire, tamed in a flacon",
    description:
      "Black amber fused with tonka smoke and worn leather. A magnetising warmth that blooms for hours after sundown.",
    price: 165,
    image: "/images/ambre-noir.jpg",
    hue: "#c87a2e",
    accent: "Amber · Tonka · Night",
    mood: "Winter · Occasions · Allure",
    intensity: 4,
    notes: {
      top: ["Burnt Orange", "Clove"],
      heart: ["Black Amber", "Tonka Smoke"],
      base: ["Worn Leather", "Bourbon Vanilla"],
    },
    badge: "Limited",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  scent: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I've owned Creed, Roja, Clive Christian. Nothing sits on skin like Oud Impérial — one swipe at 7am and my scarf still carried it that night. This is what perfume was before alcohol diluted it.",
    name: "James Whitmore",
    role: "Fragrance collector, 140+ bottles",
    location: "London",
    scent: "Oud Impérial",
    rating: 5,
  },
  {
    quote:
      "Rose Sultane stopped me mid-sentence the first time I wore it. Three people in one day asked what it was. It smells expensive in a way that's hard to describe — like old money and fresh roses.",
    name: "Amira Khalil",
    role: "Creative director",
    location: "Dubai",
    scent: "Rose Sultane",
    rating: 5,
  },
  {
    quote:
      "My skin rejects alcohol sprays — redness every time. Musk Céleste is the first fragrance I've worn daily in a decade. Soft, clean, and it moves with you instead of announcing you.",
    name: "Sofia Marchetti",
    role: "Dermatology nurse",
    location: "Milan",
    scent: "Musk Céleste",
    rating: 5,
  },
  {
    quote:
      "Bought the Discovery Ritual as a gift for my wife and ended up keeping Ambre Noir for myself. The flacon alone looks like it belongs in a museum. The oil inside is better.",
    name: "Daniel Osei",
    role: "Returning customer ×4",
    location: "New York",
    scent: "Ambre Noir",
    rating: 5,
  },
  {
    quote:
      "I sampled six attar houses this year. AURUM was the only one where the dry-down was better than the opening. Twelve hours later it turns into this warm second skin. Unfair, honestly.",
    name: "Leila Haddad",
    role: "Perfume reviewer, 92k subscribers",
    location: "Paris",
    scent: "Oud Impérial",
    rating: 5,
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "What exactly is attar — and how is it different from perfume?",
    a: "Attar is perfume in its original form: a pure, concentrated botanical oil with zero alcohol. While an eau de parfum is typically 15–20% fragrance diluted in alcohol that flashes off within hours, attar is up to 100% aromatic concentrate. It melts into the skin, warms with your body heat, and evolves for 8–14 hours instead of evaporating.",
  },
  {
    q: "How long does one application really last?",
    a: "On skin, expect 8–14 hours depending on the scent and your skin chemistry. On fabric or a scarf, many customers report traces for days. Because attar is oil-based, it projects intimately for the first hours, then settles into a long, warm sillage rather than disappearing.",
  },
  {
    q: "Is it suitable for sensitive skin?",
    a: "Yes — attar is alcohol-free by definition, which removes the most common irritant in modern fragrance. Every AURUM blend is IFRA-compliant, dermatologically reviewed, and uses skin-safe concentrations. If you have known botanical allergies, patch-test on your forearm first, as with any cosmetic.",
  },
  {
    q: "How do I apply it?",
    a: "Unscrew the glass wand, let one small drop rest on your pulse point — wrist, behind the ear, or the hollow of the throat — then press, never rub. Rubbing crushes the top notes. For maximum longevity, apply right after a shower on slightly warm skin, and avoid washing the area for an hour.",
  },
  {
    q: "Are AURUM attars authentic and ethically sourced?",
    a: "Every oil is distilled by our third-generation partner atelier, with oud certified under CITES and roses sourced directly from Taif grower cooperatives. Each batch ships with a numbered certificate of authenticity and a QR-coded provenance record from raw material to bottling.",
  },
  {
    q: "What if I choose the wrong scent?",
    a: "Start with the Discovery Ritual — five scents, and its full price becomes credit toward any flacon within 60 days. If a full-size purchase isn't right, our 30-day Sillage Guarantee lets you exchange or return it, even opened, as long as more than half the oil remains.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes. Complimentary insured worldwide shipping on orders over $95, dispatched within 24 hours from our Dubai and Rotterdam ateliers. Express delivery reaches most capitals in 2–4 days, fully tracked, duties included at checkout for 40+ countries.",
  },
];

export const PRESS = [
  "VOGUE",
  "GQ",
  "ESQUIRE",
  "HARPER'S BAZAAR",
  "ELLE",
  "ROBB REPORT",
  "TATLER",
  "VANITY FAIR",
];

export const NAV_LINKS = [
  { label: "Collection", href: "#collection" },
  { label: "The Craft", href: "#craft" },
  { label: "The Ritual", href: "#ritual" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];
