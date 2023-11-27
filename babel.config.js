module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ["transform-remove-console"],
      },
    },
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            "@components": "./src/components",
            "@theme": "./src/theme",
            "@hooks": "./src/hooks",
            "@utils": "./src/utils"
          },
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".ios.js",
            ".android.js",
            ".json",
            ".png",
            ".jpg",
            ".webp",
            ".gif",
            ".svg",
            ".ttf",
            ".mp3",
            ".mp4",
          ],
        },
      ],
      ["transform-remove-console", { exclude: ["log"] }],
    ]
  }
}
