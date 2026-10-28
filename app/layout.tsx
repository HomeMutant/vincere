import type { Metadata } from 'next';
import '../styles/base.css';
import '../styles/bottle.css';
import '../styles/header.css';
import '../styles/hero.css';
import '../styles/catalogue.css';
import '../styles/modal.css';
import '../styles/pricing.css';
import '../styles/story.css';
import '../styles/footer.css';
import { FavoritesProvider } from '../hooks/useFavorites';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: { default: 'VINCERE | Find Your Signature Scent', template: '%s | VINCERE' },
  description: 'Discover luxury-inspired fragrances from VINCERE. Premium scents, made personal.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <FavoritesProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}
