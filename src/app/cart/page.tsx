
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';
import CartItemList from './_components/CartItemList';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function CartPage() {
    const { items, total } = useCart();

    if (items.length === 0) {
        return (
          <div className="container mx-auto px-4 py-12 text-center pt-32">
            <h1 className="text-3xl font-bold mb-4 caveat-heading">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Button asChild>
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        );
    }

    return (
      <div className="container mx-auto px-4 py-12 pt-32">
        <h1 className="text-4xl font-bold mb-8 text-center caveat-heading">Your Cart</h1>
        <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
                <CartItemList lines={items as any} />
            </div>
            <div className="md:col-span-1">
                 <Card>
                    <CardHeader>
                        <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>{total.toFixed(2)} EGP</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>Calculated at checkout</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>{total.toFixed(2)} EGP</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" size="lg">Proceed to Checkout</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
      </div>
    );
}

    