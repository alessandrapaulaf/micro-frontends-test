export const mfConfig = {
  name: "button_mf",
  filename: "remoteEntry.js",
  exposes: {
    "./Button": "./src/Button.tsx",
  },
  shared: ["react", "react-dom"],
};
