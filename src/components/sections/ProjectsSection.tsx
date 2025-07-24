import { Briefcase } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import type { ProjectType } from "@/types";

const userProjects: ProjectType[] = [
  {
    id: "4",
    title: "Automation Testing Robot",
    description: "Developed an automation testing robot (line-following + digital twin) using C++, Python, and KiCAD for custom PCB design. Technologies included Firebase Studio, GitHub, OTA remote control, and remote database logging.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "robotics automation",
    githubLink: "#", // Please update with your actual GitHub repository link
    tags: ["C++", "Python", "KiCAD", "Firebase", "Robotics", "Embedded Systems"],
  },
  {
    id: "1",
    title: "All-Purpose Drone for Disaster Response",
    description: "Engineered a drone for disaster conditions using ML/DL to identify and locate humans. Features a modular design for real-time analysis and monitoring.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "drone disaster",
    githubLink: "#", // Please update with your actual GitHub repository link
    tags: ["Machine Learning", "Deep Learning", "Python", "Computer Vision", "Embedded Systems"],
  },
  {
    id: "2",
    title: "Smart Camera System",
    description: "Built a smart camera with Deep Learning algorithms for user-defined tasks like security and object recognition, featuring real-time processing capabilities.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "smart camera",
    githubLink: "#", // Please update with your actual GitHub repository link
    tags: ["Deep Learning", "Python", "Computer Vision", "Object Recognition"],
  },
  {
    id: "3",
    title: "TARS (Personal AI Assistant)",
    description: "Ongoing AI assistant using Google Speech-to-Text, DeepSeek, and Whisper for voice; YOLO and object tracking for vision. Hardware: Raspberry Pi, servos, depth cameras.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "ai assistant",
    githubLink: "#", // Please update with your actual GitHub repository link for this ongoing project
    tags: ["AI", "Python", "C++", "Raspberry Pi", "YOLO", "NLP", "Robotics"],
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
            A selection of my work, showcasing my skills in AI, robotics, and software development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {userProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
