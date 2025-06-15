import { User, Brain, Code, Zap, Server, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  { name: "React", icon: <Code className="h-6 w-6 text-primary" /> },
  { name: "Next.js", icon: <Zap className="h-6 w-6 text-primary" /> },
  { name: "TypeScript", icon: <Code className="h-6 w-6 text-primary" /> },
  { name: "Node.js", icon: <Server className="h-6 w-6 text-primary" /> },
  { name: "Tailwind CSS", icon: <Zap className="h-6 w-6 text-primary" /> },
  { name: "GenAI Integration", icon: <Brain className="h-6 w-6 text-primary" /> },
  { name: "Firebase", icon: <Database className="h-6 w-6 text-primary" /> },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary dark:bg-card">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <User className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl font-headline font-bold sm:text-4xl text-primary dark:text-primary-foreground/90">About Me</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A brief introduction to who I am, my passion for development, and my journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <p className="text-lg mb-4 leading-relaxed">
                Hello! I&apos;m a passionate and creative software developer with a knack for building intuitive and performant web applications. My journey into the world of code started with a fascination for how technology can solve real-world problems and bring ideas to life.
              </p>
              <p className="text-lg leading-relaxed">
                I thrive in collaborative environments and enjoy tackling complex challenges. Continuously learning and exploring new technologies is a core part of my professional growth. When I&apos;m not coding, I enjoy [Your Hobby/Interest Here], which helps me stay creative and balanced.
              </p>
            </CardContent>
          </Card>

          <div>
            <h3 className="text-2xl font-headline font-semibold mb-6 text-center md:text-left text-primary dark:text-primary-foreground/90">My Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <Card key={skill.name} className="text-center p-4 hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-2">{skill.icon}</div>
                  <p className="font-medium">{skill.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
