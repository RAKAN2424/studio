'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/shopify/types';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { useTransition } from 'react';
import { addItem } from '@/app/cart/_actions/cart';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const router = useRouter();

  const handleAddToCart = () => {
    if (!product.variants[0]?.id) {
        toast({
            variant: "destructive",
            title: "Error",
            description: "This product has no selectable variants.",
        });
        return;
    }

    startTransition(async () => {
      const error = await addItem(product.variants[0].id);

      if (error) {
        toast({
            variant: "destructive",
            title: "Error adding to cart",
            description: error,
        });
        return;
      }
      toast({
        title: "Added to cart",
        description: `${product.title} has been added to your cart.`,
      });
      router.push('/cart');
    });
  };


  return (
    <Card className="group overflow-hidden relative flex flex-col">
        <Link href={`/product/${product.handle}`} className='flex-grow'>
            <div className="relative aspect-[3/4] bg-gray-100 dark:bg-zinc-900">
                {product.featuredImage ? (
                    <Image
                    src={product.featuredImage.url}
                    alt={product.featuredImage.altText || product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : <div className='w-full h-full bg-muted'></div>}
                
                {product.tags && (
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.tags.slice(0, 2).map(tag => <span key={tag} className="bg-black/70 text-white text-[10px] px-2 py-1 uppercase tracking-widest font-bold backdrop-blur-sm rounded-sm">{tag}</span>)}
                  </div>
                )}
            </div>
            <CardContent className="p-4 flex-grow flex flex-col">
                <h3 className="font-serif text-lg text-foreground group-hover:text-primary dark:group-hover:text-brand-gold transition-colors flex-grow">{product.title}</h3>
                <p className="text-primary font-bold dark:text-brand-gold">{product.priceRange.minVariantPrice.amount} {product.priceRange.minVariantPrice.currencyCode}</p>
            </CardContent>
        </Link>
        <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button 
                onClick={handleAddToCart} 
                disabled={isPending || !product.availableForSale}
                className="w-full bg-primary text-primary-foreground dark:bg-brand-gold dark:text-black py-3 text-xs font-bold uppercase tracking-widest rounded-none">
                {isPending ? 'Adding...' : product.availableForSale ? 'Add to Cart' : 'Out of Stock'}
            </Button>
        </div>
    </Card>
  );
}
