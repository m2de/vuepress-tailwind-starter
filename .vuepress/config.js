module.exports = {
    title: "Tailwind",
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
        ]
    },
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.config.js"),
            require('cssnano'),
            require('@fullhuman/postcss-purgecss')({
                content: [
                    './.vuepress/theme/*.vue',
                    './.vuepress/theme/*.md',
                    './.vuepress/theme/*.js',
                ]
            }),
            // require("autoprefixer")
        ]
    }
}
