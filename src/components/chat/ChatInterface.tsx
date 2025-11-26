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
      content: "Hi! I'm your Lavie Cosmetics Hair Expert. Tell me about your hair type or concerns (e.g., dry, damaged, frizzy, thinning), and I'll recommend the perfect routine using Lavie products!",
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

  const viewport = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (viewport.current) {
        viewport.current.scrollTop = viewport.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isPending]);

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
        const assistantMessage: Message = { role: "assistant", content: result.error };
        setMessages((prev) => [...prev, assistantMessage]);
      } else if (result.data) {
        const assistantMessage: Message = { role: "assistant", content: result.data };
        setMessages((prev) => [...prev, assistantMessage]);
      }
    });
  };

  return (
    <div className="flex h-full flex-col">
      <SheetHeader className="p-6 border-b">
         <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <SheetTitle className="caveat-heading text-xl text-primary dark:text-brand-gold">LaVie Hair Consultant</SheetTitle>
        </div>
        <SheetDescription className="text-xs">Get instant, personalized hair care recommendations.</SheetDescription>
      </SheetHeader>
      <ScrollArea className="flex-1" viewportRef={viewport}>
        <div className="space-y-6 p-6">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
          {isPending && (
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8 border-2 border-primary dark:border-brand-gold">
                <AvatarFallback className="bg-primary dark:bg-brand-gold">
                  <LogoIcon className="h-4 w-4 text-primary-foreground dark:text-black" />
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
      <SheetFooter className="p-4 border-t">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full items-start gap-2">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Textarea
                      placeholder="Ask about your hair..."
                      className="resize-none bg-muted focus:ring-1 focus:ring-primary dark:focus:ring-brand-gold"
                      rows={1}
                      {...field}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          if (!isPending && form.getValues('message').trim()) {
                            form.handleSubmit(onSubmit)();
                          }
                        }
                      }}
                      disabled={isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" size="icon" disabled={isPending || !form.formState.isValid} className="bg-primary text-primary-foreground dark:bg-brand-gold dark:text-black">
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </Form>
      </SheetFooter>
    </div>
  );
}
