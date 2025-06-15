"use client";

import { useState, type FormEvent } from 'react';
import { Wand2, Sparkles, Loader2, AlertTriangle, Trash2, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input'; // Using Input for project titles as an example
import { Label } from '@/components/ui/label';
import { enhanceContentAction } from '@/lib/actions';
import type { EnhancePortfolioContentOutput } from '@/ai/flows/portfolio-content-enhancer';
import { useToast } from '@/hooks/use-toast';

interface ProjectInput {
  id: string;
  description: string;
}

export default function AiAssistantSection() {
  const [projectInputs, setProjectInputs] = useState<ProjectInput[]>([{ id: crypto.randomUUID(), description: '' }]);
  const [aboutMe, setAboutMe] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<EnhancePortfolioContentOutput | null>(null);
  const { toast } = useToast();

  const handleAddProject = () => {
    setProjectInputs([...projectInputs, { id: crypto.randomUUID(), description: '' }]);
  };

  const handleRemoveProject = (id: string) => {
    setProjectInputs(projectInputs.filter(p => p.id !== id));
  };

  const handleProjectDescriptionChange = (id: string, value: string) => {
    setProjectInputs(projectInputs.map(p => p.id === id ? { ...p, description: value } : p));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setResults(null);

    const projectDescriptions = projectInputs.map(p => p.description).filter(desc => desc.trim() !== '');

    if (projectDescriptions.length === 0) {
        toast({
            title: "Validation Error",
            description: "Please provide at least one project description.",
            variant: "destructive",
        });
        setIsLoading(false);
        return;
    }
    if (aboutMe.trim() === '') {
         toast({
            title: "Validation Error",
            description: "About Me section cannot be empty.",
            variant: "destructive",
        });
        setIsLoading(false);
        return;
    }

    const response = await enhanceContentAction({
      projectDescriptions,
      aboutMeSection: aboutMe,
    });

    setIsLoading(false);
    if (response.success && response.data) {
      setResults(response.data);
      toast({
        title: "Content Enhanced!",
        description: "AI suggestions have been generated successfully.",
      });
    } else {
      toast({
        title: "Error",
        description: response.error || "An unknown error occurred.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="ai-assistant" className="py-16 md:py-24 bg-background dark:bg-muted/20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Wand2 className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl font-headline font-bold sm:text-4xl text-primary dark:text-primary-foreground/90">AI Content Assistant</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Let AI help you refine your portfolio content for maximum impact.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Enhance Your Content</CardTitle>
            <CardDescription>
              Enter your current project descriptions and "About Me" section. Our AI will provide suggestions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Label className="text-lg font-medium flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-accent" />
                  Project Descriptions
                </Label>
                {projectInputs.map((project, index) => (
                  <div key={project.id} className="space-y-2 p-3 border rounded-md relative">
                    <Label htmlFor={`project-desc-${index}`}>Project Description {index + 1}</Label>
                    <Textarea
                      id={`project-desc-${index}`}
                      value={project.description}
                      onChange={(e) => handleProjectDescriptionChange(project.id, e.target.value)}
                      placeholder={`Describe project ${index + 1}...`}
                      rows={4}
                      required
                      className="resize-none"
                    />
                    {projectInputs.length > 1 && (
                       <Button 
                        type="button" 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleRemoveProject(project.id)}
                        className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"
                        aria-label="Remove project description"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button type="button" variant="outline" onClick={handleAddProject} className="mt-2">
                  <PlusCircle className="h-4 w-4 mr-2" /> Add Another Project
                </Button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="about-me" className="text-lg font-medium flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-accent" />
                  About Me Section
                </Label>
                <Textarea
                  id="about-me"
                  value={aboutMe}
                  onChange={(e) => setAboutMe(e.target.value)}
                  placeholder="Tell us about yourself..."
                  rows={6}
                  required
                  className="resize-none"
                />
              </div>

              <Button type="submit" disabled={isLoading} className="w-full text-lg py-3">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Enhancing...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-5 w-5" /> Enhance Content
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {results && (
          <div className="mt-12 max-w-3xl mx-auto space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-primary" /> Enhanced Project Descriptions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {results.enhancedProjectDescriptions.map((desc, index) => (
                  <div key={index} className="p-4 border rounded-md bg-secondary/50 dark:bg-card-foreground/5">
                    <h4 className="font-semibold mb-1">Suggestion for Project {index + 1}:</h4>
                    <p className="text-sm whitespace-pre-wrap">{desc}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-primary" /> Enhanced About Me Section
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm whitespace-pre-wrap p-4 border rounded-md bg-secondary/50 dark:bg-card-foreground/5">{results.enhancedAboutMeSection}</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-primary" /> Layout Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                 <p className="text-sm whitespace-pre-wrap p-4 border rounded-md bg-secondary/50 dark:bg-card-foreground/5">{results.layoutSuggestions}</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
