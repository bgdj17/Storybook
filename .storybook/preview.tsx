import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    docs:{
      controls: {exclude: ['style']},
    },
    actions: { argTypesRegex: "^on[A-Z].*" },

    controls :{ expanded: true },

    html: {
      prettier: {
        tabWidth: 4,
        useTabs: false,
        htmlWhitespaceSensitivity: 'strict',
      },
    },   
  },
};

export default preview;

