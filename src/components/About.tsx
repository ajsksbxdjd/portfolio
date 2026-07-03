import Image from "next/image";
import { about, profile } from "@/data/data";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeading index="01" title="About" />

      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
        <Reveal delay={0.05} className="flex flex-col gap-6 sm:flex-row sm:gap-8">
          <div className="glass shrink-0 self-start rounded-3xl p-2 sm:sticky sm:top-24">
            <Image
              src="/profile.jpg"
              alt={profile.name}
              width={160}
              height={160}
              className="h-28 w-28 rounded-2xl object-cover sm:h-36 sm:w-36"
            />
          </div>

          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-muted sm:text-lg">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className="glass divide-y divide-border rounded-3xl">
            {about.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1 px-5 py-4">
                <dt className="text-xs font-bold uppercase tracking-widest text-muted">
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
