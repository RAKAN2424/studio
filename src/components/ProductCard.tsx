
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/products';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent link navigation
    toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart.`,
    });
    // Here you would typically call an action to add the item to the cart
    // For now, we just show a toast.
  };

  const productHandle = product.handle || product.id;
  const price = product.price;
  const imageUrl = product.image;

  return (
    <Card className="group overflow-hidden relative flex flex-col">
        <Link href={`/product/${productHandle}`} className='flex-grow'>
            <div className="relative aspect-[3/4] bg-gray-100 dark:bg-zinc-900">
                {imageUrl ? (
                    <Image
                    src={imageUrl}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : <div className='w-full h-full bg-muted'></div>}
                
                {product.tags && (
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.tags.split(',').slice(0, 2).map(tag => <span key={tag} className="bg-black/70 text-white text-[10px] px-2 py-1 uppercase tracking-widest font-bold backdrop-blur-sm rounded-sm">{tag.trim()}</span>)}
                  </div>
                )}
            </div>
            <CardContent className="p-4 flex-grow flex flex-col">
                <h3 className="font-serif text-lg text-foreground group-hover:text-primary dark:group-hover:text-brand-gold transition-colors flex-grow">{product.title}</h3>
                <p className="text-primary font-bold dark:text-brand-gold">{price} EGP</p>
            </CardContent>
        </Link>
        <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button 
                onClick={handleAddToCart} 
                disabled={!product.availableForSale}
                className="w-full bg-primary text-primary-foreground dark:bg-brand-gold dark:text-black py-3 text-xs font-bold uppercase tracking-widest rounded-none">
                {product.availableForSale ? 'Add to Cart' : 'Out of Stock'}
            </Button>
        </div>
    </Card>
  );
}

    