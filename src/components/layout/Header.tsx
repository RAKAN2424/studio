import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCartIcon, UserIcon } from 'lucide-react';
import { cookies } from 'next/headers';
import { getCart } from '@/lib/shopify';

export async function Header() {
  const cartId = cookies().get('cartId')?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  const cartQuantity = cart?.lines.reduce((acc, item) => acc + item.quantity, 0) || 0;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="text-lg font-bold">Store</Link>
          <Link href="/shop" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Shop
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
            About
          </Link>
          <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Contact
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/account">
              <UserIcon className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart" className="relative">
              <ShoppingCartIcon className="h-5 w-5" />
              {cartQuantity > 0 && (
                 <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {cartQuantity}
                </span>
              )}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
