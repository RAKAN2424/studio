import { getProduct } from '@/lib/shopify';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { AddToCart } from './_components/AddToCart';

export async function generateMetadata({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) {
    return {
      title: 'Product not found',
    };
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [{ url: product.featuredImage.url }],
    },
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.featuredImage.url}
            alt={product.featuredImage.altText || product.title}
            width={product.featuredImage.width}
            height={product.featuredImage.height}
            className="rounded-lg object-cover w-full"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
          <p className="text-2xl font-semibold text-primary mb-4">
            {product.priceRange.minVariantPrice.amount} {product.priceRange.minVariantPrice.currencyCode}
          </p>
          <div
            className="prose dark:prose-invert mb-6"
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          />
          <AddToCart variants={product.variants} />
        </div>
      </div>
    </div>
  );
}
