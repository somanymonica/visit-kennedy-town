const path = require("path");

module.exports = {
  entry: "./server.js",
  mode: "production",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "server.bundle.js",
  },
};
