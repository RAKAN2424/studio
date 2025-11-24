"use server";

import { getPersonalizedHairAdvice } from "@/ai/flows/personalized-hair-advice-from-prompt";
import { productCatalogString } from "@/lib/products";

type Message = {
    role: "user" | "assistant";
    content: string;
};

export async function getAIResponse(history: Message[]) {
    try {
        const currentUserMessage = history.findLast(m => m.role === 'user');
        if (!currentUserMessage) {
            return { error: "No user message found." };
        }

        const chatHistoryString = history
            .slice(0, -1)
            .map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`)
            .join('\n');

        const response = await getPersonalizedHairAdvice({
            hairType: currentUserMessage.content,
            hairConcerns: currentUserMessage.content,
            productCatalog: productCatalogString,
            chatHistory: chatHistoryString,
        });

        const formattedResponse = `**Advice:**\n${response.advice}\n\n**Product Recommendations:**\n${response.productRecommendations}`;

        return { data: formattedResponse };
    } catch (error) {
        console.error("Error getting AI response:", error);
        return { error: "I'm sorry, I encountered an error. Please try again." };
    }
}
