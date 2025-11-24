import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart, User, Globe, Moon } from 'lucide-react';
import Image from 'next/image';

export function Header() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/tracking', label: 'Track Order' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <nav className="hidden md:flex md:items-center md:space-x-8 w-1/3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white dark:text-brand-gold hover:text-brand-pink dark:hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex-1 flex justify-center md:w-1/3">
            <Link href="/">
              <Image
                alt="LAVIE Logo"
                width="56"
                height="56"
                className="h-14 w-14 object-contain drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]"
                src="https://i.ibb.co/xSkmkymJ/9-1.png"
              />
            </Link>
          </div>
          <div className="flex items-center justify-end space-x-3 md:space-x-4 w-1/3">
            <Button variant="ghost" size="icon" className="text-white dark:text-brand-gold hover:text-brand-pink dark:hover:text-white transition-colors">
              <Globe className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white dark:text-brand-gold hover:text-brand-pink dark:hover:text-white transition-colors">
              <Moon className="h-5 w-5" />
            </Button>
            <Link href="/cart" className="text-white dark:text-brand-gold hover:text-brand-pink dark:hover:text-white transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <Link href="/login" className="text-white dark:text-brand-gold hover:text-brand-pink dark:hover:text-white transition-colors">
              <User className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
