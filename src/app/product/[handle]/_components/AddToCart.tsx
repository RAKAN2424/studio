'use client';

import { addItem } from '@/app/cart/_actions/cart';
import { Button } from '@/components/ui/button';
import { ProductVariant } from '@/lib/shopify/types';
import { useSearchParams, useRouter } from 'next/navigation';
import { useTransition } from 'react';

export function AddToCart({ variants }: { variants: ProductVariant[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );
  const selectedVariantId = variant?.id || defaultVariantId;
  const isAvailable = variant ? variant.availableForSale : variants[0]?.availableForSale;

  const handleAddToCart = () => {
    if (!selectedVariantId) return;

    startTransition(async () => {
      const error = await addItem(selectedVariantId);

      if (error) {
        // Handle error (e.g., show a toast)
        console.error(error);
        return;
      }
      // Optionally, you can redirect to the cart or show a success message.
      router.push('/cart');
    });
  };

  return (
    <Button onClick={handleAddToCart} disabled={!isAvailable || isPending}>
      {isPending ? 'Adding...' : isAvailable ? 'Add to Cart' : 'Out of Stock'}
    </Button>
  );
}
