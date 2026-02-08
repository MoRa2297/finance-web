import type { Preview } from "@storybook/react";
import "../src/styles/storybook.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#030712" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
};

export default preview;
