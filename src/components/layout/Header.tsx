import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingBag, User } from 'lucide-react';
import { LogoIcon } from '../icons/LogoIcon';

export function Header() {
  const navLinks = [
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <LogoIcon className="h-8 w-8 text-primary" />
          <span className="hidden font-headline text-2xl font-bold sm:inline-block">
            LaVie
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
