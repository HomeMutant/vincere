import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Bottle from '../components/Bottle';

export default function HomePage() {
  return (
    <section className="hero">
      <div className="hero-aura" />
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />
      <div className="hero-copy">
        <h1>
          Wear your
          <br />
          <em>own story.</em>
        </h1>
        <Link className="primary-btn" href="/fragrances">
          Explore <ArrowRight size={17} />
        </Link>
      </div>
      <div className="hero-art">
        <div className="art-halo" />
        <div className="art-word">V</div>
        <Bottle />
      </div>
    </section>
  );
}
