import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[calc(100vh-3.5rem)] flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://placehold.co/1200x800.png')" }}
      data-ai-hint="developer portrait abstract"
    >
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
            HARIHARAN SP
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-xl">
            Dual degree ECE & Data Science student passionate about AI, robotics, and embedded systems. Turning complex challenges into innovative solutions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild className="shadow-lg bg-primary/80 hover:bg-primary text-primary-foreground transition-all">
              <Link href="#projects">
                View My Work <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="shadow-lg border-white text-white hover:bg-white/10 transition-all">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
