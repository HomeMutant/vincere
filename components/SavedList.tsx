'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';
import { perfumes } from '../data/perfumes';
import { useFavorites } from '../hooks/useFavorites';
import ProductGrid from './ProductGrid';

export default function SavedList() {
  const { favorites, loaded } = useFavorites();
  const saved = perfumes.filter((p) => favorites.includes(p.id));

  return (
    <section className="catalogue">
      <div className="section-head">
        <div>
          <div className="eyebrow">✦ YOUR COLLECTION</div>
          <h2>
            Saved <em>fragrances.</em>
          </h2>
        </div>
        <p>The scents you've hearted, kept on this device.</p>
      </div>

      {loaded && saved.length === 0 && (
        <div className="empty">
          <Heart size={25} />
          <h3>No saved fragrances yet</h3>
          <p>Tap the heart on any fragrance to keep it here.</p>
          <Link href="/fragrances">Browse fragrances</Link>
        </div>
      )}

      {saved.length > 0 && (
        <>
          <div className="result-count">
            {saved.length} SAVED FRAGRANCE{saved.length !== 1 ? 'S' : ''}
          </div>
          <ProductGrid perfumes={saved} />
        </>
      )}
    </section>
  );
}
