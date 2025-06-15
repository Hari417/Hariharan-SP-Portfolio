"use server";

import { enhancePortfolioContent, type EnhancePortfolioContentInput, type EnhancePortfolioContentOutput } from '@/ai/flows/portfolio-content-enhancer';
import { z } from 'zod';

const EnhanceActionInputSchema = z.object({
  projectDescriptions: z.array(z.string().min(1, "Project description cannot be empty.")).min(1, "Please provide at least one project description."),
  aboutMeSection: z.string().min(1, "About Me section cannot be empty."),
});

export async function enhanceContentAction(
  input: EnhancePortfolioContentInput
): Promise<{ success: boolean; data?: EnhancePortfolioContentOutput; error?: string }> {
  try {
    const validatedInput = EnhanceActionInputSchema.parse(input);
    const output = await enhancePortfolioContent(validatedInput);
    return { success: true, data: output };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors.map(e => e.message).join(', ') };
    }
    console.error("Error enhancing content:", error);
    return { success: false, error: "Failed to enhance content. Please try again." };
  }
}
