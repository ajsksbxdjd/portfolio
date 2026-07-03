export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div
        className="animate-drift-a absolute -left-24 -top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,var(--blob-a)_0%,transparent_70%)] opacity-90 blur-3xl"
        style={{ animationDelay: "-2s" }}
      />
      <div
        className="animate-drift-b absolute -right-20 top-1/4 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,var(--blob-b)_0%,transparent_70%)] opacity-80 blur-3xl"
        style={{ animationDelay: "-8s" }}
      />
      <div
        className="animate-drift-c absolute bottom-0 left-1/3 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,var(--blob-c)_0%,transparent_70%)] opacity-80 blur-3xl"
        style={{ animationDelay: "-11s" }}
      />
      <div
        className="animate-drift-d absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,var(--blob-d)_0%,transparent_70%)] opacity-70 blur-3xl"
        style={{ animationDelay: "-5s" }}
      />
    </div>
  );
}
