import "./global.css";

const { registerRootComponent } = require("expo");
const StorybookUIRoot = require("./.storybook").default;
registerRootComponent(StorybookUIRoot);
