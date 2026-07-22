// tailwind.config.js
module.exports = {
    darkMode: "class",
    theme: {
        extend: {
            keyframes: {
                shimmer: {
                    "100%": { transform: "translateX(100%)" },
                },
            },
        },
    },
};