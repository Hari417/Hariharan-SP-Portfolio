"use client";

import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const LeetCodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M12.52 18.007L9.005 3.551l-5.61 4.402 3.513 12.183c.27.935 1.533 1.25 2.15.543l3.462-3.672z"></path>
    <path d="M12.52 18.007c.617-.707.347-1.94-.543-2.15L8.305 14.74l5.61-4.402-2.318-8.053"></path>
    <path d="M20.615 15.385l-2.522-8.75-5.61 4.401 4.012 10.425c.38.99 1.83.99 2.21 0l1.91-6.076z"></path>
  </svg>
);

const socialLinks = [
    { name: "GitHub", href: "https://github.com/hariharansp", icon: <Github className="h-5 w-5" /> },
    { name: "LinkedIn", href: "https://linkedin.com/in/hariharansp", icon: <Linkedin className="h-5 w-5" /> },
    { name: "LeetCode", href: "#", icon: <LeetCodeIcon /> },
    { name: "Instagram", href: "#", icon: <Instagram className="h-5 w-5" /> },
    { name: "Email", href: "mailto:hariharansp2050@gmail.com", icon: <Mail className="h-5 w-5" /> },
];


export default function SocialSidebar() {
  return (
    <TooltipProvider>
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50">
            <div className="flex flex-col items-center space-y-2 p-2 bg-card/80 dark:bg-card/60 backdrop-blur-sm border-r border-t border-b border-border rounded-r-lg shadow-lg">
                {socialLinks.map((social) => (
                    <Tooltip key={social.name}>
                        <TooltipTrigger asChild>
                             <Link
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                className="p-2 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            >
                                {social.icon}
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p>{social.name}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </div>
    </TooltipProvider>
  );
}
