
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Cart',
};

export default async function CartPage() {

    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">The cart is temporarily disabled. Please add items when the shop is live.</p>
        <Button asChild>
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
}
