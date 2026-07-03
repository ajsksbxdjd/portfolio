import { Mail } from "lucide-react";
import { profile } from "@/data/data";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { GithubIcon, LinkedinIcon } from "./ui/icons";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeading index="04" title="Contact" />

      <Reveal delay={0.05} className="max-w-2xl">
        <p className="text-base leading-relaxed text-muted sm:text-lg">
          I&apos;m actively looking for AI engineering internships. If you have a
          role where I could help ship applied AI or agentic systems, I&apos;d love
          to hear from you.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-accent sm:text-3xl"
        >
          <Mail size={26} className="text-accent" />
          {profile.email}
        </a>

        <div className="mt-8 flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest text-muted transition-colors hover:text-accent"
          >
            <GithubIcon size={14} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest text-muted transition-colors hover:text-accent"
          >
            <LinkedinIcon size={14} />
            LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
}
