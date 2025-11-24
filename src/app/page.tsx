"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCart } from './providers';
import { BEST_SELLERS } from '@/lib/data';

const SLIDES = [
    { type: 'video', src: 'https://res.cloudinary.com/dvuzdllda/video/upload/v1763793653/sahrana_clip_-2_dkc9rj.mp4', title: "La Vie Professional", subtitle: "Global Brazilian Haircare Arrives in Egypt", cta: "Shop La Vie Protein", link: "/shop" },
    { type: 'image', src: 'https://i.ibb.co/DH0qmKXR/Untitled-16-x-9-in.png', title: "La Vie Shine & Repair", subtitle: "Revive your glow with instant nourishment.", cta: "Shop Shine Spray", link: "/shop" },
    { type: 'image', src: 'https://i.ibb.co/DH0qmKXR/Untitled-16-x-9-in.png', title: "La Vie Keratin Shield", subtitle: "Protect your hair from heat and humidity.", cta: "Shop Keratin Spray", link: "/shop" },
    { type: 'image', src: 'https://i.ibb.co/qM2J5hQD/hero2.png', title: "La Vie Deep Hair Mask", subtitle: "Intense repair meets luxury care.", cta: "Shop Hair Mask", link: "/shop" }
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    const timer = setTimeout(() => setCurrent((p) => (p + 1) % SLIDES.length), 6000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <main>
      <Header />
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {SLIDES.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
            {slide.type === 'video' ? (
              <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60"><source src={slide.src} /></video>
            ) : (
              <img src={slide.src} alt={slide.title} className="w-full h-full object-cover opacity-60" />
            )}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-black/30">
              <h2 className="font-['Caveat'] text-4xl md:text-5xl text-[#805454] mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">{slide.subtitle}</h2>
              <h1 className="font-serif text-5xl md:text-7xl text-white mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">{slide.title}</h1>
              <Link href={slide.link} className="px-8 py-3 bg-[#805454] text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all animate-in fade-in zoom-in duration-500 delay-500">
                {slide.cta}
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CERTIFICATE */}
      <div className="py-8 bg-gray-50 dark:bg-zinc-900 text-center border-b border-gray-200 dark:border-gray-800">
        <p className="text-sm font-bold text-[#805454] tracking-widest uppercase">Authorized Distributor Certificate – La Vie Egypt</p>
        <p className="text-xs text-gray-500 mt-2">Authentic products imported directly from Tecso Cosméticos, Brazil.</p>
      </div>

      {/* BEST SELLERS */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12 dark:text-white text-black">Top Best Sellers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {BEST_SELLERS.map((product) => (
            <div key={product.id} className="text-center group cursor-pointer">
              <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg bg-gray-100 dark:bg-zinc-800">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                <button onClick={() => addToCart(product)} className="absolute bottom-0 left-0 w-full bg-[#805454] text-white py-2 text-xs font-bold uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300">Add to Cart</button>
              </div>
              <h3 className="font-serif text-sm font-bold dark:text-white">{product.title}</h3>
              <p className="text-[#805454] text-sm font-bold mt-1">{product.price.toFixed(2)} EGP</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROFESSIONAL VIDEO SECTION */}
      <section className="grid md:grid-cols-2 min-h-[60vh]">
        <div className="relative bg-black">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover"><source src="https://res.cloudinary.com/dvuzdllda/video/upload/v1763790907/sahrana_clip_-1_hbr006.mp4" /></video>
        </div>
        <div className="flex items-center justify-center p-12 bg-white dark:bg-black">
          <div className="max-w-md text-center md:text-left">
            <p className="text-[#805454] uppercase tracking-widest font-bold text-sm mb-4">Professional Treatment</p>
            <h3 className="font-serif text-4xl md:text-5xl mb-6 dark:text-white text-black">Smooth & Silky Hair</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">Our Absolut Protein treatment transforms frizzy, damaged hair into sleek, mirror-like strands. Infused with authentic Brazilian ingredients.</p>
            <Link href="/shop" className="px-8 py-3 border border-[#805454] text-[#805454] hover:bg-[#805454] hover:text-white transition-colors font-bold uppercase tracking-widest inline-block">Shop Now</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}