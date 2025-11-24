import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/shopify/types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.handle}`}>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="p-0">
          <div className="relative aspect-square w-full">
            <Image
              src={product.featuredImage.url}
              alt={product.featuredImage.altText || product.title}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg">{product.title}</CardTitle>
          <p className="font-semibold">{product.priceRange.minVariantPrice.amount} {product.priceRange.minVariantPrice.currencyCode}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
