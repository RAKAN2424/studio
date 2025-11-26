
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';
import { useCart, CartItem } from '@/hooks/use-cart';

export default function CartItemList({ lines }: { lines: CartItem[] }) {
  const { updateQuantity, removeItem } = useCart();

  const handleQuantityChange = (productId: string, quantity: number) => {
    updateQuantity(productId, quantity);
  };
  
  return (
    <div className="space-y-4">
      {lines.map((item) => (
        <div key={item.id} className="flex gap-4 border-b pb-4">
          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-grow">
            <Link href={`/product/${item.id}`} className="font-semibold hover:underline">
              {item.name}
            </Link>
            <p className="text-sm font-medium mt-1">{item.price} EGP</p>
            <div className="flex items-center gap-2 mt-2">
              <Input
                type="number"
                min="1"
                className="w-20 h-9"
                value={item.quantity}
                onChange={(e) => {
                  handleQuantityChange(item.id, parseInt(e.target.value));
                }}
              />
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground"
            onClick={() => removeItem(item.id)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      ))}
    </div>
  );
}

    