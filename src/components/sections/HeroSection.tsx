import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center text-center bg-gradient-to-br from-background to-secondary dark:to-card py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-primary dark:text-primary-foreground/90">
            HARIHARAN SP
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 dark:text-foreground/70 sm:text-xl">
            Dual degree ECE & Data Science student passionate about AI, robotics, and embedded systems. Turning complex challenges into innovative solutions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild className="shadow-lg hover:shadow-primary/30 transition-shadow">
              <Link href="#projects">
                View My Work <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="shadow-lg hover:shadow-accent/30 transition-shadow">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
