import { about } from "@/data/data";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeading index="01" title="About" />

      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
        <Reveal delay={0.05} className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-muted sm:text-lg">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.15}>
          <dl className="divide-y divide-border rounded-2xl border border-border bg-surface/50">
            {about.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1 px-5 py-4">
                <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                  {fact.label}
                </dt>
                <dd className="text-sm text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
