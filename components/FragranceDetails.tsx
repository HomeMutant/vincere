'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import { DEFAULT_SIZE, sizes, type Fragrance } from '../data/perfumes';
import { inquiryMessage, whatsappLink } from '../lib/whatsapp';
import Bottle from './Bottle';

type FragranceDetailsProps = {
  perfume: Fragrance;
  heading?: 'h1' | 'h2';
  showPageLink?: boolean;
};

// Shared by the popup modal and the standalone /fragrances/[slug] page.
export default function FragranceDetails({ perfume, heading: Heading = 'h2', showPageLink = false }: FragranceDetailsProps) {
  const [size, setSize] = useState(DEFAULT_SIZE);
  const chosen = sizes.find((s) => s.ml === size)!;

  return (
    <>
      <div className={`modal-art visual-${perfume.accent}`}>
        <Bottle accent={perfume.accent} />
      </div>
      <div className="modal-details">
        <Heading>{perfume.name}</Heading>
        <p>{perfume.note}</p>
        <div className="size-options">
          {sizes.map((s) => (
            <button key={s.ml} className={size === s.ml ? 'selected' : ''} onClick={() => setSize(s.ml)}>
              {s.ml}ml
            </button>
          ))}
        </div>
        <div className="modal-price">
          <strong>RM{chosen.price}</strong>
        </div>
        <a
          className="primary-btn modal-cta"
          href={whatsappLink(inquiryMessage(perfume.name, size, chosen.price))}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={18} /> Order on WhatsApp <ArrowRight size={17} />
        </a>
        <div className="modal-note">
          <Check size={15} /> Enquiry only · No online payment
        </div>
        {showPageLink && (
          <Link className="modal-link" href={`/fragrances/${perfume.slug}`}>
            View full page <ArrowRight size={13} />
          </Link>
        )}
      </div>
    </>
  );
}
