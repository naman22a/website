/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            Hack: ['Hack', 'system-ui', 'sans-serif']
        }
    },
    plugins: [
        require('@catppuccin/tailwindcss')({
            prefix: 'ctp',
            defaultFlavour: 'mocha'
        })
    ]
};
