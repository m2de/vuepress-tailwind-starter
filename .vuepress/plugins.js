let plugins = [
  require("tailwindcss")("./tailwind.config.js"),
  require("cssnano")
];

if (process.env.NODE_ENV === "production") {
  // only add purgecss if production
  plugins.push(
    require("@fullhuman/postcss-purgecss")({
      content: [
        ".vuepress/theme/**/*.vue",
        ".vuepress/theme/**/*.md",
        ".vuepress/theme/**/*.js",
        ".vuepress/theme/templates/*.html",
        ".vuepress/theme/styles/*.styl"
      ],

      extractors: [
        {
          /**
           * A fix for purge css to pick up class names with escaped chars
           * E.g. md:w-1/2.
           *
           * Solution from https://github.com/tailwindcss/tailwindcss/issues/391#issuecomment-366922730
           */
          extractor: class TailwindExtractor {
            static extract(content) {
              return content.match(/[A-z0-9-:\/]+/g) || [];
            }
          },
          extensions: ["css", "html", "js", "vue", "md", "styl"]
        }
      ],

      /**
       * Ensure default resets and normalised classes ar enot removed by PurgeCSS
       */
      whitelistPatterns: [
        /^(h\d|p$|ul|li$|div|ol|table|td$|th$|thead|tbody|main|input|button|form|md-|hljs)/
      ]
    })
  );
}

// always add autoprefixer at the end
plugins.push(require("autoprefixer"));

module.exports = plugins;
