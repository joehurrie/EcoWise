'use server';

/**
 * @fileOverview An AI chatbot to help users make environmentally friendly shopping decisions, powered by Inflection AI.
 *
 * - ecoChatbot - A function that provides responses for the EcoBot.
 */

import type { EcoChatbotInput, EcoChatbotOutput } from '@/types/eco-chatbot';
import {
  EcoChatbotInputSchema,
  EcoChatbotOutputSchema,
} from '@/types/eco-chatbot';

export async function ecoChatbot(
  input: EcoChatbotInput
): Promise<EcoChatbotOutput> {
  const validation = EcoChatbotInputSchema.safeParse(input);
  if (!validation.success) {
    throw new Error('Invalid input for ecoChatbot');
  }

  const { message } = validation.data;

  try {
    const response = await fetch(
      'https://api.inflection.ai/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.INFLECTION_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'Pi-3.1',
          messages: [
            {
              role: 'system',
              content:
                'You are a warm, eco-conscious shopping assistant who helps users make sustainable choices with empathy and clarity.',
            },
            { role: 'user', content: message },
          ],
          temperature: 0.7,
        }),
      }
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Inflection API Error:', errorBody);
      throw new Error(`Inflection API responded with status ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;

    if (!reply) {
      throw new Error('No reply from Inflection API');
    }

    const outputValidation = EcoChatbotOutputSchema.safeParse({ reply });
    if (!outputValidation.success) {
      throw new Error('Invalid output from Inflection API');
    }

    return outputValidation.data;
  } catch (error) {
    console.error('Failed to call Inflection AI API:', error);
    throw new Error('Failed to get a response from the chatbot.');
  }
}
