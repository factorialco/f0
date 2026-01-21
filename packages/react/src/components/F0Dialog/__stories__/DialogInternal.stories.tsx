import { F0Button } from "@/components/F0Button";
import { ApplicationFrame } from "@/experimental/Navigation/ApplicationFrame";
import ApplicationFrameStoryMeta from "@/experimental/Navigation/ApplicationFrame/index.stories";
import { Placeholder } from "@/icons/app";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ComponentProps, useState } from "react";
import { F0Dialog } from "../index";
import { DialogInternal } from "../internal/F0DialogInternal";
import { argTypes } from "./commons";
import { dialogVariants } from "../internal/internal-types";

const meta: Meta<typeof DialogInternal> = {
  title: "Dialog/Internal",
  component: DialogInternal,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "720px" },
    },
  },
  tags: ["autodocs", "internal"],
  argTypes: {
    ...argTypes,
    variant: {
      control: "select",
      options: dialogVariants,
    },
  },
  decorators: [
    (Story, { args: { isOpen, ...rest } }) => {
      const [open, setOpen] = useState(isOpen);

      const handleClose = () => {
        setOpen(false);
      };
      const handleOpen = () => {
        setOpen(true);
      };

      return (
        <ApplicationFrame
          {...(ApplicationFrameStoryMeta.args as ComponentProps<typeof ApplicationFrame>)}
        >
          <div className="flex flex-1 items-center justify-center rounded-md border border-solid border-f1-border-secondary bg-f1-background">
            <F0Button label="Open dialog" onClick={handleOpen} />
            <Story args={{ ...rest, isOpen: open, onClose: handleClose }} />
          </div>
        </ApplicationFrame>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof F0Dialog>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Team Status",
    variant: "notification" as const,
    type: "info",
    primaryAction: {
      label: "submit",
      icon: Placeholder,
      onClick: () => {},
    },
  },
};
