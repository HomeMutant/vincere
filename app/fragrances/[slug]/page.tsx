import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import FragranceDetails from '../../../components/FragranceDetails';
import { getPerfumeBySlug, perfumes, startingPrice } from '../../../data/perfumes';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return perfumes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const perfume = getPerfumeBySlug(slug);
  if (!perfume) return { title: 'Fragrance not found' };
  return {
    title: perfume.name,
    description: `${perfume.name}: ${perfume.note}. From RM${startingPrice} at VINCERE.`,
  };
}

export default async function FragrancePage({ params }: PageProps) {
  const { slug } = await params;
  const perfume = getPerfumeBySlug(slug);
  if (!perfume) notFound();

  return (
    <section className="detail-page">
      <Link className="back-link" href="/fragrances">
        <ArrowLeft size={14} /> All fragrances
      </Link>
      <div className="modal">
        <FragranceDetails perfume={perfume} heading="h1" />
      </div>
    </section>
  );
}
