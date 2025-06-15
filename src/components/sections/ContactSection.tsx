import { MailIcon, PhoneCall, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary dark:bg-card">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <MailIcon className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl font-headline font-bold sm:text-4xl text-primary dark:text-primary-foreground/90">Get In Touch</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary dark:text-primary-foreground/90">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3">
                <MailIcon className="h-6 w-6 text-accent" />
                <Link href="mailto:your.email@example.com" className="hover:text-primary transition-colors">
                  your.email@example.com
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneCall className="h-6 w-6 text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-accent" />
                <span>Your City, Country</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary dark:text-primary-foreground/90">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                  <Input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                  <Input type="email" id="email" name="email" placeholder="john.doe@example.com" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea id="message" name="message" rows={4} placeholder="Your message..." required />
                </div>
                <Button type="submit" className="w-full shadow-md hover:shadow-primary/30 transition-shadow">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
