"use client";

import { useState, useEffect, useRef } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import ChatInterface from "./ChatInterface";
import { cn } from "@/lib/utils";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [showCloseBtn, setShowCloseBtn] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleOpen = () => {
        setIsOpen(true);
        setShowCloseBtn(true);
        if (buttonRef.current) {
            buttonRef.current.classList.remove('pulse');
            buttonRef.current.style.opacity = '0.8';
        }
    };

    const handleClose = () => {
        setIsOpen(false);
        setShowCloseBtn(false);
        if (buttonRef.current) {
            buttonRef.current.style.opacity = '1';
        }
    };

    useEffect(() => {
        const button = buttonRef.current;
        const removePulse = () => button?.classList.remove('pulse');
        
        button?.addEventListener('mouseenter', removePulse, { once: true });

        return () => {
            button?.removeEventListener('mouseenter', removePulse);
        };
    }, []);

    return (
        <>
            <div className="ai-chat-widget">
                <button 
                    className={cn("chat-close-btn", { 'visible': showCloseBtn })}
                    onClick={handleClose} 
                    aria-label="Close chat"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                
                <button 
                    ref={buttonRef}
                    className="ai-chat-button pulse" 
                    onClick={handleOpen} 
                    aria-label="Open LAVIE AI Assistant"
                >
                    <span className="chat-button-text">
                        <span className="brand-name">LAVIE</span>
                        <span className="ai-badge">AI</span>
                    </span>
                </button>
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent className="flex w-full flex-col p-0 sm:max-w-md" onInteractOutside={handleClose}>
                   <ChatInterface />
                </SheetContent>
            </Sheet>
        </>
    );
}
