'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTransition } from 'react';
import { removeItem, updateItemQuantity } from '../_actions/cart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Line } from '@/lib/shopify/types';
import { X } from 'lucide-react';

export default function CartItemList({ lines }: { lines: Line[] }) {
  const [isPending, startTransition] = useTransition();

  const handleQuantityChange = (lineId: string, quantity: number) => {
    startTransition(async () => {
      const line = lines.find((l) => l.id === lineId);
      if (!line) return;

      const payload = {
        lineId: line.id,
        variantId: line.merchandise.id,
        quantity: quantity,
      };
      await updateItemQuantity(payload);
    });
  };
  
  return (
    <div className="space-y-4">
      {lines.map((item) => (
        <div key={item.id} className="flex gap-4 border-b pb-4">
          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded">
            <Image
              src={item.merchandise.product.featuredImage.url}
              alt={item.merchandise.product.featuredImage.altText || item.merchandise.product.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-grow">
            <Link href={`/product/${item.merchandise.product.handle}`} className="font-semibold hover:underline">
              {item.merchandise.product.title}
            </Link>
            <p className="text-sm text-muted-foreground">{item.merchandise.title}</p>
            <p className="text-sm font-medium mt-1">{item.cost.totalAmount.amount} {item.cost.totalAmount.currencyCode}</p>
            <div className="flex items-center gap-2 mt-2">
              <Input
                type="number"
                min="1"
                className="w-20 h-9"
                defaultValue={item.quantity}
                onChange={(e) => {
                  handleQuantityChange(item.id, parseInt(e.target.value));
                }}
                disabled={isPending}
              />
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground"
            onClick={() => {
              startTransition(async () => {
                await removeItem(item.id);
              });
            }}
            disabled={isPending}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      ))}
    </div>
  );
}
