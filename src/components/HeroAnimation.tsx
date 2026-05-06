"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function HeroAnimation() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">

      {/* Lottie animation — opacity-controlled to stay subtle */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.42 }}
      >
        <DotLottieReact
          src="/8base%20Salamander.lottie"
          loop
          autoplay
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Theme-aware overlay — blends animation naturally with bg color
          Light mode : white/40 overlay washes it toward the light bg
          Dark mode  : black/50 overlay grounds it into the dark bg    */}
      <div className="absolute inset-0 bg-white/40 dark:bg-black/50" />

      {/* Soft blur layer — takes edge off any sharp animation details */}
      <div
        className="absolute inset-0"
        style={{ backdropFilter: "blur(1.5px)", WebkitBackdropFilter: "blur(1.5px)" }}
      />
    </div>
  );
}
