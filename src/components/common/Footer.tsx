import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-8 text-center text-muted-foreground">
      <div className="container">
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="https://github.com/hariharansp" target="_blank" rel="noopener noreferrer" aria-label="GitHub"> {/* Please verify this link */}
            <Github className="h-6 w-6 hover:text-foreground transition-colors" />
          </Link>
          <Link href="https://linkedin.com/in/hariharansp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> {/* Please verify this link */}
            <Linkedin className="h-6 w-6 hover:text-foreground transition-colors" />
          </Link>
          <Link href="mailto:hariharansp2050@gmail.com" aria-label="Email">
            <Mail className="h-6 w-6 hover:text-foreground transition-colors" />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {currentYear} HARIHARAN SP. All rights reserved.
        </p>
         <p className="text-xs mt-2">
          Designed with <span className="text-primary">&hearts;</span> by an AI assistant.
        </p>
      </div>
    </footer>
  );
}
