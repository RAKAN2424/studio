
import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { AddToCart } from './_components/AddToCart';
import { Product } from '@/lib/products';

function findProduct(handle: string): Product | undefined {
    return products.find(p => p.handle === handle);
}

export async function generateMetadata({ params }: { params: { handle: string } }) {
  const product = findProduct(params.handle);

  if (!product) {
    return {
      title: 'Product not found',
    };
  }

  return {
    title: product.title,
    description: product.description.replace(/<[^>]*>/g, ''), // Strip HTML for meta
    openGraph: {
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = findProduct(params.handle);

  if (!product) {
    return notFound();
  }

  // Since we are using static data, variants are not detailed.
  // We'll create a mock variant for the AddToCart component.
  const mockVariants = [{
      id: `${product.id}-variant`,
      title: 'Default Title',
      availableForSale: product.availableForSale,
      selectedOptions: [],
      price: { amount: product.price, currencyCode: 'EGP' },
  }];

  return (
    <div className="container mx-auto px-4 py-12 pt-32">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image}
            alt={product.title}
            width={1080}
            height={1080}
            className="rounded-lg object-cover w-full"
          />
           <div className="grid grid-cols-4 gap-2 mt-4">
              {product.images.slice(1, 5).map((img, index) => (
                <div key={index} className="relative aspect-square">
                  <Image
                    src={img}
                    alt={`${product.title} - view ${index + 2}`}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
              ))}
            </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2 caveat-heading">{product.title}</h1>
          <p className="text-2xl font-semibold text-primary mb-4 dark:text-brand-gold">
            {product.price} EGP
          </p>
          <div
            className="prose dark:prose-invert mb-6"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
          <AddToCart variants={mockVariants as any[]} />
        </div>
      </div>
    </div>
  );
}

    