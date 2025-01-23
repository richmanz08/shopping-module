import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        standard: ["Figtree", "sans-serif"],
      },
      fontSize: {
        h2: ["32px", { lineHeight: "48px", fontWeight: "700" }],
        h4: ["24px", { lineHeight: "36px", fontWeight: "700" }],
        h5: ["22px", { lineHeight: "30px", fontWeight: "700" }],
        h6: ["18px", { lineHeight: "26px", fontWeight: "700" }],
        h7: ["18px", { lineHeight: "28px", fontWeight: "700" }],
        t2: ["22px", { lineHeight: "32px", fontWeight: "600" }],
        t3: ["20px", { lineHeight: "30px", fontWeight: "600" }],
        t4: ["18px", { lineHeight: "28px", fontWeight: "600" }],
        t5: ["16px", { lineHeight: "24px", fontWeight: "600" }],
        a2: ["22px", { lineHeight: "32px", fontWeight: "500" }],
        a3: ["20px", { lineHeight: "30px", fontWeight: "500" }],
        a4: ["18px", { lineHeight: "28px", fontWeight: "500" }],
        a5: ["16px", { lineHeight: "24px", fontWeight: "500" }],
        a6: ["14px", { lineHeight: "24px", fontWeight: "500" }],
        a7: ["12px", { lineHeight: "22px", fontWeight: "500" }],
        b2: ["22px", { lineHeight: "32px", fontWeight: "400" }],
        b3: ["20px", { lineHeight: "30px", fontWeight: "400" }],
        b4: ["18px", { lineHeight: "28px", fontWeight: "400" }],
        b5: ["16px", { lineHeight: "24px", fontWeight: "400" }],
        b6: ["14px", { lineHeight: "24px", fontWeight: "400" }],
        b7: ["12px", { lineHeight: "24px", fontWeight: "400" }],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          default: "#3386FF",
        },
        secondary: {
          default: "#3F3844",
          300: "#B0B0B0",
        },
        outline: {
          blue: "#DEEDFE",
          grey: "#E4E7EC",
          darkGrey: "#D7D7D7",
        },
        warning: {
          DEFAULT: "#F8BD26",
          100: "#FEF9F2",
          200: "#FEF3E5",
          300: "#DEA922",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
