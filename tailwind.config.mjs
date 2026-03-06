import defaultTheme from "tailwindcss/defaultTheme";
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Paper Background
                paper: '#FDFCF8',
                // Brand Orange
                orange: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    200: '#fed7aa',
                    300: '#fdba74',
                    400: '#fb923c',
                    500: '#f97316',
                    600: '#ea580c',
                    700: '#C2410C', // Flixu Primary
                    800: '#9a3412',
                    900: '#7c2d12',
                    950: '#431407',
                },
                // Stone (Neutral)
                stone: {
                    50: '#fafaf9',
                    100: '#f5f5f4',
                    200: '#e7e5e4', // Main Border Color
                    300: '#d6d3d1',
                    400: '#a8a29e',
                    500: '#78716c', // Body Text
                    600: '#57534e',
                    700: '#44403c',
                    800: '#292524',
                    900: '#1c1917', // Headlines
                    950: '#0c0a09',
                }
            },
            fontFamily: {
                serif: ['"Instrument Serif"', ...defaultTheme.fontFamily.serif],
                sans: ['"Inter Variable"', '"Inter"', ...defaultTheme.fontFamily.sans],
                mono: ['"Geist Mono"', ...defaultTheme.fontFamily.mono],
                handwriting: ['"La Belle Aurore"', 'cursive'],
            },
            // Custom Spacing for the Layout Rail
            spacing: {
                'rail': '2rem', // 32px (left position)
                'rail-safe': '8rem', // 128px (content padding)
            }
        },
    },
    plugins: [
        typography,
    ],
}
