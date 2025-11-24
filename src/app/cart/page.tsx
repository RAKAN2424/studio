import { getCart } from '@/lib/shopify';
import { cookies } from 'next/headers';
import CartItemList from './_components/CartItemList';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Cart',
};

export default async function CartPage() {
  const cartId = cookies().get('cartId')?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  if (!cart || cart.lines.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild>
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <CartItemList lines={cart.lines} />
        </div>
        <div className="border rounded-lg p-6 h-fit">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>{cart.cost.subtotalAmount.amount} {cart.cost.subtotalAmount.currencyCode}</span>
          </div>
          <div className="flex justify-between mb-2 text-muted-foreground">
            <span>Taxes</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="flex justify-between mb-6 text-muted-foreground">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>{cart.cost.totalAmount.amount} {cart.cost.totalAmount.currencyCode}</span>
            </div>
          </div>
          <Button asChild className="w-full mt-6">
            <a href={cart.checkoutUrl}>Proceed to Checkout</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
