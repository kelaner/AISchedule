/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['src/**/*.{js,jsx}'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/line-clamp'), require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
