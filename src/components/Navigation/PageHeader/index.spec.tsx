import {
  render,
  fireEvent,
  screen,
  within,
} from "@testing-library/react-native";
import React from "react";
import { PageHeader } from "./"; // Assuming index.tsx is in the same folder
import { ButtonProps } from "../../Button"; // Adjust path as necessary
// import { AppIcons } from "../../../index"; // Adjust path as necessary - Not directly used in mock after change

// Define a simple type for the mocked icon
type MockIconType = { name: string };

// Mock the Button component
jest.mock("../../Button", () => ({
  Button: jest.fn(
    ({
      label,
      onPress,
      icon,
      showBadge,
      ...rest
    }: ButtonProps & { icon?: MockIconType }) => {
      const MockButton = require("react-native").TouchableOpacity;
      const MockText = require("react-native").Text;
      return (
        <MockButton onPress={onPress} accessibilityLabel={label} {...rest}>
          <MockText>{label}</MockText>
          {icon && <MockText>Icon:{icon.name}</MockText>}
          {showBadge && <MockText>Badge</MockText>}
        </MockButton>
      );
    },
  ),
}));

// Mock AppIcons - specifically the Bell icon used by PageHeader's NotificationAction
jest.mock("../../../index", () => ({
  AppIcons: {
    Bell: { name: "Bell" } as MockIconType, // Ensure the mock matches MockIconType
  },
}));

describe("PageHeader", () => {
  const mockOnPressNotification = jest.fn();

  const defaultProps = {
    title: "Test Page Title",
  };

  const propsWithActions = {
    ...defaultProps,
    actions: [
      {
        type: "notifications" as const,
        label: "Notifications",
        onPress: mockOnPressNotification,
        showBadge: false,
      },
    ],
  };

  const propsWithMultipleActions = {
    ...defaultProps,
    actions: [
      {
        type: "notifications" as const,
        label: "Notifications",
        onPress: mockOnPressNotification,
        showBadge: true,
      },
      {
        type: "notifications" as const, // Assuming another action of the same type for simplicity
        label: "Alerts",
        onPress: jest.fn(),
      },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Snapshot tests
  it("Snapshot - renders correctly with only a title", () => {
    const { toJSON } = render(<PageHeader {...defaultProps} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot - renders correctly with one action", () => {
    const { toJSON } = render(<PageHeader {...propsWithActions} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot - renders correctly with multiple actions", () => {
    const { toJSON } = render(<PageHeader {...propsWithMultipleActions} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot - renders correctly with one action with a badge", () => {
    const propsWithBadge = {
      ...defaultProps,
      actions: [
        {
          type: "notifications" as const,
          label: "Notifications",
          onPress: mockOnPressNotification,
          showBadge: true,
        },
      ],
    };
    const { toJSON } = render(<PageHeader {...propsWithBadge} />);
    expect(toJSON()).toMatchSnapshot();
  });

  // Functional tests
  it("renders the title correctly", () => {
    render(<PageHeader {...defaultProps} />);
    const title = screen.getByText("Test Page Title");
    expect(title).toBeDefined();
  });

  it("does not render actions if actions prop is not provided", () => {
    render(<PageHeader {...defaultProps} />);
    const notificationButton = screen.queryByText("Notifications");
    expect(notificationButton).toBeNull();
  });

  it("renders action buttons when actions prop is provided", () => {
    render(<PageHeader {...propsWithActions} />);
    const notificationButton = screen.getByText("Notifications");
    expect(notificationButton).toBeDefined();
  });

  it("calls the onPress handler of an action button when pressed", () => {
    render(<PageHeader {...propsWithActions} />);
    const notificationButton = screen.getByText("Notifications");
    fireEvent.press(notificationButton);
    expect(mockOnPressNotification).toHaveBeenCalledTimes(1);
  });

  it("displays a badge on an action button if showBadge is true", () => {
    render(
      <PageHeader
        title="Test Title"
        actions={[
          {
            type: "notifications",
            label: "Notifications",
            onPress: jest.fn(),
            showBadge: true,
          },
        ]}
      />,
    );
    const badge = screen.getByText("Badge");
    expect(badge).toBeDefined();
  });

  it("does not display a badge if showBadge is false or undefined", () => {
    render(
      <PageHeader
        title="Test Title"
        actions={[
          {
            type: "notifications",
            label: "Notifications",
            onPress: jest.fn(),
            // showBadge is undefined here
          },
          {
            type: "notifications",
            label: "Alerts",
            onPress: jest.fn(),
            showBadge: false,
          },
        ]}
      />,
    );
    const badge = screen.queryByText("Badge");
    expect(badge).toBeNull();
  });

  it("renders multiple action buttons correctly", () => {
    render(<PageHeader {...propsWithMultipleActions} />);
    const notificationsButton = screen.getByText("Notifications");
    const alertsButton = screen.getByText("Alerts");

    expect(notificationsButton).toBeDefined();
    expect(alertsButton).toBeDefined();

    const notificationButtonContainer = screen.getByLabelText("Notifications");

    const badge = within(notificationButtonContainer).getByText("Badge");
    expect(badge).toBeDefined();
  });
});
