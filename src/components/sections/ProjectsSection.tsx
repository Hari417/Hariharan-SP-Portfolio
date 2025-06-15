import { Briefcase } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import type { ProjectType } from "@/types";

const mockProjects: ProjectType[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, product listings, cart functionality, and payment integration. Built with modern web technologies.",
    imageUrl: "https://placehold.co/600x400.png",
    liveLink: "#",
    githubLink: "#",
    tags: ["Next.js", "TypeScript", "Stripe", "Firebase"],
    dataAiHint: "online shopping"
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application designed to help teams organize, track, and manage their work efficiently. Features real-time updates and a clean UI.",
    imageUrl: "https://placehold.co/600x400.png",
    liveLink: "#",
    githubLink: "#",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    dataAiHint: "productivity tool"
  },
  {
    id: "3",
    title: "Personal Blog",
    description: "A statically generated personal blog built with a headless CMS for content management. Optimized for performance and SEO.",
    imageUrl: "https://placehold.co/600x400.png",
    githubLink: "#",
    tags: ["Gatsby", "GraphQL", "Contentful", "Markdown"],
    dataAiHint: "writing publishing"
  },
   {
    id: "4",
    title: "AI Powered Chatbot",
    description: "An intelligent chatbot leveraging natural language processing to provide customer support and answer user queries on a website.",
    imageUrl: "https://placehold.co/600x400.png",
    liveLink: "#",
    githubLink: "#",
    tags: ["Python", "Dialogflow", "Flask", "React"],
    dataAiHint: "artificial intelligence"
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Briefcase className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl font-headline font-bold sm:text-4xl text-primary dark:text-primary-foreground/90">My Projects</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A selection of my recent work, showcasing my skills and creativity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
