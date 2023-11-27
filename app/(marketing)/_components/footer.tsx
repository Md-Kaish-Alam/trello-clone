import { Logo } from "@/components/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        {/* <Logo /> */}
        <div className="flex items-center gap-x-4">
          <Link href="/" className={buttonVariants({ variant: "ghost" })}>
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="/" className={buttonVariants({ variant: "ghost" })}>
            <Github className="h-5 w-5" />
          </Link>
          <Link href="/" className={buttonVariants({ variant: "ghost" })}>
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};
