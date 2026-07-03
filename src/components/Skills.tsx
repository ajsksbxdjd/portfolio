import { skills } from "@/data/data";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeading index="03" title="Skills" />

      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal
            key={group.category}
            delay={(i % 2) * 0.08}
            className="rounded-2xl border border-border bg-surface/50 p-6"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-sm text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
