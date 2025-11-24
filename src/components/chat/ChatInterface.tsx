"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Loader } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { getAIResponse } from "@/app/actions/chat";
import ChatMessage from "./ChatMessage";
import { useToast } from "@/hooks/use-toast";
import { LogoIcon } from "../icons/LogoIcon";

const chatSchema = z.object({
  message: z.string().min(1, "Message cannot be empty"),
});

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your LaVie AI Hair Advisor. Tell me about your hair type and any concerns you have so I can provide personalized advice.",
    },
  ]);
  const [isPending, startTransition] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof chatSchema>>({
    resolver: zodResolver(chatSchema),
    defaultValues: {
      message: "",
    },
  });

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const onSubmit = (values: z.infer<typeof chatSchema>) => {
    const userMessage: Message = { role: "user", content: values.message };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    form.reset();

    startTransition(async () => {
      const result = await getAIResponse(newMessages);
      if (result.error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error,
        });
        // Optionally remove the user's message if the call fails
        setMessages(messages);
      } else if (result.data) {
        const assistantMessage: Message = { role: "assistant", content: result.data };
        setMessages((prev) => [...prev, assistantMessage]);
      }
    });
  };

  return (
    <div className="flex h-full flex-col">
      <SheetHeader className="p-6">
        <SheetTitle className="font-headline text-2xl text-primary">LaVie AI Hair Advisor</SheetTitle>
        <SheetDescription>Get instant, personalized hair care recommendations.</SheetDescription>
      </SheetHeader>
      <ScrollArea className="flex-1" ref={scrollAreaRef}>
        <div className="space-y-6 p-6">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
          {isPending && (
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8 border-2 border-primary">
                <AvatarFallback className="bg-primary">
                  <LogoIcon className="h-4 w-4 text-primary-foreground" />
                </AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-2 rounded-lg bg-muted p-3">
                <Loader className="h-4 w-4 animate-spin" />
                <span>Thinking...</span>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <SheetFooter className="p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full items-start gap-2">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Textarea
                      placeholder="e.g., I have oily hair and struggle with frizz..."
                      className="resize-none"
                      rows={1}
                      {...field}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          form.handleSubmit(onSubmit)();
                        }
                      }}
                      disabled={isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" size="icon" disabled={isPending}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </Form>
      </SheetFooter>
    </div>
  );
}
