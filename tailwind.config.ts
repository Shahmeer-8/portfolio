import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
      },
      colors: {
        /* All theme colors driven by CSS variables — swap light/dark by toggling .dark on <html> */
        background:  "var(--color-bg)",
        surface:     "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        border:      "var(--color-border)",
        accent:      "#6366f1",
        "accent-2":  "#8b5cf6",
        "accent-cyan":"#06b6d4",
        text:        "var(--color-text)",
        "text-muted":"var(--color-text-muted)",
        "text-dim":  "var(--color-text-dim)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.12) 0%, transparent 60%)",
      },
      boxShadow: {
        "glow-sm":    "0 0 20px rgba(99,102,241,0.25)",
        "glow-md":    "0 0 40px rgba(99,102,241,0.2)",
        "glow-lg":    "0 0 80px rgba(99,102,241,0.15)",
        card:         "var(--card-shadow)",
        "card-hover": "var(--card-shadow-hover)",
      },
      animation: {
        "float-1":        "float1 6s ease-in-out infinite",
        "float-2":        "float2 8s ease-in-out infinite",
        "float-3":        "float3 7s ease-in-out infinite",
        "float-4":        "float4 9s ease-in-out infinite",
        "float-profile":  "floatProfile 5s ease-in-out infinite",
        "blob-1":         "blob1 14s ease-in-out infinite",
        "blob-2":         "blob2 17s ease-in-out infinite",
        "blob-3":         "blob3 11s ease-in-out infinite",
        "pulse-slow":     "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow":      "spin 25s linear infinite",
        "spin-slow-r":    "spin 20s linear infinite reverse",
      },
      keyframes: {
        float1:       { "0%,100%": { transform: "translateY(0px)"  }, "50%":  { transform: "translateY(-18px)" } },
        float2:       { "0%,100%": { transform: "translateY(0px)"  }, "33%":  { transform: "translateY(-14px)" }, "66%": { transform: "translateY(-6px)" } },
        float3:       { "0%,100%": { transform: "translateY(0px)"  }, "50%":  { transform: "translateY(-22px)" } },
        float4:       { "0%,100%": { transform: "translateY(0px)"  }, "40%":  { transform: "translateY(-10px)" }, "80%": { transform: "translateY(-5px)"  } },
        floatProfile: { "0%,100%": { transform: "translateY(0px)"  }, "50%":  { transform: "translateY(-10px)" } },
        blob1: {
          "0%,100%": { transform: "translate(0,0) scale(1)"           },
          "33%":     { transform: "translate(70px,-55px) scale(1.1)"   },
          "66%":     { transform: "translate(-35px,40px) scale(0.93)"  },
        },
        blob2: {
          "0%,100%": { transform: "translate(0,0) scale(1)"           },
          "33%":     { transform: "translate(-60px,70px) scale(0.92)"  },
          "66%":     { transform: "translate(45px,-35px) scale(1.08)"  },
        },
        blob3: {
          "0%,100%": { transform: "translate(0,0) scale(1)"    },
          "50%":     { transform: "translate(50px,60px) scale(1.06)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
