import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/products';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ChatWidget from '@/components/chat/ChatWidget';
import Link from 'next/link';

export default function Home() {
  const findImage = (id: string) => {
    return PlaceHolderImages.find(img => img.id === id)?.imageUrl || `https://placehold.co/600x400?text=${id}`;
  };


  return (
    <>
      <main className="min-h-screen bg-white dark:bg-black">
        <section className="relative w-full h-screen overflow-hidden bg-black">
          {/* Slide 1 */}
          <div className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out opacity-100 z-10">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src="https://res.cloudinary.com/dvuzdllda/video/upload/v1763946531/sahrana_clip_vpslcy.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40 dark:from-black/80 dark:to-black/50 [background-image:radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.9)_100%)]"></div>
            <div className="absolute inset-0 flex flex-col justify-end pb-24 px-6 md:px-12 container mx-auto pointer-events-none z-20">
              <div className="max-w-2xl text-white pointer-events-auto">
                <span className="uppercase tracking-widest text-xs font-bold mb-4 block text-brand-green-light dark:text-gray-400">We're Here to Help</span>
                <h1 className="text-5xl md:text-7xl mb-6 leading-tight caveat-heading">Get In Touch</h1>
                <p className="text-lg md:text-xl mb-8 opacity-90 font-light leading-relaxed max-w-lg">Have questions? Our team is ready to provide expert advice and support for all your hair care needs.</p>
                <Link href="/contact">
                  <Button className="bg-brand-pink text-white dark:bg-brand-gold dark:text-black hover:opacity-90 transition-colors px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm shadow-lg shadow-black/20 hover:shadow-xl dark:shadow-brand-gold/20">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 border-b border-gray-100 dark:border-zinc-800 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <Link href="/shop">
              <Button size="lg" className="bg-brand-pink text-white dark:bg-brand-gold dark:text-black hover:opacity-90 transition-colors px-10 py-6 rounded-full font-bold uppercase tracking-wider text-lg shadow-lg shadow-black/20 hover:shadow-xl mb-16 dark:shadow-brand-gold/20">
                Shop All
              </Button>
            </Link>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
               {products.map((product) => (
                <div key={product.id} className="group flex flex-col items-center w-48 text-center cursor-pointer">
                  <Link href={`/shop/${product.id}`}>
                    <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-transparent group-hover:border-brand-pink dark:group-hover:border-brand-gold transition-all duration-300 shadow-lg group-hover:shadow-xl">
                      <Image
                        src={findImage(product.image)}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={product.image.replace('product-','')}
                      />
                    </div>
                  </Link>
                  <h3 className="mt-4 text-lg font-bold text-brand-text dark:text-brand-gold group-hover:text-brand-pink dark:group-hover:text-white transition-colors h-14 flex items-center justify-center">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{product.price}</p>
                   <Link href={`/shop/${product.id}`}>
                    <Button size="sm" className="bg-brand-pink text-white hover:opacity-90 transition-colors rounded-full px-6 py-2 text-xs uppercase tracking-wider">Shop Now</Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-[#f9f9f9] dark:bg-zinc-900 py-16 px-4 text-center border-b border-gray-200 dark:border-zinc-800">
          <h3 className="text-4xl caveat-heading mb-2">Authorized Distributor</h3>
          <p className="text-base text-gray-600 dark:text-gray-400 font-comfortaa">
            Genuine products imported directly from <span className="font-bold text-brand-text dark:text-gray-200">Tecso Cosméticos, Brazil</span>.
          </p>
        </div>

        <section className="bg-white dark:bg-black">
          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/2 relative aspect-square bg-black">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src="https://res.cloudinary.com/dvuzdllda/video/upload/v1763790907/sahrana_clip_-1_hbr006.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center p-10 md:p-20 text-center md:text-left bg-brand-pink/10 dark:bg-brand-pink/10">
              <div className="max-w-md">
                <p className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-4 text-brand-text dark:text-gray-300">Keratin Deep Conditioning</p>
                <h2 className="text-5xl md:text-6xl text-center mb-12 caveat-heading">Natural Spices Hair Mask</h2>
                <p className="text-2xl md:text-3xl text-gray-800 dark:text-gray-300 mb-8 leading-relaxed font-comfortaa">
                  Treat your hair to spa-level luxury with our exclusive formula featuring plant-based Brazilian keratin and nourishing Buriti oil.
                </p>
                <Link href="/shop/hydrating-mask">
                  <Button className="bg-brand-pink text-white dark:bg-brand-gold dark:text-black hover:opacity-90 transition-colors px-10 py-4 rounded-full font-bold text-base shadow-lg shadow-black/20 hover:shadow-xl dark:shadow-brand-gold/20">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-pink dark:bg-brand-gold py-4 overflow-hidden whitespace-nowrap">
          <div className="flex gap-8 animate-marquee text-white dark:text-black font-bold text-sm tracking-widest">
            <span>BRAZILIAN FORMULA</span><span>▪</span><span>SULFATE-FREE</span><span>▪</span><span>PROFESSIONAL QUALITY</span><span>▪</span><span>BRAZILIAN FORMULA</span><span>▪</span><span>SULFATE-FREE</span><span>▪</span><span>PROFESSIONAL QUALITY</span><span>▪</span>
          </div>
        </section>
      </main>

      <a target="_blank" rel="noopener noreferrer" className="fixed bottom-6 left-6 z-50 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 transform hover:scale-110 animate-pulse" style={{backgroundColor: '#25D366'}} aria-label="Chat on WhatsApp" href="https://wa.me/201000025670">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" style={{color: 'white'}} className="w-8 h-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
        </svg>
      </a>

      <ChatWidget />
    </>
  );
}
