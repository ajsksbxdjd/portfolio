"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "@/data/data";
import { GithubIcon, LinkedinIcon } from "./ui/icons";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-16"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-5xl"
      >
        <motion.p
          variants={item}
          className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted"
        >
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          Available for AI engineering internships
        </motion.p>

        <motion.h1
          variants={item}
          className="text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 font-display text-lg font-semibold text-accent sm:text-xl"
        >
          {profile.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={profile.resumeUrl}
            download
            className="glass inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-extrabold text-foreground transition-transform hover:scale-[1.03]"
          >
            <Download size={18} />
            Download Resume
          </a>

          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="glass inline-flex h-12 w-12 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="glass inline-flex h-12 w-12 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="glass inline-flex h-12 w-12 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
        aria-label="Scroll to About"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
