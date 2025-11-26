"use client";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { LogoIcon } from "../icons/LogoIcon";

type Message = {
    role: "user" | "assistant";
    content: string;
};

// Simple markdown-to-HTML conversion
const formatMessage = (content: string) => {
    return content
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n/g, '<br />');
};

export default function ChatMessage({ message }: { message: Message }) {
    const isUser = message.role === "user";

    return (
        <div className={cn("flex items-start gap-3", isUser && "justify-end")}>
            {!isUser && (
                <Avatar className="h-8 w-8 border-2 border-primary dark:border-brand-gold">
                    <AvatarFallback className="bg-primary dark:bg-brand-gold">
                       <LogoIcon className="h-4 w-4 text-primary-foreground dark:text-black" />
                    </AvatarFallback>
                </Avatar>
            )}
            <div
                className={cn(
                    "max-w-[85%] rounded-lg p-3 text-sm leading-relaxed",
                    isUser
                        ? "bg-primary dark:bg-brand-gold text-primary-foreground dark:text-black self-end rounded-br-none"
                        : "bg-white dark:bg-zinc-800 border dark:border-zinc-700 text-foreground self-start rounded-bl-none shadow-sm"
                )}
            >
                <p dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }} />
            </div>
            {isUser && (
                <Avatar className="h-8 w-8">
                    <AvatarFallback>
                        <User className="h-4 w-4" />
                    </AvatarFallback>
                </Avatar>
            )}
        </div>
    );
}
