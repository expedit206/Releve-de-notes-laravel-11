
import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./resources/**/*.css",
    ],

    theme: {
        extend: {
            fontFamily: {
                /* `import defaultTheme from 'tailwindcss/defaultTheme';` is importing the default theme configuration
                from the Tailwind CSS library. This allows you to extend or modify the default theme settings in
                your own Tailwind CSS configuration. By using `defaultTheme`, you can access the default values for
                colors, spacing, typography, and other styling properties defined in the Tailwind CSS framework. */
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            screens: {
                'md':'870px'
            },
        },
    },

    plugins: [forms, typography],
};
