"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      if (scrollable <= 0) { setProgress(100); return; }
      setProgress((window.scrollY / scrollable) * 100);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[100] h-[2px] pointer-events-none transition-none"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, #6366f1, #8b5cf6, #a78bfa)",
      }}
      aria-hidden="true"
    />
  );
}
