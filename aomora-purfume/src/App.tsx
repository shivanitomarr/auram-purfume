import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Craft from "./components/Craft";
import Collection from "./components/Collection";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = useCallback((n = 1) => setCartCount((c) => c + n), []);
  const scrollToCollection = useCallback(() => {
    document.querySelector("#collection")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="noise relative min-h-screen bg-ink font-sans text-cream antialiased">
      <Navbar cartCount={cartCount} />
      <main>
        <Hero onShop={scrollToCollection} />
        <SocialProof />
        <Collection onAdd={() => addToCart(1)} />
        <Craft />
        <Benefits />
        <Testimonials />
        <Pricing onAdd={() => addToCart(1)} />
        <Faq />
        <Cta onShop={scrollToCollection} />
      </main>
      <Footer />
    </div>
  );
}
