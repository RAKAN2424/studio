import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const PaymentPartner = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative h-12 w-24 flex items-center justify-center grayscale-[50%] hover:grayscale-0 transition-all duration-300 opacity-90 hover:opacity-100">
    <Image
      alt={alt}
      loading="lazy"
      fill
      className="object-contain"
      style={{ transform: alt === 'Meeza' ? 'scale(1.4)' : alt === 'Fawry' ? 'scale(2.5)' : (alt === 'Vodafone Cash' || alt === 'Orange Cash') ? 'scale(2.8)' : alt === 'Instapay' ? 'scale(2.6)' : 'scale(1.6)', transformOrigin: 'center' }}
      src={src}
    />
  </div>
);

export function Footer() {
  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/share/19DqeX73Kb/?mibextid=wwXIfr', icon: <Facebook /> },
    { name: 'Instagram', href: 'https://www.instagram.com/laviecosmetics.eg/#', icon: <Instagram /> },
    { name: 'Twitter', href: '#', icon: <Twitter /> },
  ];

  const quickLinks = [
    { name: 'Shop All Products', href: '/shop' },
    { name: 'Best Sellers', href: '/shop' },
    { name: 'About Us', href: '/about' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  const paymentPartners = [
    { src: 'https://i.ibb.co/9jKj8q3/New-Project.png', alt: 'Visa' },
    { src: 'https://i.ibb.co/1fmZ67Q7/New-Project-2.png', alt: 'Mastercard' },
    { src: 'https://i.ibb.co/hFRFqh6M/New-Project-3.png', alt: 'Meeza' },
    { src: 'https://i.ibb.co/HT4BqKfG/New-Project-4.png', alt: 'Fawry' },
    { src: 'https://i.ibb.co/G3tbq6tK/New-Project-5-4.png', alt: 'Vodafone Cash' },
    { src: 'https://i.ibb.co/676FkK9F/New-Project-5.png', alt: 'Instapay' },
    { src: 'https://i.ibb.co/rRDg77bY/New-Project-1.png', alt: 'Orange Cash' },
  ];

  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="text-sm">
            <Link href="/" className="mb-4 inline-block">
              <Image alt="LAVIE COSMETICS" loading="lazy" width="150" height="50" src="https://i.ibb.co/bnrr18f/Lavie-1080-x-1080-px-1080-x-360-px.png" />
            </Link>
            <p className="leading-relaxed text-gray-400">
              Official and exclusive distributor of La Vie Professional Brazil in Egypt. We bring authentic Brazilian hair technology to the heart of the local market, ensuring certified quality and transformative results.
            </p>
          </div>
          <div className="text-sm">
            <h4 className="font-serif text-xl font-bold text-white dark:text-brand-gold mb-4">Contact Info</h4>
            <ul className="space-y-4 text-gray-400 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-brand-pink dark:text-brand-gold" />
                <span>P7 Tower - Office 211 - Podium 7, Cairo Festival City - New Cairo</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 shrink-0 text-brand-pink dark:text-brand-gold" />
                <div>
                  <a href="tel:01097230130" className="hover:text-white transition-colors">01097230130</a><br/>
                  <a href="https://wa.me/201000025670" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp: 01000025670</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 shrink-0 text-brand-pink dark:text-brand-gold" />
                <a href="mailto:info@laviecosmetics-eg.com" className="hover:text-white transition-colors">info@laviecosmetics-eg.com</a>
              </li>
              <li className="text-xs text-gray-500 pt-2">Working Hours: Sunday – Thursday 9 AM – 5 PM</li>
            </ul>
          </div>
          <div className="text-sm">
            <h4 className="font-serif text-xl font-bold text-white dark:text-brand-gold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 dark:text-gray-300">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-sm">
            <h4 className="font-serif text-xl font-bold text-white dark:text-brand-gold mb-4">Send us a Message</h4>
            <form className="space-y-4">
              <Input type="email" placeholder="Your Email" required name="email" className="bg-zinc-800 border-zinc-700 text-white focus:border-brand-pink dark:focus:border-brand-gold" />
              <Textarea name="message" placeholder="Your Message" required rows={3} className="bg-zinc-800 border-zinc-700 text-white focus:border-brand-pink dark:focus:border-brand-gold" />
              <Button type="submit" className="w-full bg-brand-pink text-white rounded hover:bg-brand-pink/90 shadow-lg shadow-black/20 hover:shadow-xl transition-all dark:bg-brand-gold dark:text-black dark:hover:bg-brand-gold/90">Send Message</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 mb-8">
          <div className="max-w-xl mx-auto flex flex-col items-center justify-center">
            <h5 className="text-sm text-gray-400 mb-4">Secure Payment Partners</h5>
            <div className="flex items-center justify-center gap-x-8 gap-y-6 flex-wrap">
              {paymentPartners.map(p => <PaymentPartner key={p.alt} src={p.src} alt={p.alt} />)}
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-center md:text-left text-gray-500">
            &copy; {new Date().getFullYear()} La Vie Cosmetics Egypt. Official Distributor.
          </div>
          <div className="text-[10px] uppercase tracking-widest space-x-3 text-gray-400">
            <span>Cruelty-Free</span><span className="opacity-30">|</span><span>Paraben-Free</span><span className="opacity-30">|</span><span>Made in Brazil</span>
          </div>
          <div className="flex gap-4">
            {socialLinks.map(link => (
              <a key={link.name} href={link.href} aria-label={link.name} className="text-gray-400 hover:text-white">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
