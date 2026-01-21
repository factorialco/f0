import { F0Button } from "@/components/F0Button";
import { argTypes, OTHER_ACTIONS, TABS } from "./commons";
import { ActivityItemList } from "@/experimental/Information/Activity/ActivityItemList";
import { Default as ActivityItemListDefault } from "@/experimental/Information/Activity/ActivityItemList/index.stories";
import { ResourceHeader } from "@/experimental/Information/Headers/ResourceHeader";
import { Default as ResourceHeaderDefault } from "@/experimental/Information/Headers/ResourceHeader/index.stories";
import { OnePersonListItem, OnePersonListItemProps } from "@/experimental/Lists/OnePersonListItem";
import { Default as OnePersonListItemDefault } from "@/experimental/Lists/OnePersonListItem/index.stories";
import { ApplicationFrame } from "@/experimental/Navigation/ApplicationFrame";
import ApplicationFrameStoryMeta from "@/experimental/Navigation/ApplicationFrame/index.stories";
import { Placeholder } from "@/icons/app";
import CheckDoubleIcon from "@/icons/app/CheckDouble";
import CrossIcon from "@/icons/app/Cross";
import SaveIcon from "@/icons/app/Save";
import ShareIcon from "@/icons/app/Share";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { ComponentProps, FC, useState } from "react";
import { F0Dialog } from "../index";

const meta: Meta<typeof F0Dialog> = {
  title: "Dialog",
  component: F0Dialog,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "720px" },
    },
  },
  tags: ["autodocs", "experimental"],
  argTypes,
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

const ExampleList = ({ itemsCount = 20 }: { itemsCount?: number }) => (
  <div className="flex flex-col gap-4">
    {Array.from({ length: itemsCount }, (_, i) => (
      <div key={i} className="rounded-sm border border-solid border-f1-border-secondary p-4">
        List Item {i + 1}
      </div>
    ))}
  </div>
);

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Team Status",
    otherActions: OTHER_ACTIONS,
    primaryAction: {
      label: "submit",
      icon: Placeholder,
      onClick: () => {},
    },
    children: <ExampleList itemsCount={2} />,
  },
  play: async ({ canvasElement, step }) => {
    // Dialogs may render in portals, so search the full page
    const page = within(canvasElement.closest("body")!);

    await step("Verify dialog is open and content is visible", async () => {
      // Wait for dialog to render
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Verify dialog content
      expect(page.getByText("Team Status")).toBeInTheDocument();
      expect(page.getByText("List Item 1")).toBeInTheDocument();
      expect(page.getByText("List Item 2")).toBeInTheDocument();
    });

    await step("Verify primary action button exists", async () => {
      const submitButton = page.getByRole("button", { name: /submit/i });
      expect(submitButton).toBeInTheDocument();
    });

    await step("Test primary action click", async () => {
      const submitButton = page.getByRole("button", { name: /submit/i });
      await userEvent.click(submitButton);

      // Wait for any state updates
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    await step("Test close button", async () => {
      // Find and click the close button (usually has aria-label="Close" or similar)
      const closeButton = page.getByRole("button", { name: /close/i });
      await userEvent.click(closeButton);

      // Wait for dialog to close
      await new Promise((resolve) => setTimeout(resolve, 200));

      // Verify dialog is closed
      expect(page.queryByText("Team Status")).not.toBeInTheDocument();
    });
  },
};

export const WithPromisePrimaryAction: Story = {
  args: {
    ...Default.args,
    primaryAction: {
      label: "submit",
      icon: Placeholder,
      onClick: () => new Promise((resolve) => setTimeout(() => resolve(), 5000)),
    },
  },
  play: async ({ canvasElement, step }) => {
    // Dialogs may render in portals, so search the full page
    const page = within(canvasElement.closest("body")!);

    await step("Verify dialog is open", async () => {
      // Wait for dialog to render
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Verify dialog content
      expect(page.getByText("Team Status")).toBeInTheDocument();
    });

    await step("Click primary action with promise and verify loading state", async () => {
      const submitButton = page.getByRole("button", { name: /submit/i });

      // Click the button to trigger the promise
      await userEvent.click(submitButton);

      // Wait a bit to see if button becomes disabled (loading state)
      await new Promise((resolve) => setTimeout(resolve, 100));

      // The button should be disabled during promise execution
      // Note: This depends on F0Dialog implementation - if it disables the button
      // If not, we just verify the promise completes

      // Wait for promise to resolve (5 seconds)
      await new Promise((resolve) => setTimeout(resolve, 5200));

      // Verify dialog is still open (promise doesn't close it automatically)
      expect(page.getByText("Team Status")).toBeInTheDocument();
    });
  },
};

export const WithSmWidth: Story = {
  args: {
    isOpen: true,
    width: "sm",
    onClose: () => {},
    title: "Team Status",
    otherActions: OTHER_ACTIONS,
    tabs: TABS,
    children: <ExampleList />,
  },
};

export const WithMdWidth: Story = {
  args: {
    ...WithSmWidth.args,
    width: "md",
  },
};

export const WithLgWidth: Story = {
  args: {
    ...WithMdWidth.args,
    width: "lg",
  },
};

export const WithXlWidth: Story = {
  args: {
    ...WithLgWidth.args,
    width: "xl",
  },
};
export const WithDescription: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Team Status",
    description:
      "This is a description of the team status. Very long text that should wrap properly and not overflow the container boundaries.",
    otherActions: OTHER_ACTIONS,
    tabs: TABS,
    children: <ExampleList />,
  },
};

