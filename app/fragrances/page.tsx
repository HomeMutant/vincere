import type { Metadata } from 'next';
import FragranceBrowser from '../../components/FragranceBrowser';
import SizeGuide from '../../components/SizeGuide';
import { perfumes, startingPrice, sizes } from '../../data/perfumes';

export const metadata: Metadata = { title: 'Fragrances' };

export default function FragrancesPage() {
  return (
    <>
      <section className="catalogue">
        <div className="section-head catalogue-header">
          <div>
            <div className="eyebrow">✦ THE VINCERE COLLECTION</div>
            <h2>
              Find your <em>signature.</em>
            </h2>
            <p>Explore all {perfumes.length} fragrances in our curated collection.</p>
          </div>
          <div className="price-from">
            STARTING AT <strong>RM{startingPrice}</strong>
            <span>{sizes[0].ml}ML BOTTLE</span>
          </div>
        </div>
        <FragranceBrowser />
      </section>
      <SizeGuide />
    </>
  );
}
