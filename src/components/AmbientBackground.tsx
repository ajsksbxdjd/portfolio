export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="animate-float absolute -left-24 -top-32 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,var(--blob-a)_0%,transparent_70%)] opacity-70 blur-3xl" />
      <div
        className="animate-float absolute -right-20 top-1/4 h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,var(--blob-b)_0%,transparent_70%)] opacity-60 blur-3xl"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="animate-float absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,var(--blob-c)_0%,transparent_70%)] opacity-60 blur-3xl"
        style={{ animationDelay: "-6s" }}
      />
    </div>
  );
}
