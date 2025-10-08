import { render, fireEvent, screen } from "@testing-library/react-native";
import React from "react";
import { IconType } from "../../Icon";
import {
  ActivityItem,
  ActivityItemSkeleton,
} from "../../Activity/ActivityItem";

// Mock the IconAvatar component
jest.mock("../../Avatars/IconAvatar", () => ({
  IconAvatar: () => null,
}));

// Mock dependencies
const mockIcon: IconType = "check" as unknown as IconType;
const mockOnPress = jest.fn();

describe("ActivityItem", () => {
  const defaultProps = {
    id: "activity-123",
    date: "Today",
    title: "Activity Title",
    category: "Time off",
    onPress: mockOnPress,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Snapshot", () => {
    const { toJSON } = render(<ActivityItem {...defaultProps} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders correctly with required props", () => {
    render(<ActivityItem {...defaultProps} />);

    const title = screen.getByText("Activity Title");
    const moduleDate = screen.getByText("Time off · Today");

    expect(title).toBeDefined();
    expect(moduleDate).toBeDefined();
  });

  it("renders correctly with description", () => {
    render(<ActivityItem {...defaultProps} description="Test description" />);

    const description = screen.getByText("Test description");

    expect(description).toBeDefined();
  });

  it("renders icon container when icon is provided", () => {
    render(<ActivityItem {...defaultProps} icon={mockIcon} />);

    const icon = screen.getByLabelText("activity-icon-container");

    expect(icon).toBeDefined();
  });

  it("does not render icon container when icon is not provided", () => {
    render(<ActivityItem {...defaultProps} />);

    const icon = screen.queryByLabelText("activity-icon-container");

    expect(icon).toBeNull();
  });

  it("shows unread indicator when isUnread is true", () => {
    render(<ActivityItem {...defaultProps} isUnread={true} />);

    const indicator = screen.getByLabelText("unread-indicator");

    expect(indicator).toBeDefined();
  });

  it("does not show unread indicator when isUnread is false", () => {
    render(<ActivityItem {...defaultProps} isUnread={false} />);

    const indicator = screen.queryByLabelText("unread-indicator");

    expect(indicator).toBeNull();
  });

  it("calls onPress with correct id when pressed", () => {
    render(<ActivityItem {...defaultProps} />);

    fireEvent.press(screen.getByLabelText("activity-item"));

    expect(mockOnPress).toHaveBeenCalledWith("activity-123");
  });
});

describe("ActivityItemSkeleton", () => {
  it("renders skeleton correctly", () => {
    render(<ActivityItemSkeleton />);

    const skeleton = screen.getByLabelText("activity-skeleton");

    expect(skeleton).toBeDefined();
  });
});
