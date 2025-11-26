"use server";

import { getPersonalizedHairAdvice } from "@/ai/flows/personalized-hair-advice-from-prompt";
import { productCatalogString as staticProductCatalog } from "@/lib/products";

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

        // Simple check to pass something for hairType/hairConcerns
        // A more sophisticated implementation could parse this from the message.
        const userInput = currentUserMessage.content;

        const response = await getPersonalizedHairAdvice({
            hairType: userInput,
            hairConcerns: userInput,
            productCatalog: staticProductCatalog,
            chatHistory: chatHistoryString,
        });

        const formattedResponse = `${response.advice}\n\n**Product Recommendations:**\n${response.productRecommendations}`;

        return { data: formattedResponse };
    } catch (error) {
        console.error("Error getting AI response:", error);
        return { error: "I'm sorry, I encountered an error. Please try again." };
    }
}
