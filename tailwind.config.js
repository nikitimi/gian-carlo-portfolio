import { BLACK, BLUE, GREEN, VIOLET, WHITE } from './src/utils/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/app/**/*.{ts,tsx}',
        './src/pages/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'black-syntexia': BLACK,
                'blue-syntexia': BLUE,
                'green-syntexia': GREEN,
                'violet-syntexia': VIOLET,
                'white-syntexia': WHITE,
            },
            keyframes: {
                'spin-forever': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                'color-spin': {
                    '0%, 100%': { backgroundColor: WHITE },
                    '25%': { backgroundColor: '#999' },
                },
                loading: {
                    '0%': { opacity: 0 },
                },
            },
            animation: {
                'spin-forever': 'spin-forever 600s infinite linear',
                'color-spin': 'color-spin 1s linear',
                loading: 'loading infinite 900ms',
            },
        },
    },
    plugins: [],
}
