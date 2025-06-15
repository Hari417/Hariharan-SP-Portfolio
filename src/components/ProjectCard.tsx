import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import type { ProjectType } from "@/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: ProjectType;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl group">
      <CardHeader className="p-0">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={project.dataAiHint || "technology abstract"}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4 md:p-6">
        <CardTitle className="text-xl md:text-2xl font-headline mb-2">{project.title}</CardTitle>
        <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 md:p-6 flex justify-start space-x-3">
        {project.githubLink && (
          <Button variant="outline" size="sm" asChild>
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
        {project.liveLink && (
          <Button variant="default" size="sm" asChild>
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
