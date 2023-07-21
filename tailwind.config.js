/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'green-syntexia': '#68da23',
                'violet-syntexia': '#412854',
                'blue-syntexia': '#120a3d',
            },
            keyframes: {
                'spin-forever': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                'color-spin': {
                    '0%, 100%': { backgroundColor: 'white' },
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
