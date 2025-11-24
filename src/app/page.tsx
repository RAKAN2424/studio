import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import { products } from '@/lib/products';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ChatWidget from '@/components/chat/ChatWidget';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  const featuredProducts = products.slice(0, 4);

  const getProductImage = (imageId: string) => {
    return PlaceHolderImages.find(p => p.id === imageId);
  }

  return (
    <>
      <div className="flex flex-col">
        <section className="relative h-[60vh] w-full">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <h1 className="font-headline text-4xl font-bold md:text-6xl" style={{color: 'hsl(var(--primary))'}}>Your Personal Hair Stylist</h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground">
              Discover the perfect hair care routine and products tailored just for you with our AI-powered advisor.
            </p>
            <Button size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
              Explore Products
            </Button>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-center font-headline text-3xl font-bold text-primary md:text-4xl">
              Featured Products
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Handpicked selections from our collection to give your hair the love it deserves.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => {
                const productImage = getProductImage(product.image);
                return (
                  <Card key={product.id} className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
                     {productImage && (
                      <div className="relative h-64 w-full">
                        <Image
                          src={productImage.imageUrl}
                          alt={product.name}
                          width={400}
                          height={500}
                          className="h-full w-full object-cover"
                          data-ai-hint={productImage.imageHint}
                        />
                      </div>
                    )}
                    <CardContent className="flex flex-1 flex-col p-4">
                      <CardTitle className="font-headline text-xl text-primary">{product.name}</CardTitle>
                      <CardDescription className="mt-2 flex-1">{product.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <div className="flex w-full items-center justify-between">
                        <span className="font-bold">{product.price}</span>
                        <Button variant="outline">Add to Cart</Button>
                      </div>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <ChatWidget />
    </>
  );
}
