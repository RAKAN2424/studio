
"use client";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const logoSrc = isMounted && theme === 'dark' 
    ? "https://i.ibb.co/jFM0BXS/Untitled-design-2.png" 
    : "https://i.ibb.co/bnrr18f/Lavie-1080-x-1080-px-1080-x-360-px.png";

  return (
    <footer id="contact" className="bg-black text-gray-300 pt-20 pb-10 border-t border-zinc-800">
      <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
           {isMounted && (
            <Image
                src={logoSrc}
                alt="LAVIE Logo"
                width={140}
                height={56}
                className="h-14 w-auto mb-4"
                priority
              />
           )}
          <p className="text-sm text-gray-400 leading-relaxed">Official distributor of La Vie Brazil. Bringing authentic Brazilian technology to Egypt. Certified quality and luxury ingredients.</p>
        </div>
        <div>
          <h4 className="font-serif text-xl mb-6 text-white dark:text-brand-gold">Contact</h4>
          <ul className="text-sm text-gray-400 space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-primary dark:text-brand-gold mt-1 shrink-0" />
              <span>P7 Tower - Office 211 - Podium 7<br/>Cairo Festival City - New Cairo</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary dark:text-brand-gold" />
              <a href="tel:+201097230130" className="hover:text-white">01097230130</a>
            </li>
             <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary dark:text-brand-gold"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <a href="https://wa.me/201000025670" target='_blank' rel="noopener noreferrer" className="hover:text-white">WhatsApp: 01000025670</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary dark:text-brand-gold" />
              <a href="mailto:info@laviecosmetics-eg.com" className="hover:text-white">info@laviecosmetics-eg.com</a>
            </li>
            <li className="text-xs text-gray-500 pt-2">Working Hours: Sunday – Thursday 9 AM – 5 PM</li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-xl mb-6 text-white dark:text-brand-gold">Quick Links</h4>
          <ul className="text-sm text-gray-400 space-y-3">
            <li><Link href="/shop" className="hover:text-white transition-colors">Shop All Products</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">Best Sellers</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-xl mb-6 text-white dark:text-brand-gold">Send us a message</h4>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your Email" className="w-full bg-zinc-900 border border-zinc-700 p-3 text-sm focus:border-brand-gold outline-none rounded" />
            <textarea placeholder="Message" rows={3} className="w-full bg-zinc-900 border border-zinc-700 p-3 text-sm focus:border-brand-gold outline-none rounded"></textarea>
            <button className="bg-primary dark:bg-brand-gold text-white dark:text-black w-full py-2 font-bold text-xs uppercase tracking-widest hover:bg-opacity-80 transition-colors rounded">Send Message</button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-400">© {year} La Vie Cosmetics Egypt. Official Distributor.</p>
        <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61583012441958&mibextid=wwXIfr&rdid=IodofGDVn1mNeXfJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19DqeX73Kb%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/laviecosmetics.eg?igsh=OXFnZGpseXJyMmh1" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
        </div>
        <p className="text-[10px] text-gray-500 uppercase tracking-widest">Cruelty-Free | Paraben-Free | Made in Brazil</p>
      </div>
    </footer>
  );
}
