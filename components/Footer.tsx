import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { contact } from '../data/config';

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div>
          <div className="footer-brand">VINCERE</div>
          <p>
            Find your signature scent.
            <br />
            Premium fragrances for every you.
          </p>
        </div>
        <div>
          <span>EXPLORE</span>
          <Link href="/fragrances">All fragrances</Link>
          <Link href="/fragrances#for-him">For him</Link>
          <Link href="/fragrances#for-her">For her</Link>
          <Link href="/saved">Saved</Link>
        </div>
        <div>
          <span>DISCOVER</span>
          <Link href="/fragrances#pricing">Bottle sizes</Link>
          <Link href="/about">Our story</Link>
          <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
            <Instagram size={14} /> Instagram
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 VINCERE. ALL RIGHTS RESERVED.</span>
        <span>SCENT YOUR STORY ✦</span>
      </div>
    </footer>
  );
}
