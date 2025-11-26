"use client";

import { useState, useEffect, useRef } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import ChatInterface from "./ChatInterface";
import { cn } from "@/lib/utils";
import { Sparkles, Bot } from "lucide-react";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    const handleToggle = () => {
        setIsOpen(prev => !prev);
    };

    if (!isMounted) return null;

    return (
        <>
            <button
                ref={buttonRef}
                onClick={handleToggle}
                className={cn(
                    "fixed bottom-6 right-6 z-40 bg-primary dark:bg-brand-gold text-white dark:text-black p-4 rounded-full shadow-xl hover:scale-105 transition-transform duration-300 flex items-center gap-2",
                    isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                )}
                aria-label="Toggle AI Chat"
            >
                <Sparkles />
                <span className="font-bold text-sm">Hair AI</span>
            </button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent 
                    className="flex w-full flex-col p-0 sm:max-w-md bg-background" 
                    onInteractOutside={(e) => {
                        if (buttonRef.current?.contains(e.target as Node)) {
                           e.preventDefault();
                        }
                    }}
                >
                   <ChatInterface />
                </SheetContent>
            </Sheet>
        </>
    );
}
