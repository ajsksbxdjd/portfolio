import { profile } from "@/data/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs font-semibold text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="flex items-center gap-1.5">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
