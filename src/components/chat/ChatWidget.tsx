
"use client";

import { useState, useEffect, useRef } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import ChatInterface from "./ChatInterface";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <>
            <button
                ref={buttonRef}
                onClick={handleToggle}
                className="fixed bottom-24 right-6 z-40 bg-brand-pink dark:bg-brand-gold text-white dark:text-black p-4 rounded-full shadow-xl hover:scale-105 transition-transform duration-300 flex items-center gap-2"
                style={{ opacity: isOpen ? 0.8 : 1 }}
                aria-label="Toggle AI Chat"
            >
                <Sparkles />
                <span className="font-bold text-sm">Hair AI</span>
            </button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent className="flex w-full flex-col p-0 sm:max-w-md" onInteractOutside={() => setIsOpen(false)}>
                   <ChatInterface />
                </SheetContent>
            </Sheet>
        </>
    );
}
