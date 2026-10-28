'use client';

import { useState } from 'react';
import { ChevronDown, Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import { families, forHer, forHim, type Fragrance } from '../data/perfumes';
import ProductGrid from './ProductGrid';

const sections = [
  { id: 'for-him', label: 'For him', pronoun: 'him', items: forHim },
  { id: 'for-her', label: 'For her', pronoun: 'her', items: forHer },
];

export default function FragranceBrowser() {
  const [query, setQuery] = useState('');
  const [family, setFamily] = useState('All notes');

  const matches = (p: Fragrance) =>
    (family === 'All notes' || p.family === family) && `${p.name} ${p.note}`.toLowerCase().includes(query.toLowerCase());

  // Sections with no matches are hidden.
  const visible = sections.map((s) => ({ ...s, items: s.items.filter(matches) })).filter((s) => s.items.length > 0);
  const total = visible.reduce((sum, s) => sum + s.items.length, 0);

  return (
    <>
      <div className="catalogue-tools">
        <div className="tabs">
          {visible.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.label} <span>{s.items.length}</span>
            </a>
          ))}
        </div>
        <div className="filters">
          <label className="search">
            <Search size={17} />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search fragrances..." aria-label="Search fragrances" />
          </label>
          <label className="select-wrap">
            <SlidersHorizontal size={15} />
            <select value={family} onChange={(e) => setFamily(e.target.value)} aria-label="Filter scent family">
              {families.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
            <ChevronDown size={13} />
          </label>
        </div>
      </div>

      {visible.map((s) => (
        <section className="collection" id={s.id} key={s.id}>
          <div className="collection-head">
            <h2>
              For <em>{s.pronoun}.</em>
            </h2>
          </div>
          <ProductGrid perfumes={s.items} />
        </section>
      ))}

      {total === 0 && (
        <div className="empty">
          <Sparkles size={25} />
          <h3>No fragrances found</h3>
          <p>Try a different scent or remove some filters.</p>
          <button onClick={() => { setQuery(''); setFamily('All notes'); }}>Clear filters</button>
        </div>
      )}
    </>
  );
}
