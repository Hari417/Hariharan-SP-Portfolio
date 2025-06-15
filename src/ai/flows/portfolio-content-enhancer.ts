// use server'

/**
 * @fileOverview Enhances portfolio content using AI suggestions for wording and layout.
 *
 * - enhancePortfolioContent - Analyzes and suggests improvements for portfolio content.
 * - EnhancePortfolioContentInput - The input type for the enhancePortfolioContent function.
 * - EnhancePortfolioContentOutput - The return type for the enhancePortfolioContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhancePortfolioContentInputSchema = z.object({
  projectDescriptions: z.array(z.string()).describe('Project descriptions to be enhanced.'),
  aboutMeSection: z.string().describe('About Me section content to be enhanced.'),
});
export type EnhancePortfolioContentInput = z.infer<typeof EnhancePortfolioContentInputSchema>;

const EnhancePortfolioContentOutputSchema = z.object({
  enhancedProjectDescriptions: z.array(z.string()).describe('Enhanced project descriptions.'),
  enhancedAboutMeSection: z.string().describe('Enhanced About Me section content.'),
  layoutSuggestions: z.string().describe('Suggestions for improving the portfolio layout.'),
});
export type EnhancePortfolioContentOutput = z.infer<typeof EnhancePortfolioContentOutputSchema>;

export async function enhancePortfolioContent(input: EnhancePortfolioContentInput): Promise<EnhancePortfolioContentOutput> {
  return enhancePortfolioContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioContentEnhancementPrompt',
  input: {schema: EnhancePortfolioContentInputSchema},
  output: {schema: EnhancePortfolioContentOutputSchema},
  prompt: `You are an AI assistant specializing in enhancing portfolio content.

  Analyze the following project descriptions and "About Me" section, providing suggestions to improve wording and overall appeal.  Also, suggest layout improvements to make the portfolio more effective.

  Project Descriptions:
  {{#each projectDescriptions}}
  - {{{this}}}
  {{/each}}

  About Me Section:
  {{{aboutMeSection}}}

  Provide enhanced versions of the project descriptions and "About Me" section, along with layout suggestions in the "layoutSuggestions" field.
  Ensure the descriptions are concise, engaging, and highlight key achievements and technologies used.  The layout suggestions should focus on improving user experience and visual appeal.
  `,
});

const enhancePortfolioContentFlow = ai.defineFlow(
  {
    name: 'enhancePortfolioContentFlow',
    inputSchema: EnhancePortfolioContentInputSchema,
    outputSchema: EnhancePortfolioContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
