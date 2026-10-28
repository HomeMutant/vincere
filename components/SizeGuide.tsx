import { sizes } from '../data/perfumes';
import Bottle from './Bottle';

export default function SizeGuide() {
  return (
    <section className="pricing" id="pricing">
      <h2>
        Every <em>size.</em>
      </h2>
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
    </section>
  );
}
