import Link from 'next/link';
import { LogoIcon } from '../icons/LogoIcon';
import { Button } from '../ui/button';

// A simple SVG for social icons to avoid adding a new library
const SocialIcon = ({ path }: { path: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d={path} /></svg>
);


export function Footer() {
  const socialLinks = [
    { name: 'Facebook', href: '#', iconPath: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
    { name: 'Instagram', href: '#', iconPath: "M10 1.011a9.98 9.98 0 0 1 4 0c3.806.753 6.247 4.195 6.989 7.999.03.197.03.403 0 .6a9.98 9.98 0 0 1-4 4c-3.806.753-8.209.753-12 0a9.98 9.98 0 0 1-4-4c-.753-3.806-.753-8.209 0-12a9.98 9.98 0 0 1 4-4zm4 2.894a8 8 0 0 0-8 0 8 8 0 0 0-3.196 6.095c.015.099.015.2 0 .3a8 8 0 0 0 3.196 6.095c2.164.957 4.636.957 6.8 0a8 8 0 0 0 3.196-6.095c-.015-.099-.015-.2 0-.3a8 8 0 0 0-3.196-6.095zM12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-2.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" },
    { name: 'Twitter', href: '#', iconPath: "M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 4.9s-1.5-.8-3.3-.8c0 0-1.5 2.1-3.3 2.1s-3.3-2.1-3.3-2.1c-1.8 0-3.3.8-3.3.8s1.6-3.5 3.3-4.9c-1.3-1.3-2-3.4-2-3.4s2.8-.8 4.9 1.4c2.1-2.1 4.9-1.4 4.9-1.4z" },
  ];

  const footerLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="/" className="flex items-center gap-2">
              <LogoIcon className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold">
                LaVie
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">Your beauty, our passion.</p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <a href={link.href} aria-label={link.name}>
                  <SocialIcon path={link.iconPath} />
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-muted-foreground md:flex-row">
            <div className='flex gap-4'>
                {footerLinks.map(link => (
                    <Link key={link.href} href={link.href} className='transition-colors hover:text-foreground'>
                        {link.name}
                    </Link>
                ))}
            </div>
            <p>&copy; {new Date().getFullYear()} LaVie Cosmetics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
