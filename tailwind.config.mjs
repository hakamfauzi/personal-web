/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg) / <alpha-value>)",
        fg: "hsl(var(--fg) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        "muted-fg": "hsl(var(--muted-fg) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        "accent-2": "hsl(var(--accent-2) / <alpha-value>)"
      },
      boxShadow: {
        soft: "0 10px 30px -18px rgba(0,0,0,0.35)",
        glow: "0 0 0 1px hsl(var(--border) / 1), 0 12px 40px -20px hsl(var(--accent) / 0.55)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};
