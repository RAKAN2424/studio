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
        .replace(/\n/g, '<br />');
};

export default function ChatMessage({ message }: { message: Message }) {
    const isUser = message.role === "user";

    return (
        <div className={cn("flex items-start gap-3", isUser && "justify-end")}>
            {!isUser && (
                <Avatar className="h-8 w-8 border-2 border-primary">
                    <AvatarFallback className="bg-primary">
                       <LogoIcon className="h-4 w-4 text-primary-foreground" />
                    </AvatarFallback>
                </Avatar>
            )}
            <div
                className={cn(
                    "max-w-[80%] rounded-lg p-3 text-sm",
                    isUser
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
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
