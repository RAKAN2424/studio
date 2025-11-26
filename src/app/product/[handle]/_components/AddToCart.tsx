
'use client';

import { Button } from '@/components/ui/button';
import { ProductVariant } from '@/lib/shopify/types';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { products } from '@/lib/products';
import { useParams } from 'next/navigation';

export function AddToCart({ variants }: { variants: ProductVariant[] }) {
  const { addItem } = useCart();
  const { toast } = useToast();
  const params = useParams();
  const product = products.find(p => p.handle === params.handle);
  
  const handleAddToCart = () => {
    if (!product) return;
    
    addItem({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price),
      quantity: 1,
      image: product.image,
    });

    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const isAvailable = product ? product.availableForSale : false;

  return (
    <Button onClick={handleAddToCart} disabled={!isAvailable}>
      {isAvailable ? 'Add to Cart' : 'Out of Stock'}
    </Button>
  );
}

    