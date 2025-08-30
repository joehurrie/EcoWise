import { z } from 'genkit';

export const EcoChatbotInputSchema = z.object({
  message: z.string().describe("The user's message to the chatbot."),
});
export type EcoChatbotInput = z.infer<typeof EcoChatbotInputSchema>;

export const EcoChatbotOutputSchema = z.object({
  reply: z
    .string()
    .describe("The chatbot's helpful and friendly response."),
});
export type EcoChatbotOutput = z.infer<typeof EcoChatbotOutputSchema>;
