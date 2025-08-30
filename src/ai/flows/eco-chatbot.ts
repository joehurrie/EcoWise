'use server';

/**
 * @fileOverview An AI chatbot to help users make environmentally friendly shopping decisions.
 *
 * - ecoChatbot - A function that provides responses for the EcoBot.
 */

import { ai } from '@/ai/genkit';
import type { EcoChatbotInput, EcoChatbotOutput } from '@/types/eco-chatbot';
import {
  EcoChatbotInputSchema,
  EcoChatbotOutputSchema,
} from '@/types/eco-chatbot';

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
