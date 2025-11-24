import { ProductCard } from '@/components/ProductCard';
import { getProducts } from '@/lib/shopify';

export const metadata = {
  title: 'Shop',
  description: 'Browse all products in our store.',
};

export default async function ShopPage() {
  const products = await getProducts({});

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Shop All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.handle} product={product} />
        ))}
      </div>
    </div>
  );
}
