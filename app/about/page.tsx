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
        <span>VINCERE</span>
      </div>
      <div className="story-copy">
        <div className="eyebrow">✦ THE VINCERE PHILOSOPHY</div>
        <h2>
          More than
          <br />
          <em>just a scent.</em>
        </h2>
        <p>We believe fragrance is personal. It captures memories, sets the mood, and speaks without saying a word.</p>
        <p>From timeless icons to modern favorites, our carefully curated collection invites you to discover a scent that feels undeniably yours.</p>
        <Link className="outline-btn" href="/fragrances">
          Find your scent <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
