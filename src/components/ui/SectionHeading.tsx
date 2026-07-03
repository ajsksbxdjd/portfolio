import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <Reveal className="mb-12 flex items-center gap-4">
      <span className="font-display text-sm font-bold text-accent">{index}</span>
      <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </Reveal>
  );
}
