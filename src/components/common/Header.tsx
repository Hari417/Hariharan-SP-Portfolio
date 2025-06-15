"use client";

import Link from "next/link";
import { Code2 } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "AI Assistant", href: "#ai-assistant" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-xl sm:inline-block">
            HARIHARAN SP
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-1 sm:space-x-2 md:space-x-4">
          {navItems.map((item) => (
            <Button key={item.name} variant="link" asChild className="text-sm font-medium text-muted-foreground hover:text-foreground px-2 sm:px-3">
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center justify-end space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
