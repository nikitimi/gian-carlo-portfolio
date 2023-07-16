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
            },
            animation: {
                'spin-forever-one': 'spin-forever 60s infinite linear',
                'spin-forever-two': 'spin-forever 121s infinite linear',
                'spin-forever-three': 'spin-forever 82s infinite linear',
                'spin-forever-four': 'spin-forever 93s infinite linear',
            },
        },
    },
    plugins: [],
}
