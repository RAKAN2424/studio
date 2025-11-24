"use client";
import Link from 'next/link';
import { useTheme } from "next-themes";
import { ShoppingBag, Sun, Moon, User, Menu } from "lucide-react";
import { useCart } from "@/app/providers";
import { useState } from 'react';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { cart, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 w-full z-40 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-3xl font-serif font-bold tracking-wider dark:text-white text-black">
          LAVIE
        </Link>
        <nav className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest dark:text-gray-300 text-gray-700">
          <Link href="/" className="hover:text-[#805454] transition-colors">Home</Link>
          <Link href="/shop" className="hover:text-[#805454] transition-colors">Shop</Link>
          <Link href="#contact" className="hover:text-[#805454] transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-200">
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="p-2 hover:text-[#805454]"><User size={20} /></button>
          <button onClick={() => setIsCartOpen(true)} className="relative p-2 hover:text-[#805454]">
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#805454] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}><Menu size={24} /></button>
        </div>
      </div>
    </header>
  );
}