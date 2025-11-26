
import { products } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';

export const metadata = {
    title: 'Shop',
    description: 'Discover our premium Brazilian hair care solutions. Professional formulas for home and salon use.'
}

export default async function ShopPage() {

  return (
    <main className="min-h-screen">
      <div className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-4 caveat-heading">Shop Collection</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Discover our premium Brazilian hair care solutions. Professional formulas for home and salon use.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
