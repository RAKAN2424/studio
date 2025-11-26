"use server";

import { getPersonalizedHairAdvice } from "@/ai/flows/personalized-hair-advice-from-prompt";
import { productCatalogString as staticProductCatalog } from "@/lib/products";

type Message = {
    role: "user" | "assistant";
    content: string;
};

export async function getAIResponse(history: Message[]) {
    try {
        const chatHistoryString = history
            .map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`)
            .join('\n');

        // The AI will determine hair type and concerns from the full context.
        const response = await getPersonalizedHairAdvice({
            hairType: "see chat history",
            hairConcerns: "see chat history",
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
