"use client";

import { useEffect } from "react";

/**
 * Tracks the pointer globally and writes its position (relative to whichever
 * .glass/.glass-btn element it's over) into --mx/--my CSS variables. The
 * localized frost-highlight overlay itself is pure CSS (see .glass::after in
 * globals.css) — this just keeps that overlay's center pinned to the cursor.
 */
export default function CursorGlow() {
  useEffect(() => {
    function handlePointerMove(e: PointerEvent) {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(".glass, .glass-btn");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      target.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return null;
}
