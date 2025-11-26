"use server";

import { getPersonalizedHairAdvice } from "@/ai/flows/personalized-hair-advice-from-prompt";
import { productCatalogString as staticProductCatalog } from "@/lib/products";

type Message = {
    role: "user" | "assistant";
    content: string;
};

export async function getAIResponse(history: Message[]) {
    try {
        const userMessage = history[history.length - 1];
        const chatHistory = history.slice(0, history.length - 1);

        const chatHistoryString = chatHistory
            .map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`)
            .join('\n');

        const response = await getPersonalizedHairAdvice({
            userInput: userMessage.content,
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
