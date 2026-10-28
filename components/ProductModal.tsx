'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { Fragrance } from '../data/perfumes';
import FragranceDetails from './FragranceDetails';

type ProductModalProps = { perfume: Fragrance; onClose: () => void };

export default function ProductModal({ perfume, onClose }: ProductModalProps) {
  // Close on Escape.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={`${perfume.name} fragrance details`}>
        <button className="close-modal" aria-label="Close details" onClick={onClose}>
          <X size={21} />
        </button>
        <FragranceDetails perfume={perfume} showPageLink />
      </div>
    </div>
  );
}
