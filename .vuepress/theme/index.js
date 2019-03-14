module.exports = {
    plugins: [
        "@silvanite/markdown-classes",
        ["@silvanite/tailwind", {
            purgecss: {
                enabled: true,
            },
        }]
    ]
}
