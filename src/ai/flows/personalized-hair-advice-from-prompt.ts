'use server';
/**
 * @fileOverview A Genkit flow for providing personalized hair care advice and product recommendations based on user input.
 *
 * - getPersonalizedHairAdvice - A function that returns hair care advice and product recommendations.
 * - PersonalizedHairAdviceInput - The input type for the getPersonalizedHairAdvice function.
 * - PersonalizedHairAdviceOutput - The return type for the getPersonalizedHairAdvice function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedHairAdviceInputSchema = z.object({
  userInput: z.string().describe("The user's latest question or statement about their hair."),
  productCatalog: z.string().describe('A catalog of available hair products from Lavie Cosmetics.'),
  chatHistory: z.string().optional().describe('The previous chat history between the user and the AI assistant.')
});
export type PersonalizedHairAdviceInput = z.infer<typeof PersonalizedHairAdviceInputSchema>;

const PersonalizedHairAdviceOutputSchema = z.object({
  advice: z.string().describe('Personalized hair care advice based on the user input.'),
  productRecommendations: z.string().describe('Specific Lavie Cosmetics product recommendations based on the user input.'),
});
export type PersonalizedHairAdviceOutput = z.infer<typeof PersonalizedHairAdviceOutputSchema>;

export async function getPersonalizedHairAdvice(input: PersonalizedHairAdviceInput): Promise<PersonalizedHairAdviceOutput> {
  return personalizedHairAdviceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedHairAdvicePrompt',
  input: {schema: PersonalizedHairAdviceInputSchema},
  output: {schema: PersonalizedHairAdviceOutputSchema},
  prompt: `You are a helpful AI assistant specializing in hair care for Lavie Cosmetics. A user will provide their latest message and the conversation history. You must analyze the full conversation to understand their hair type and concerns, then provide personalized advice and product recommendations based on their new message.

  Here is the conversation history:
  {{{chatHistory}}}

  Here is the user's new message:
  "{{{userInput}}}"

  Here is the product catalog:
  {{{productCatalog}}}

  Based on the user's new message and the entire conversation context, provide personalized hair care advice and recommend specific products from the catalog that address the user's needs.
  Make the product recommendations specific, and include the product name. The response should only include advice and product recommendations, no other conversational text.
  Format the response as follows:

  Advice: [personalized hair care advice]
  Product Recommendations: [specific product recommendations from Lavie Cosmetics]`,
});

const personalizedHairAdviceFlow = ai.defineFlow(
  {
    name: 'personalizedHairAdviceFlow',
    inputSchema: PersonalizedHairAdviceInputSchema,
    outputSchema: PersonalizedHairAdviceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
