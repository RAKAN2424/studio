import { products as staticProducts } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { AddToCart } from './_components/AddToCart';
import { Product, ProductVariant } from '@/lib/shopify/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

function findProduct(handle: string): Product | undefined {
    const staticProduct = staticProducts.find(p => p.id === handle);
    if (!staticProduct) return undefined;

    const placeholderImage = PlaceHolderImages.find(img => img.id === staticProduct.image);

    // Adapt the static product to the Shopify Product type
    return {
        id: staticProduct.id,
        handle: staticProduct.id,
        availableForSale: true,
        title: staticProduct.name,
        description: staticProduct.description,
        descriptionHtml: `<p>${staticProduct.description}</p>`,
        options: [],
        priceRange: {
            maxVariantPrice: { amount: staticProduct.price.replace('EGP ', ''), currencyCode: 'EGP' },
            minVariantPrice: { amount: staticProduct.price.replace('EGP ', ''), currencyCode: 'EGP' },
        },
        variants: [{
            id: `${staticProduct.id}-variant`,
            title: 'Default Title',
            availableForSale: true,
            selectedOptions: [],
            price: { amount: staticProduct.price.replace('EGP ', ''), currencyCode: 'EGP' },
        }] as ProductVariant[],
        featuredImage: {
            url: placeholderImage?.imageUrl || '',
            altText: staticProduct.name,
            width: 1080,
            height: 1080,
        },
        images: [],
        seo: {
            title: staticProduct.name,
            description: staticProduct.description,
        },
        tags: [],
        updatedAt: new Date().toISOString(),
    };
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
    description: product.description,
    openGraph: {
      images: [{ url: product.featuredImage.url }],
    },
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = findProduct(params.handle);

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
