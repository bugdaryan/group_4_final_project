{
  "env": {
    "test": {
      "presets": ["env", "react", "stage-2"],
      "plugins": ["transform-export-extensions"],
      "only": [
        "./**/*.js",
        "node_modules/jest-runtime"
      ]
    }
  }
}
