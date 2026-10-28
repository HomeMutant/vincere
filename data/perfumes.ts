export type Category = 'Men' | 'Women';

export type Fragrance = {
  id: number;
  slug: string;
  name: string;
  category: Category;
  note: string;
  family: string;
  accent: string;
};

type RawFragrance = Omit<Fragrance, 'slug'>;

const raw: RawFragrance[] = [
  { id: 1, name: 'Montblanc Explorer', category: 'Men', note: 'Woody · Aromatic · Refined', family: 'Woody', accent: 'plum' },
  { id: 2, name: 'YSL Y Intense', category: 'Men', note: 'Fresh · Spicy · Confident', family: 'Fresh', accent: 'violet' },
  { id: 3, name: 'YSL Y Elixir', category: 'Men', note: 'Amber · Woody · Bold', family: 'Amber', accent: 'smoke' },
  { id: 4, name: 'Eros Flame', category: 'Men', note: 'Citrus · Spicy · Warm', family: 'Spicy', accent: 'ruby' },
  { id: 5, name: 'Aventus Absolut', category: 'Men', note: 'Fruity · Smoky · Powerful', family: 'Woody', accent: 'gold' },
  { id: 6, name: 'Le Male Elixir Absolut', category: 'Men', note: 'Amber · Sweet · Intense', family: 'Amber', accent: 'gold' },
  { id: 7, name: 'Side Effect', category: 'Men', note: 'Tobacco · Vanilla · Warm', family: 'Amber', accent: 'ruby' },
  { id: 8, name: 'Stronger With U Intensely', category: 'Men', note: 'Sweet · Amber · Addictive', family: 'Amber', accent: 'smoke' },
  { id: 9, name: 'One Million Elixer', category: 'Men', note: 'Warm · Sweet · Opulent', family: 'Amber', accent: 'gold' },
  { id: 10, name: 'LV Imagination', category: 'Men', note: 'Citrus · Tea · Airy', family: 'Fresh', accent: 'violet' },
  { id: 11, name: 'XJ 1861 Naxos', category: 'Men', note: 'Honey · Tobacco · Lavender', family: 'Amber', accent: 'gold' },
  { id: 12, name: 'Tom Ford Ombre Leather', category: 'Men', note: 'Leather · Floral · Smooth', family: 'Woody', accent: 'smoke' },
  { id: 13, name: 'One Mill', category: 'Men', note: 'Spicy · Warm · Seductive', family: 'Spicy', accent: 'gold' },
  { id: 14, name: 'Invictus', category: 'Men', note: 'Aquatic · Citrus · Energetic', family: 'Fresh', accent: 'violet' },
  { id: 15, name: 'YSL MYSLF', category: 'Men', note: 'Orange Blossom · Woody', family: 'Woody', accent: 'plum' },
  { id: 16, name: 'Jazz Club Maison Margiela', category: 'Men', note: 'Rum · Tobacco · Vanilla', family: 'Amber', accent: 'ruby' },
  { id: 17, name: 'Rebel 9AM', category: 'Men', note: 'Fresh · Fruity · Lively', family: 'Fresh', accent: 'violet' },
  { id: 18, name: 'Le Male Le Parfum', category: 'Men', note: 'Cardamom · Lavender · Vanilla', family: 'Spicy', accent: 'smoke' },
  { id: 19, name: 'YSL Libre', category: 'Women', note: 'Lavender · Orange Blossom · Vanilla', family: 'Floral', accent: 'gold' },
  { id: 20, name: 'Paco Rabanne Olympéa', category: 'Women', note: 'Vanilla · Salty · Floral', family: 'Amber', accent: 'plum' },
  { id: 21, name: 'Chanel Coco Mademoiselle', category: 'Women', note: 'Citrus · Rose · Patchouli', family: 'Floral', accent: 'ruby' },
  { id: 22, name: 'Giorgio Armani Sì', category: 'Women', note: 'Blackcurrant · Rose · Vanilla', family: 'Fruity', accent: 'plum' },
  { id: 23, name: 'Kayali Vanilla 28', category: 'Women', note: 'Vanilla · Brown Sugar · Amber', family: 'Gourmand', accent: 'gold' },
  { id: 24, name: 'Bvlgari Omnia Crystalline', category: 'Women', note: 'Lotus · Bamboo · Musk', family: 'Fresh', accent: 'violet' },
  { id: 25, name: 'BBW Champagne Toast', category: 'Women', note: 'Berries · Sparkling · Sweet', family: 'Fruity', accent: 'ruby' },
  { id: 26, name: 'BBW Thousand Wishes', category: 'Women', note: 'Peony · Prosecco · Amber', family: 'Floral', accent: 'plum' },
  { id: 27, name: 'Valentino Donna Born in Roma', category: 'Women', note: 'Jasmine · Vanilla · Woody', family: 'Floral', accent: 'ruby' },
];

// "YSL Libre" -> "ysl-libre", "Giorgio Armani Sì" -> "giorgio-armani-si"
export function slugify(name: string) {
  return name
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export const perfumes: Fragrance[] = raw.map((p) => ({ ...p, slug: slugify(p.name) }));
export const forHim = perfumes.filter((p) => p.category === 'Men');
export const forHer = perfumes.filter((p) => p.category === 'Women');

export function getPerfumeBySlug(slug: string) {
  return perfumes.find((p) => p.slug === slug);
}

export const families = ['All notes', 'Fresh', 'Floral', 'Woody', 'Amber', 'Spicy', 'Fruity', 'Gourmand'];

export const sizes = [
  { ml: 30, price: 25 },
  { ml: 50, price: 45 },
  { ml: 60, price: 55 },
  { ml: 80, price: 65 },
  { ml: 100, price: 80 },
];

export const DEFAULT_SIZE = 50;
export const startingPrice = sizes[0].price;
