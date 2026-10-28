'use client';

import { useCallback, useState } from 'react';
import type { Fragrance } from '../data/perfumes';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

// A grid of cards plus the details popup they open.
export default function ProductGrid({ perfumes }: { perfumes: Fragrance[] }) {
  const [selected, setSelected] = useState<Fragrance | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <>
      <div className="product-grid">
        {perfumes.map((p) => (
          <ProductCard key={p.id} perfume={p} onSelect={setSelected} />
        ))}
      </div>
      {selected && <ProductModal perfume={selected} onClose={closeModal} />}
    </>
  );
}
