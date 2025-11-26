import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Facebook, Twitter } from "lucide-react";
import Image from 'next/image';

export default function AccountPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden p-4">
      {/* Desktop View */}
      <div className="hidden md:flex w-full max-w-6xl h-[70vh] min-h-[600px] relative shadow-2xl rounded-lg overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://i.ibb.co/Sg0nz8W/login-windwos.png"
            alt="Login background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-1/2 h-full relative z-10 flex items-center justify-center p-12">
            <div className="w-full max-w-sm bg-black/50 backdrop-blur-md p-8 rounded-lg">
                <AuthForm />
            </div>
        </div>
        <div className="w-1/2 h-full">
            {/* This part is covered by the image */}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full max-w-md h-auto relative flex flex-col items-center justify-center">
        <div className="w-full aspect-[9/16] relative rounded-lg overflow-hidden shadow-2xl">
            <Image 
                src="https://i.ibb.co/QvNKHd54/LOGIN-MOBILE.png"
                alt="Mobile login background"
                layout="fill"
                objectFit="cover"
                />
            <div className="absolute inset-x-0 bottom-0 top-1/2 p-8 flex items-center justify-center">
                <div className="w-full bg-black/50 backdrop-blur-md p-6 rounded-lg">
                    <AuthForm />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

function AuthForm() {
    return (
        <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-zinc-800/80">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <LoginForm />
            </TabsContent>
            <TabsContent value="register">
                <RegisterForm />
            </TabsContent>
        </Tabs>
    )
}

function LoginForm() {
  return (
    <div className="space-y-4 text-white">
        <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" className="bg-zinc-800/80 border-zinc-700"/>
        </div>
        <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" className="bg-zinc-800/80 border-zinc-700"/>
        </div>
        <Button className="w-full bg-primary dark:bg-brand-gold dark:text-black">Login</Button>
        <div className="text-center text-xs text-gray-400">or continue with</div>
        <SocialLogin />
        <div className="text-center text-xs">
            <a href="#" className="underline text-gray-400 hover:text-white">Forgot password?</a>
        </div>
    </div>
  )
}

function RegisterForm() {
    return (
        <div className="space-y-4 text-white">
            <div className="space-y-2">
                <Label htmlFor="reg-email">Email</Label>
                <Input id="reg-email" type="email" placeholder="m@example.com" className="bg-zinc-800/80 border-zinc-700"/>
            </div>
            <div className="space-y-2">
                <Label htmlFor="reg-password">Password</Label>
                <Input id="reg-password" type="password" className="bg-zinc-800/80 border-zinc-700"/>
            </div>
            <Button className="w-full bg-primary dark:bg-brand-gold dark:text-black">Register</Button>
            <div className="text-center text-xs text-gray-400">or register with</div>
            <SocialLogin />
        </div>
    )
}

function SocialLogin() {
    return (
        <div className="grid grid-cols-3 gap-2">
            <Button variant="outline" className="bg-zinc-800/80 border-zinc-700 hover:bg-zinc-700">
                <svg role="img" viewBox="0 0 24 24" className="h-4 w-4 mr-2 fill-white" xmlns="http://www.w3.org/2000/svg"><title>Google</title><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.05 1.05-2.86 3.28-4.82 3.28-5.61 0-10.21-4.4-10.21-10.21s4.6-10.21 10.21-10.21c3.28 0 5.39 1.23 6.63 2.41l2.86-2.86C19.01 1.02 15.91 0 12.48 0 5.88 0 0 5.88 0 12.48s5.88 12.48 12.48 12.48c7.04 0 12.14-4.82 12.14-12.48 0-.85-.07-1.65-.2-2.41H12.48z"/></svg>
                Google
            </Button>
            <Button variant="outline" className="bg-zinc-800/80 border-zinc-700 hover:bg-zinc-700">
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
            </Button>
            <Button variant="outline" className="bg-zinc-800/80 border-zinc-700 hover:bg-zinc-700">
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
            </Button>
        </div>
    )
}
