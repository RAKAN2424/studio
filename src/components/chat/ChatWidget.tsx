"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import ChatInterface from "./ChatInterface";
import Image from 'next/image';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="fixed bottom-6 right-6 z-40">
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="group relative flex items-center justify-center w-20 h-20 bg-brand-pink dark:bg-brand-gold rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
                    aria-label="Open AI Chat"
                >
                    <div className="absolute -top-5 -left-5 w-32 h-32">
                        <Image
                            alt="LAVIE AI"
                            loading="lazy"
                            width="128"
                            height="128"
                            className="transform group-hover:rotate-12 transition-transform duration-300"
                            src="https://i.ibb.co/0pJwVG44/Untitled-design.png"
                        />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm uppercase" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                            LAVIE AI
                        </span>
                    </div>
                </button>
            </div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent className="flex w-full flex-col p-0 sm:max-w-md">
                   <ChatInterface />
                </SheetContent>
            </Sheet>
        </>
    );
}
