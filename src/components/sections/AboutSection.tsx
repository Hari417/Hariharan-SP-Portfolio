import { User, Brain, Code, Terminal, Cpu, Layers, BarChart2, Target, Lightbulb, Rocket, Briefcase, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "Python", icon: <Code className="h-6 w-6 text-primary" /> },
  { name: "C & C++", icon: <Code className="h-6 w-6 text-primary" /> },
  { name: "Linux OS (Basics)", icon: <Terminal className="h-6 w-6 text-primary" /> },
  { name: "CUDA (Learning)", icon: <Cpu className="h-6 w-6 text-primary" /> },
  { name: "Data Analysis (Pandas, Scikit-learn, Matplotlib)", icon: <BarChart2 className="h-6 w-6 text-primary" /> },
  { name: "Machine Learning", icon: <Brain className="h-6 w-6 text-primary" /> },
  { name: "Deep Learning", icon: <Layers className="h-6 w-6 text-primary" /> },
];

const interests = [
  { name: "Embedded Systems for Robotics", icon: <Rocket className="h-6 w-6 text-primary" /> },
  { name: "AI-Powered Smart Solutions", icon: <Lightbulb className="h-6 w-6 text-primary" /> },
  { name: "AI Model Development & Optimization", icon: <Target className="h-6 w-6 text-primary" /> },
];

const internships = [
    {
        company: "Candela Technologies, Chennai",
        role: "Automation Testing Robot Development",
        description: "Developed an automation testing robot (line-following + digital twin) using C++, Python, and KiCAD for custom PCB design. Technologies included Firebase Studio, GitHub, OTA remote control, and remote database logging.",
        duration: "July 2024 (ongoing)"
    },
    {
        company: "Chennai Port Trust",
        role: "Electronics Systems Study",
        description: "Studied the working of Doppler weather radar and port traffic guidance electronic systems. Gained exposure to radar simulation, vessel navigation electronics, and port-side communication infrastructure.",
        duration: "July 2024"
    }
]

const certifications = [
    "IBM: Getting Started with GIT and GitHub",
    "IBM: Data Analysis with Python",
    "IBM: Machine Learning with Python",
    "IITM: Foundational Level in Programming & Data Science",
    "Infosys Springboard: Python Programming -01"
]


export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary dark:bg-card">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <User className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl font-headline font-bold sm:text-4xl text-primary dark:text-primary-foreground/90">About Me</h2>
        </div>

        <div className="grid md:grid-cols-1 gap-12 items-start">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <p className="text-lg mb-4 leading-relaxed">
                I’m a pre-final year student at St. Joseph&apos;s College of Engineering, pursuing a dual degree in Electronics and Communication Engineering (ECE) and a Bachelor of Science in Data Science from IIT Madras.
              </p>
              <p className="text-lg leading-relaxed">
                Experienced in embedded systems, machine learning, and data analysis, with hands-on expertise in microcontrollers like Arduino and Raspberry Pi. Passionate about leveraging AI and robotics to solve real-world challenges.
              </p>
            </CardContent>
          </Card>

          <div>
            <h3 className="text-2xl font-headline font-semibold mb-6 text-center md:text-left text-primary dark:text-primary-foreground/90 flex items-center justify-center md:justify-start">
              <Briefcase className="h-7 w-7 mr-3" /> Internships
            </h3>
            <div className="space-y-6">
                {internships.map((internship, index) => (
                    <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex justify-between items-start">
                                <span className="font-headline text-xl text-primary dark:text-primary-foreground/90">{internship.company}</span>
                                <Badge variant="secondary">{internship.duration}</Badge>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <h4 className="font-semibold mb-2">{internship.role}</h4>
                            <p className="text-muted-foreground">{internship.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-headline font-semibold mb-6 text-center md:text-left text-primary dark:text-primary-foreground/90 flex items-center justify-center md:justify-start">
              <Award className="h-7 w-7 mr-3" /> Certifications
            </h3>
            <Card className="shadow-lg">
                <CardContent className="p-6">
                    <ul className="list-disc list-inside space-y-2">
                        {certifications.map((cert, index) => (
                            <li key={index} className="text-muted-foreground">{cert}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-headline font-semibold mb-6 text-center md:text-left text-primary dark:text-primary-foreground/90">My Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill) => (
                  <Card key={skill.name} className="text-center p-4 hover:shadow-lg transition-shadow">
                    <div className="flex justify-center mb-2">{skill.icon}</div>
                    <p className="font-medium text-sm">{skill.name}</p>
                  </Card>
                ))}
              </div>
            </div>
             <div>
              <h3 className="text-2xl font-headline font-semibold mb-6 text-center md:text-left text-primary dark:text-primary-foreground/90">Areas of Interest</h3>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                {interests.map((interest) => (
                  <Card key={interest.name} className="p-4 hover:shadow-lg transition-shadow flex items-center space-x-3">
                    <div className="flex-shrink-0">{interest.icon}</div>
                    <p className="font-medium text-sm">{interest.name}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