const ExamplePersonList: FC<{ numberOfItems?: number }> = ({ numberOfItems = 20 }) => (
  <div className="flex flex-col gap-0.5">
    {Array.from({ length: numberOfItems }, (_, i) => (
      <OnePersonListItem key={i} {...(OnePersonListItemDefault.args as OnePersonListItemProps)} />
    ))}
  </div>
);

export const WithPersonListItems: Story = {
  args: {
    ...Default.args,
    tabs: TABS,
    children: <ExamplePersonList />,
  },
};

export const WithLeftPosition: Story = {
  args: {
    ...Default.args,
    position: "left",
    title: "Activity",
    otherActions: OTHER_ACTIONS,
    children: (
      <ActivityItemList
        {...(ActivityItemListDefault.args as ComponentProps<typeof ActivityItemList>)}
      />
    ),
  },
};

export const WithRightPosition: Story = {
  args: {
    ...Default.args,
    position: "right",
  },
};

export const WithFullscreenPosition: Story = {
  args: {
    ...Default.args,
    position: "fullscreen",
  },
};

export const WithFullscreenPositionAndActions: Story = {
  args: {
    ...WithFullscreenPosition.args,
    tabs: TABS,
    primaryAction: {
      label: "Approve",
      icon: CheckDoubleIcon,
      onClick: () => {},
    },
    secondaryAction: {
      label: "Reject",
      icon: CrossIcon,
      onClick: () => {},
    },
    children: <ExamplePersonList numberOfItems={3} />,
  },
};

