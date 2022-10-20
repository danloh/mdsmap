import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Mdmap from "./index";
import { Props } from "..";

export default {
  title: "Mind Map",
  component: Mdmap,
  argTypes: {
    value: { control: "text" },
    defaultValue: { control: "text" },
  },
  args: {
    //dark: true,
  },
} as Meta;

const Template: Story<Props> = args => <Mdmap {...args} />;

export const Headings = Template.bind({});
Headings.args = {
  dark: true,
  defaultValue: `# Heading 1

## Heading 2 

- h1 \`inline code\`
- h2 **Hola** 
- title Handbook of rust date structure \n and algorithms handson 

## bold title

### Heading 3


[9781788995528_HANDSON_DATA_STRUCTURES_AND_ALGORITHMS_WITH_RUST.pdf 5069677](blob:http://localhost:6007/dd515fbd-3cf5-4dad-b305-4ff67b49a8a7)

## Reference 

#### Heading 4`,
};
