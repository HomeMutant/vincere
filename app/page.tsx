import Link from 'next/link';
import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';
import Bottle from '../components/Bottle';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-aura" />
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-flower flower-one">✦</div>
        <div className="hero-flower flower-two">✧</div>
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="tiny-diamond">✦</span> THE ART OF SCENT <span className="tiny-diamond">✦</span>
          </div>
          <h1>
            Wear your
            <br />
            <em>own story.</em>
          </h1>
          <p>More than just a scent. An expression of who you are. Discover luxury-inspired fragrances, created for every version of you.</p>
          <Link className="primary-btn" href="/fragrances">
            Explore the collection <ArrowRight size={17} />
          </Link>
          <div className="hero-caption">
            <span className="line" /> PREMIUM FRAGRANCES · EVERYDAY LUXURY
          </div>
        </div>
        <div className="hero-art">
          <div className="art-halo" />
          <div className="art-word">V</div>
          <Bottle />
          <div className="art-script">
            Your scent,
            <br />
            your signature.
          </div>
        </div>
      </section>

      <section className="values">
        <div>
          <Sparkles size={21} />
          <span>PREMIUM SELECTION</span>
        </div>
        <div>
          <span className="value-glyph">◷</span>
          <span>LONG LASTING</span>
        </div>
        <div>
          <span className="value-glyph">◇</span>
          <span>SCENTS FOR EVERY YOU</span>
        </div>
        <div>
          <ShoppingBag size={20} />
          <span>FAST & SAFE DELIVERY</span>
        </div>
      </section>
    </>
  );
}
