import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icon } from "./Icon";
export default {
  component: Icon,
  title: "Content/Icon",
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const BasicIcon = Template.bind({});
BasicIcon.args = {
  name: "Home",
};
