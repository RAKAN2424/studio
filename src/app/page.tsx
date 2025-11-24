import { getProducts } from '@/lib/shopify';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  const products = await getProducts({});

  return (
    <>
      <section className="relative h-[60vh] bg-muted/40 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Store, Your Way</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Welcome to your custom storefront powered by Next.js and Shopify.
          </p>
          <Button size="lg" asChild>
            <Link href="/shop">Shop Now</Link>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.handle} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
