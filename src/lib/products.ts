export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 'prod_001',
    name: 'LaVie Revitalizing Shampoo',
    description: 'A gentle, sulfate-free shampoo that cleanses without stripping natural oils. Perfect for daily use.',
    price: 'EGP 250',
    image: 'product-shampoo'
  },
  {
    id: 'prod_002',
    name: 'LaVie Hydrating Conditioner',
    description: 'Deeply moisturizes and detangles, leaving hair soft and manageable. Infused with argan oil.',
    price: 'EGP 280',
    image: 'product-conditioner'
  },
  {
    id: 'prod_003',
    name: 'LaVie Silk Finish Serum',
    description: 'A lightweight serum to tame frizz, add shine, and protect from heat damage.',
    price: 'EGP 350',
    image: 'product-serum'
  },
  {
    id: 'prod_004',
    name: 'LaVie Deep Repair Hair Mask',
    description: 'An intensive treatment to repair and strengthen damaged hair. Use weekly for best results.',
    price: 'EGP 450',
    image: 'product-mask'
  }
];

// This is what we'll pass to the AI
export const productCatalogString = products.map(p => `- ${p.name}: ${p.description}`).join('\n');
