"use client";
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCart } from '../providers';
import { PRODUCTS } from '@/lib/data';
import { Product } from '@/lib/types';

export default function ShopPage() {
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif mb-4 dark:text-white text-black">Shop Collection</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Discover our premium Brazilian hair care solutions. Professional formulas for home and salon use.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product: Product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-[3/4] bg-gray-100 dark:bg-zinc-900 mb-4 overflow-hidden rounded-sm">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                {product.tags && (
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.tags.map(tag => <span key={tag} className="bg-black/70 text-white text-[10px] px-2 py-1 uppercase tracking-widest font-bold backdrop-blur-sm">{tag}</span>)}
                  </div>
                )}
                <button onClick={() => addToCart(product)} className="absolute bottom-0 left-0 w-full bg-[#805454] text-white py-3 text-xs font-bold uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300">Add to Cart</button>
              </div>
              <h3 className="font-serif text-lg dark:text-white text-black group-hover:text-[#805454] transition-colors">{product.title}</h3>
              <p className="text-[#805454] font-bold">{product.price.toFixed(2)} EGP</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}