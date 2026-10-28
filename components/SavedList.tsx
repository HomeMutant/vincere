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
        <h2>
          <em>Saved.</em>
        </h2>
      </div>

      {loaded && saved.length === 0 && (
        <div className="empty">
          <Heart size={25} />
          <h3>Nothing saved yet</h3>
          <Link href="/fragrances">Browse fragrances</Link>
        </div>
      )}

      {saved.length > 0 && <ProductGrid perfumes={saved} />}
    </section>
  );
}
