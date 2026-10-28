import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Bottle from '../../components/Bottle';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <section className="story">
      <div className="story-art">
        <div className="story-round" />
        <Bottle />
      </div>
      <div className="story-copy">
        <h2>
          More than
          <br />
          <em>just a scent.</em>
        </h2>
        <p>We believe fragrance is personal. Find the one that feels like you.</p>
        <Link className="outline-btn" href="/fragrances">
          Find your scent <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
