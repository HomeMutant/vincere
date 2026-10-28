'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Menu, X } from 'lucide-react';
import { useFavorites } from '../hooks/useFavorites';

const links = [
  { href: '/about', label: 'About' },
  { href: '/fragrances', label: 'Fragrances' },
];

export default function Header() {
  const pathname = usePathname();
  const { favorites } = useFavorites();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="navbar">
      <div className="nav-left">
        <button className="menu-toggle icon-btn" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'navlinks open' : 'navlinks'}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={isActive(link.href) ? 'active' : ''} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <Link className="brand" href="/" onClick={closeMenu}>
        VINCERE<span>PARFUMERIE</span>
      </Link>
      <div className="nav-actions">
        <Link
          className={isActive('/saved') ? 'saved-link active' : 'saved-link'}
          href="/saved"
          aria-label={favorites.length > 0 ? `Saved fragrances (${favorites.length})` : 'Saved fragrances'}
          onClick={closeMenu}
        >
          <span className="saved-icon">
            <Heart size={19} />
            {favorites.length > 0 && <span className="count">{favorites.length}</span>}
          </span>
          <span className="saved-label">Saved</span>
        </Link>
      </div>
    </header>
  );
}
