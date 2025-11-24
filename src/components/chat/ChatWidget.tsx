"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { MessageCircle } from "lucide-react";
import ChatInterface from "./ChatInterface";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-primary shadow-lg transition-transform hover:scale-110 hover:bg-primary/90"
                aria-label="Open chat"
            >
                <MessageCircle className="h-8 w-8 text-primary-foreground" />
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent className="flex w-full flex-col p-0 sm:max-w-md">
                   <ChatInterface />
                </SheetContent>
            </Sheet>
        </>
    );
}
