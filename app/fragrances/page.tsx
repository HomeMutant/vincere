import type { Metadata } from 'next';
import FragranceBrowser from '../../components/FragranceBrowser';
import SizeGuide from '../../components/SizeGuide';

export const metadata: Metadata = { title: 'Fragrances' };

export default function FragrancesPage() {
  return (
    <>
      <section className="catalogue">
        <div className="section-head">
          <h2>
            Find your <em>signature.</em>
          </h2>
        </div>
        <FragranceBrowser />
      </section>
      <SizeGuide />
    </>
  );
}
