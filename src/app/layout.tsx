import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Shah Meer — Software Engineer",
  description:
    "Software Engineer specializing in Laravel, Next.js, and MySQL. Building scalable, secure, and high-performance web applications.",
  keywords: [
    "Shah Meer",
    "Software Engineer",
    "Laravel Developer",
    "Next.js Developer",
    "PHP Developer",
    "Full Stack Developer",
    "Lahore",
    "Pakistan",
  ],
  authors: [{ name: "Shah Meer", url: "mailto:shahmeerzaman197@gmail.com" }],
  openGraph: {
    title: "Shah Meer — Software Engineer",
    description: "Software Engineer specializing in Laravel, Next.js, and MySQL.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shah Meer — Software Engineer",
    description: "Software Engineer specializing in Laravel, Next.js, and MySQL.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /*
     * suppressHydrationWarning on <html>  — the anti-flash script adds the
     * "dark" class before React hydrates, so server/client HTML can differ
     * on the `class` attribute. suppressHydrationWarning tells React to
     * ignore this one-level mismatch.
     *
     * suppressHydrationWarning on <body>  — browser extensions (e.g. Grammarly,
     * password managers) inject attributes like `cz-shortcut-listen`, `data-gr-*`
     * etc. that cause spurious hydration mismatches. suppressHydrationWarning
     * silences those without hiding real issues deeper in the tree.
     */
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Anti-flash script: applies saved theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('sz-theme');if(t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300..900;1,14..32,300..900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-text antialiased" suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
