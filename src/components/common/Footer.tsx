import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Link from "next/link";

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
           <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LeetCode"> {/* Please add your LeetCode profile link */}
            <div className="hover:text-foreground transition-colors">
              <LeetCodeIcon />
            </div>
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"> {/* Please add your Instagram profile link */}
            <Instagram className="h-6 w-6 hover:text-foreground transition-colors" />
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
