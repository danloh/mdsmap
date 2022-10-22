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
  defaultValue: `# Rules

## Markdown shortcuts 

- code: \`inline code\`
- style:  **bold**, *italic* __underline__, ==mark==, 1^st^, 
- text: title Handbook of rust date structure \n and algorithms handson 
- link: [mdSilo](https://mdsilo.com) and <https://mdsilo.com>

## Extensions

* Math: inline math $x+y=2$.
* Notice block: info, warning, tips.
* Wiki Link:[[wiki]].
* Hashtag: #tips#

## Numbered List

1. Type \`1.\` to create numbered list(ordered list).
2. Nested numbered list is supported.

## Check List(Task List)

- [x] Type \`[]\` to create Check list.
- [x] Support nested Check list too.
- [x] Main task.

## Reference 

### markmap package`,
};
