import type { Metadata } from 'next';
import SavedList from '../../components/SavedList';

export const metadata: Metadata = { title: 'Saved fragrances' };

export default function SavedPage() {
  return <SavedList />;
}
