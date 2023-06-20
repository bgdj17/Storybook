import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    // controls: {
    //   matchers: {
    //     color: /(background|color)$/i,
    //     date: /Date$/,
    //   },
    // },
    controls :{ expanded: true },
    html: {
      prettier: {
        tabWidth: 4,
        useTabs: false,
        htmlWhitespaceSensitivity: 'strict',
        //removeEmptyComments: true, // default: false
        //showLineNumbers: true, // default: false
        //wrapLines: false, // default: true
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

