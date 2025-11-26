import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center text-white bg-black">
        <Image
          src="https://i.ibb.co/7JSqxcp8/Untitled-1344-x-335-px.png"
          alt="About LaVie Cosmetics"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl caveat-heading">About LaVie</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-4xl font-serif text-primary dark:text-brand-gold mb-4">The Heart of Brazilian Haircare in Egypt</h2>
            <p className="lead">
              LAVIE is the official and exclusive distributor of La Vie Professional Brazil in Egypt. We are passionate about bringing authentic Brazilian hair technology to the heart of the local market, ensuring certified quality and transformative results for every hair type.
            </p>
            <p>
              Our journey began with a simple mission: to introduce the secrets of Brazilian hair rituals to Egypt. We believe in the power of nature, which is why our products are formulated with luxurious, sustainably sourced ingredients like plant-based keratin, Buriti oil, and nourishing natural spices. We combine these potent botanicals with cutting-edge science to create professional-grade treatments that deliver visible, long-lasting results.
            </p>
            <p>
              At LAVIE, we are more than just a distributor; we are a community of hair enthusiasts dedicated to celebrating beauty in all its forms. Whether you're a salon professional seeking the best for your clients or someone looking to achieve salon-quality results at home, we are here to support you on your journey to healthy, beautiful hair.
            </p>
          </div>
          <div className="w-full h-auto aspect-square relative rounded-lg overflow-hidden shadow-xl">
             <Image
                src="https://i.ibb.co/S7BC7SGt/design.png"
                alt="LaVie Products"
                layout="fill"
                objectFit="cover"
             />
          </div>
        </div>
      </section>
    </div>
  );
}
