import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },

    controls :{ expanded: true },

    html: {
      prettier: {
        tabWidth: 4,
        useTabs: false,
        htmlWhitespaceSensitivity: 'strict',
      },
    },
    previewTabs: {
      docs: {
        hidden: false
      },
      canvas: {
        title: 'Story',
        hidden: false,
      },
    },
   
  },
};

export default preview;

