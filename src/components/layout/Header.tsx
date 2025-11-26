
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from "next-themes";
import { ShoppingBag, Sun, Moon, User, Menu, X } from "lucide-react";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useCart } from '@/hooks/use-cart';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const headerClasses = cn(
    "fixed top-0 w-full z-40 transition-all duration-300",
    isScrolled || mobileMenuOpen
      ? "bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
      : "bg-transparent border-b border-transparent"
  );
  
  const navLinkClasses = cn(
    "hover:text-primary dark:hover:text-brand-gold transition-colors text-xs font-bold uppercase tracking-widest",
    (isScrolled || mobileMenuOpen) ? "text-gray-700 dark:text-gray-300" : "text-white"
  );
  
  const logoSrc = isMounted && theme === 'dark' 
    ? "https://i.ibb.co/jFM0BXS/Untitled-design-2.png" 
    : "https://i.ibb.co/bnrr18f/Lavie-1080-x-1080-px-1080-x-360-px.png";


  return (
    <>
    <header className={headerClasses}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className='flex-1 md:flex-none'>
            <Link href="/" className={cn("text-3xl font-serif font-bold tracking-wider", (isScrolled || mobileMenuOpen) ? "text-foreground" : "text-white")}>
                 <Image
                    src={logoSrc}
                    alt="LAVIE Logo"
                    width={140}
                    height={56}
                    className="h-14 w-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]"
                    priority
                  />
            </Link>
        </div>
        <nav className="hidden md:flex gap-8">
          <Link href="/" className={navLinkClasses}>Home</Link>
          <Link href="/shop" className={navLinkClasses}>Shop</Link>
          <a href="/#contact" className={navLinkClasses}>Contact</a>
          <Link href="/about" className={navLinkClasses}>About Us</Link>
        </nav>
        <div className="flex items-center gap-2 md:gap-4 justify-end flex-1 md:flex-none">
          {isMounted && (
            <>
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={cn("p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors", (isScrolled || mobileMenuOpen) ? "text-foreground" : "text-white")}>
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <Link href="/account" className={cn("p-2 hover:text-primary dark:hover:text-brand-gold", (isScrolled || mobileMenuOpen) ? "text-foreground" : "text-white")}><User size={20} /></Link>
              <Link href="/cart" className={cn("relative p-2 hover:text-primary dark:hover:text-brand-gold", (isScrolled || mobileMenuOpen) ? "text-foreground" : "text-white")}>
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary dark:bg-brand-gold text-white dark:text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </>
          )}
          <button className={cn("md:hidden p-2", (isScrolled || mobileMenuOpen) ? "text-foreground" : "text-white")} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24}/> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
     {/* Mobile Menu */}
     <div className={cn("fixed inset-0 z-30 bg-white/95 dark:bg-black/95 backdrop-blur-lg transition-transform duration-300 md:hidden", mobileMenuOpen ? "translate-y-0" : "-translate-y-full")}>
        <div className="container mx-auto flex flex-col justify-center items-center h-full pt-20">
            <nav className="flex flex-col items-center gap-8 text-lg font-bold uppercase tracking-widest text-foreground">
                <Link href="/" className="hover:text-primary dark:hover:text-brand-gold" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link href="/shop" className="hover:text-primary dark:hover:text-brand-gold" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
                <a href="/#contact" className="hover:text-primary dark:hover:text-brand-gold" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                <Link href="/about" className="hover:text-primary dark:hover:text-brand-gold" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            </nav>
        </div>
    </div>
    </>
  );
}
