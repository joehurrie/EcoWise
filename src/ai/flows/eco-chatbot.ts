'use server';

/**
 * @fileOverview An AI chatbot to help users make environmentally friendly shopping decisions.
 *
 * - ecoChatbot - A function that provides responses for the EcoBot.
 * - EcoChatbotInput - The input type for the ecoChatbot function.
 * - EcoChatbotOutput - The return type for the ecoChatbot function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const EcoChatbotInputSchema = z.object({
  message: z.string().describe('The user\'s message to the chatbot.'),
});
export type EcoChatbotInput = z.infer<typeof EcoChatbotInputSchema>;

export const EcoChatbotOutputSchema = z.object({
  reply: z
    .string()
    .describe('The chatbot\'s helpful and friendly response.'),
});
export type EcoChatbotOutput = z.infer<typeof EcoChatbotOutputSchema>;

export async function ecoChatbot(
  input: EcoChatbotInput
): Promise<EcoChatbotOutput> {
  return ecoChatbotFlow(input);
}

const ecoChatbotPrompt = ai.definePrompt({
  name: 'ecoChatbotPrompt',
  input: { schema: EcoChatbotInputSchema },
  output: { schema: EcoChatbotOutputSchema },
  prompt: `You are EcoBot, a friendly and knowledgeable AI assistant for the EcoWise app. Your goal is to help users make environmentally friendly shopping decisions.

Keep your answers concise, practical, and encouraging.

User's question: {{{message}}}
`,
});

const ecoChatbotFlow = ai.defineFlow(
  {
    name: 'ecoChatbotFlow',
    inputSchema: EcoChatbotInputSchema,
    outputSchema: EcoChatbotOutputSchema,
  },
  async (input) => {
    const { output } = await ecoChatbotPrompt(input);
    return output!;
  }
);