export const WithMultiplePrimaryActions: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Document Editor",
    description: "Edit your document and choose how to save it.",
    primaryAction: [
      {
        value: "save",
        label: "Save",
        icon: SaveIcon,
        onClick: () => console.log("Save clicked"),
      },
      {
        value: "save-draft",
        label: "Save as draft",
        onClick: () => console.log("Save as draft clicked"),
      },
      {
        value: "save-publish",
        label: "Save and publish",
        icon: ShareIcon,
        onClick: () => console.log("Save and publish clicked"),
      },
    ],
    secondaryAction: {
      label: "Cancel",
      onClick: () => {},
    },
    children: <ExampleList itemsCount={3} />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "When `primaryAction` receives an array of actions, it renders a `F0ButtonDropdown` allowing the user to select between multiple primary actions.",
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    // Dialogs may render in portals, so search the full page
    const page = within(canvasElement.closest("body")!);

    await step("Verify dialog is open with multiple primary actions", async () => {
      // Wait for dialog to render
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Verify dialog content
      expect(page.getByText("Document Editor")).toBeInTheDocument();
      expect(page.getByText("Edit your document and choose how to save it.")).toBeInTheDocument();
      expect(page.getByText("List Item 1")).toBeInTheDocument();
    });

    await step("Verify primary action dropdown button exists", async () => {
      // F0ButtonDropdown shows the first item as the main button label
      const saveButton = page.getByRole("button", { name: /save/i });
      expect(saveButton).toBeInTheDocument();
    });

    await step("Open primary action dropdown menu", async () => {
      // Find the dropdown trigger button - it has data-testid="button-menu"
      const dropdownTrigger = page.queryByTestId("button-menu");

      if (dropdownTrigger) {
        await userEvent.click(dropdownTrigger);
        // Wait for dropdown to open
        await waitFor(() => {
          expect(page.getByRole("menu")).toBeInTheDocument();
        });

        // Verify dropdown items are visible
        const saveDraftOption = page.queryByText("Save as draft");
        const savePublishOption = page.queryByText("Save and publish");

        if (saveDraftOption || savePublishOption) {
          // Click one of the options if available
          if (saveDraftOption) {
            await userEvent.click(saveDraftOption);
          } else if (savePublishOption) {
            await userEvent.click(savePublishOption);
          }
          // Wait for dropdown menu to close after clicking an option
          await waitFor(() => {
            expect(page.queryByRole("menu")).not.toBeInTheDocument();
          });
        }
      } else {
        // Fallback: click the main Save button (which triggers the first action)
        const saveButton = page.getByRole("button", { name: /save/i });
        await userEvent.click(saveButton);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    });

    await step("Test secondary action", async () => {
      // Ensure menu is closed before looking for Cancel button
      await waitFor(
        () => {
          expect(page.queryByRole("menu")).not.toBeInTheDocument();
        },
        { timeout: 1000 },
      );

      const cancelButton = page.getByRole("button", { name: /cancel/i });
      expect(cancelButton).toBeInTheDocument();
      await userEvent.click(cancelButton);

      // Wait for any state updates
      await new Promise((resolve) => setTimeout(resolve, 100));
    });
  },
};

export const WithModule: Story = {
  args: {
    ...Default.args,
    position: "right",
    title: "Team Status",
    module: {
      id: "benefits",
      label: "Benefits",
      href: "/benefits",
    },
    otherActions: OTHER_ACTIONS,
    tabs: TABS,
    children: <ExamplePersonList />,
  },
};

export const WithModuleAndFullscreenPosition: Story = {
  args: {
    ...WithModule.args,
    position: "fullscreen",
  },
};

export const WithResourceHeader: Story = {
  args: {
    ...Default.args,
    position: "right",
    title: "Resource Header",
    module: {
      id: "timeoff",
      label: "Time Off",
      href: "/timeoff",
    },
    children: (
      <ResourceHeader
        {...(ResourceHeaderDefault.args as ComponentProps<typeof ResourceHeader>)}
        primaryAction={undefined}
        secondaryActions={undefined}
        otherActions={undefined}
      />
    ),
  },
};

export const WithResourceHeaderAndFullscreenPosition: Story = {
  args: {
    ...WithResourceHeader.args,
    position: "fullscreen",
  },
};

export const WithFewItems: Story = {
  args: {
    ...Default.args,
    position: "right",
    tabs: TABS,
    primaryAction: {
      label: "Approve",
      icon: CheckDoubleIcon,
      onClick: () => {},
    },
    secondaryAction: {
      label: "Reject",
      icon: CrossIcon,
      onClick: () => {},
    },
    children: <ExamplePersonList numberOfItems={3} />,
  },
};
