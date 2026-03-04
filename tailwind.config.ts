import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    900: "#0b1020",
                    800: "#121a33",
                    700: "#1a2547",
                },
            },
        },
    },
    plugins: [],
};

export default config;
