/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                bodyFont: ['Montserrat', 'sans-serif'],
                title: ['Inter', 'sans-serif'],
            },
            boxShadow: '0 10px 30px -10px rgba(2,12,27,0.7)',
            colors: {
                bodyColor: '#ffffff',
                primaryColor: '#5AE6C5',
                textLight: '#50585F',
                textDark: '#282C2F',
                hoverColor: '#50CCAF',
            },
        },
    },
    plugins: [require('daisyui')],
};
