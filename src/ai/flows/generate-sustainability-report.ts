'use server';

/**
 * @fileOverview Generates a sustainability report for a given product.
 *
 * - generateSustainabilityReport - A function that generates a sustainability report.
 * - GenerateSustainabilityReportInput - The input type for the generateSustainabilityReport function.
 * - GenerateSustainabilityReportOutput - The return type for the generateSustainabilityReport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSustainabilityReportInputSchema = z.object({
  productName: z.string().describe('The name of the product to generate a sustainability report for.'),
  productImage: z.string().optional().describe("An optional photo of a product, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
});
export type GenerateSustainabilityReportInput = z.infer<typeof GenerateSustainabilityReportInputSchema>;

const GenerateSustainabilityReportOutputSchema = z.object({
  productName: z.string().describe('The name of the product being reported on.'),
  summary: z.string().describe('A brief, one-paragraph summary of the sustainability findings.'),
  sustainabilityScore: z.number().min(0).max(100).describe('An overall sustainability score from 0 to 100, where 100 is excellent.'),
  report: z.object({
    co2Emissions: z.object({
      value: z.string().describe('Estimated CO2 emissions, e.g., "1.2 kg CO2e".'),
      rating: z.enum(['Low', 'Medium', 'High']).describe('A rating for the CO2 emissions.'),
      explanation: z.string().describe('A brief explanation of the emissions impact.'),
    }),
    packaging: z.object({
      material: z.string().describe('The primary packaging material, e.g., "Recycled Cardboard".'),
      recyclability: z.number().min(0).max(100).describe('The recyclability score from 0 to 100.'),
      explanation: z.string().describe('A brief explanation of the packaging impact.'),
    }),
    sourcing: z.object({
      ethicalPractices: z.boolean().describe('Whether the brand follows ethical sourcing practices.'),
      locality: z.string().describe('Where the product is sourced from, e.g., "Locally Sourced".'),
      explanation: z.string().describe('A brief explanation of the sourcing ethics.'),
    }),
  }),
});
export type GenerateSustainabilityReportOutput = z.infer<typeof GenerateSustainabilityReportOutputSchema>;

export async function generateSustainabilityReport(input: GenerateSustainabilityReportInput): Promise<GenerateSustainabilityReportOutput> {
  return generateSustainabilityReportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSustainabilityReportPrompt',
  input: {schema: GenerateSustainabilityReportInputSchema},
  output: {schema: GenerateSustainabilityReportOutputSchema},
  prompt: `You are an AI assistant designed to provide sustainability reports for products.

  Generate a comprehensive sustainability report for the following product. Use the provided name and image (if available) to assess its environmental impact. Provide a numerical sustainability score, and detailed information on emissions, packaging, and sourcing. Your analysis should be predictive and based on general knowledge for a product of this type.

  Product Name: {{{productName}}}
  {{#if productImage}}
  Product Image: {{media url=productImage}}
  {{/if}}
  `,
});

const generateSustainabilityReportFlow = ai.defineFlow(
  {
    name: 'generateSustainabilityReportFlow',
    inputSchema: GenerateSustainabilityReportInputSchema,
    outputSchema: GenerateSustainabilityReportOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
