import { addons } from "@storybook/addons";

import theTheme from "./storybookTheme";

addons.setConfig({
  theme: theTheme,
  isToolshown: true
});
