import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/data";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./ui/icons";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeading index="02" title="Projects" />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.title}
            delay={(i % 2) * 0.08}
            className={cn(project.featured && "sm:col-span-2")}
          >
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface/50 p-6 transition-colors hover:border-accent/50 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <div className="flex shrink-0 items-center gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} — ${link.label}`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors group-hover:border-accent/50 hover:!text-accent"
                    >
                      {link.label === "GitHub" ? (
                        <GithubIcon size={14} />
                      ) : (
                        <ArrowUpRight size={14} />
                      )}
                    </a>
                  ))}
                </div>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
