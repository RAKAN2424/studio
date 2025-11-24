'use server';

/**
 * @fileOverview This file implements a Genkit flow that utilizes chat history
 * to provide personalized and relevant follow-up recommendations to the user.
 *
 * - utilizeChatHistoryForPersonalizedRecommendations - A function that takes user input and chat history,
 *   and returns personalized hair care advice and product recommendations based on the context.
 * - UtilizeChatHistoryForPersonalizedRecommendationsInput - The input type for the utilizeChatHistoryForPersonalizedRecommendations function.
 * - UtilizeChatHistoryForPersonalizedRecommendationsOutput - The return type for the utilizeChatHistoryForPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const UtilizeChatHistoryForPersonalizedRecommendationsInputSchema = z.object({
  userInput: z.string().describe('The latest user input in the conversation.'),
  chatHistory: z.array(z.object({
    role: z.enum(['user', 'assistant']),
    content: z.string(),
  })).describe('The history of the conversation between the user and the AI.'),
});
export type UtilizeChatHistoryForPersonalizedRecommendationsInput = z.infer<typeof UtilizeChatHistoryForPersonalizedRecommendationsInputSchema>;

const UtilizeChatHistoryForPersonalizedRecommendationsOutputSchema = z.object({
  recommendation: z.string().describe('Personalized hair care advice and product recommendations based on the conversation history.'),
});
export type UtilizeChatHistoryForPersonalizedRecommendationsOutput = z.infer<typeof UtilizeChatHistoryForPersonalizedRecommendationsOutputSchema>;

export async function utilizeChatHistoryForPersonalizedRecommendations(
    input: UtilizeChatHistoryForPersonalizedRecommendationsInput
): Promise<UtilizeChatHistoryForPersonalizedRecommendationsOutput> {
  return utilizeChatHistoryForPersonalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'utilizeChatHistoryForPersonalizedRecommendationsPrompt',
  input: {schema: UtilizeChatHistoryForPersonalizedRecommendationsInputSchema},
  output: {schema: UtilizeChatHistoryForPersonalizedRecommendationsOutputSchema},
  prompt: `You are a helpful AI hair consultant. Your goal is to provide personalized hair care advice and product recommendations to the user based on their current input and previous conversation history.

Here is the conversation history:
{{#each chatHistory}}
  {{#if (eq role \"user\")}}User:{{else}}AI:{{/if}} {{content}}
{{/each}}

Based on the conversation history and the user's latest input: {{{userInput}}}, what is your recommendation?`,
});

const utilizeChatHistoryForPersonalizedRecommendationsFlow = ai.defineFlow(
    {
      name: 'utilizeChatHistoryForPersonalizedRecommendationsFlow',
      inputSchema: UtilizeChatHistoryForPersonalizedRecommendationsInputSchema,
      outputSchema: UtilizeChatHistoryForPersonalizedRecommendationsOutputSchema,
    },
    async input => {
      const {output} = await prompt(input);
      return output!;
    }
);
