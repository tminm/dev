const path = require("path");
const CracoLessPlugin = require("craco-less");
const resolve = (pathName) => path.resolve(__dirname, pathName);

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils"),
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
};
