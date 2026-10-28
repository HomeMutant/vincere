import { sizes } from '../data/perfumes';
import Bottle from './Bottle';

export default function SizeGuide() {
  return (
    <section className="pricing" id="pricing">
      <div className="eyebrow">✦ LITTLE LUXURIES</div>
      <h2>
        Luxury in <em>every size.</em>
      </h2>
      <p>Choose the perfect bottle for your lifestyle.</p>
      <div className="price-grid">
        {sizes.map((s, i) => (
          <div className={`price-item ${i === sizes.length - 1 ? 'price-highlight' : ''}`} key={s.ml}>
            <div className="mini-bottle">
              <Bottle small />
            </div>
            <strong>
              {s.ml}
              <span>ML</span>
            </strong>
            <div>RM{s.price}</div>
            {i === sizes.length - 1 && <small>BEST VALUE</small>}
          </div>
        ))}
      </div>
      <span className="pricing-footnote">Beautiful scents. Thoughtful prices. Made for every day.</span>
    </section>
  );
}
