'use client';

import { ArrowRight, Heart } from 'lucide-react';
import { startingPrice, type Fragrance } from '../data/perfumes';
import { useFavorites } from '../hooks/useFavorites';
import Bottle from './Bottle';

type ProductCardProps = { perfume: Fragrance; onSelect: (perfume: Fragrance) => void };

export default function ProductCard({ perfume: p, onSelect }: ProductCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const saved = isFavorite(p.id);

  return (
    <article className="product-card">
      <button className="heart-btn" aria-label={saved ? `Remove ${p.name} from favorites` : `Save ${p.name}`} onClick={() => toggleFavorite(p.id)}>
        <Heart size={18} fill={saved ? 'currentColor' : 'none'} />
      </button>
      <button className={`product-visual visual-${p.accent}`} onClick={() => onSelect(p)} aria-label={`View ${p.name}`}>
        <span className="visual-sheen" />
        <Bottle accent={p.accent} small />
      </button>
      <h3>{p.name}</h3>
      <p>{p.note}</p>
      <div className="product-bottom">
        <div>
          <span>FROM</span>
          <strong>RM{startingPrice}</strong>
        </div>
        <button className="view-btn" onClick={() => onSelect(p)}>
          Explore <ArrowRight size={15} />
        </button>
      </div>
    </article>
  );
}
