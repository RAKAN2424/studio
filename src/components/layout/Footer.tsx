"use client";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="bg-gray-100 dark:bg-zinc-950 pt-20 pb-10 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 mb-16">
        <div>
          <h4 className="font-serif text-2xl mb-6 dark:text-white text-black font-bold">La Vie Cosmetics</h4>
          <p className="text-sm text-gray-500 leading-relaxed">Official distributor of La Vie Brazil. Bringing authentic Brazilian technology to Egypt. Certified quality and luxury ingredients.</p>
        </div>
        <div>
          <h4 className="font-serif text-xl mb-6 dark:text-white text-black">Contact</h4>
          <ul className="text-sm text-gray-500 space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#805454] mt-1 shrink-0" />
              <span>P7 Tower - Office 211 - Podium 7<br/>Cairo Festival City - New Cairo</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#805454]" />
              <a href="tel:01097230130" className="hover:text-[#805454]">01097230130</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#805454]" />
              <a href="mailto:info@laviecosmetics-eg.com" className="hover:text-[#805454]">info@laviecosmetics-eg.com</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-xl mb-6 dark:text-white text-black">Quick Links</h4>
          <ul className="text-sm text-gray-500 space-y-3">
            <li><a href="/shop" className="hover:text-[#805454] transition-colors">Shop All Products</a></li>
            <li><a href="#" className="hover:text-[#805454] transition-colors">Best Sellers</a></li>
            <li><a href="#" className="hover:text-[#805454] transition-colors">About Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-xl mb-6 dark:text-white text-black">Send us a message</h4>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your Email" className="w-full bg-white dark:bg-zinc-900 border border-gray-300 dark:border-gray-700 p-3 text-sm focus:border-[#805454] outline-none rounded" />
            <textarea placeholder="Message" rows={3} className="w-full bg-white dark:bg-zinc-900 border border-gray-300 dark:border-gray-700 p-3 text-sm focus:border-[#805454] outline-none rounded"></textarea>
            <button className="bg-[#805454] text-white w-full py-2 font-bold text-xs uppercase tracking-widest hover:bg-black dark:hover:bg-white dark:hover:text-black transition-colors rounded">Send Message</button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-400">© {year} La Vie Cosmetics Egypt. Official Distributor.</p>
        <p className="text-[10px] text-gray-500 uppercase tracking-widest">Cruelty-Free | Paraben-Free | Made in Brazil</p>
      </div>
    </footer>
  );
}
