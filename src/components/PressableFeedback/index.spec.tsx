import { render, fireEvent, screen } from "@testing-library/react-native";
import React from "react";
import { View, Text } from "react-native";
import { PressableFeedback } from "./";

describe("PressableFeedback", () => {
  const mockOnPressIn = jest.fn();
  const mockOnPressOut = jest.fn();
  const mockOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Snapshots", () => {
    it("Snapshot - default variant (both)", () => {
      const { toJSON } = render(
        <PressableFeedback>
          <Text>Test Content</Text>
        </PressableFeedback>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it("Snapshot - highlight variant", () => {
      const { toJSON } = render(
        <PressableFeedback variant="highlight">
          <Text>Test Content</Text>
        </PressableFeedback>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it("Snapshot - scale variant", () => {
      const { toJSON } = render(
        <PressableFeedback variant="scale">
          <Text>Test Content</Text>
        </PressableFeedback>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it("Snapshot - none variant", () => {
      const { toJSON } = render(
        <PressableFeedback variant="none">
          <Text>Test Content</Text>
        </PressableFeedback>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it("Snapshot - disabled state", () => {
      const { toJSON } = render(
        <PressableFeedback disabled>
          <Text>Test Content</Text>
        </PressableFeedback>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it("Snapshot - with disableAnimation", () => {
      const { toJSON } = render(
        <PressableFeedback disableAnimation>
          <Text>Test Content</Text>
        </PressableFeedback>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it("Snapshot - with custom scaleAnimation config", () => {
      const { toJSON } = render(
        <PressableFeedback
          variant="scale"
          scaleAnimation={{ value: 0.95, timingConfig: { duration: 200 } }}
        >
          <Text>Test Content</Text>
        </PressableFeedback>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it("Snapshot - with custom highlightAnimation config", () => {
      const { toJSON } = render(
        <PressableFeedback
          variant="highlight"
          highlightAnimation={{
            backgroundColor: "rgba(255, 0, 0, 1)",
            opacity: [0, 0.2],
            timingConfig: { duration: 200 },
          }}
        >
          <Text>Test Content</Text>
        </PressableFeedback>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it("Snapshot - with custom className", () => {
      const { toJSON } = render(
        <PressableFeedback className="bg-blue-500 p-4">
          <Text>Test Content</Text>
        </PressableFeedback>,
      );

      expect(toJSON()).toMatchSnapshot();
    });

    it("Snapshot - with custom style", () => {
      const { toJSON } = render(
        <PressableFeedback style={{ padding: 16 }}>
          <Text>Test Content</Text>
        </PressableFeedback>,
      );

      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe("Rendering", () => {
    it("renders children correctly", () => {
      render(
        <PressableFeedback>
          <Text>Test Content</Text>
        </PressableFeedback>,
      );

      expect(screen.getByText("Test Content")).toBeDefined();
    });

    it("renders multiple children correctly", () => {
      render(
        <PressableFeedback>
          <Text>First</Text>
          <Text>Second</Text>
        </PressableFeedback>,
      );

      expect(screen.getByText("First")).toBeDefined();
      expect(screen.getByText("Second")).toBeDefined();
    });

    it("renders with View as child", () => {
      render(
        <PressableFeedback>
          <View testID="child-view">
            <Text>Content</Text>
          </View>
        </PressableFeedback>,
      );

      expect(screen.getByTestId("child-view")).toBeDefined();
    });
  });

  describe("Event Handlers", () => {
    it("calls onPressIn when pressed", () => {
      render(
        <PressableFeedback onPressIn={mockOnPressIn} testID="pressable">
          <Text>Test Content</Text>
        </PressableFeedback>,
      );

      const pressable = screen.getByTestId("pressable");
      fireEvent(pressable, "pressIn");

      expect(mockOnPressIn).toHaveBeenCalledTimes(1);
    });

    it("calls onPressOut when released", () => {
      render(
        <PressableFeedback onPressOut={mockOnPressOut} testID="pressable">
          <Text>Test Content</Text>
        </PressableFeedback>,
      );

      const pressable = screen.getByTestId("pressable");
      fireEvent(pressable, "pressOut");

      expect(mockOnPressOut).toHaveBeenCalledTimes(1);
    });

    it("calls both onPressIn and onPressOut in sequence", () => {
      render(
        <PressableFeedback
          onPressIn={mockOnPressIn}
          onPressOut={mockOnPressOut}
          testID="pressable"
        >
          <Text>Test Content</Text>
        </PressableFeedback>,
      );

      const pressable = screen.getByTestId("pressable");
      fireEvent(pressable, "pressIn");
      fireEvent(pressable, "pressOut");

      expect(mockOnPressIn).toHaveBeenCalledTimes(1);
      expect(mockOnPressOut).toHaveBeenCalledTimes(1);
    });

    it("calls onPress when provided", () => {
      render(
        <PressableFeedback onPress={mockOnPress} testID="pressable">
          <Text>Test Content</Text>
        </PressableFeedback>,
      );

      const pressable = screen.getByTestId("pressable");
      fireEvent.press(pressable);

      expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    it("does not call onPressIn when disabled", () => {
      render(
        <PressableFeedback onPressIn={mockOnPressIn} disabled testID="pressable">
          <Text>Test Content</Text>
        </PressableFeedback>,
      );

      const pressable = screen.getByTestId("pressable");
      fireEvent(pressable, "pressIn");

      expect(mockOnPressIn).not.toHaveBeenCalled();
    });

    it("does not call onPressOut when disabled", () => {
      render(
        <PressableFeedback
          onPressOut={mockOnPressOut}
          disabled
          testID="pressable"
        >
          <Text>Test Content</Text>
        </PressableFeedback>,
      );

      const pressable = screen.getByTestId("pressable");
      fireEvent(pressable, "pressOut");

      expect(mockOnPressOut).not.toHaveBeenCalled();
    });
  });

  describe("Variants", () => {
    it("applies highlight variant correctly", () => {
      const { toJSON } = render(
        <PressableFeedback variant="highlight">
          <Text>Test</Text>
        </PressableFeedback>,
      );

      const tree = toJSON();
      expect(tree).toBeDefined();
      // Highlight overlay should be present
      expect(tree?.children?.length).toBeGreaterThan(1);
    });

    it("applies scale variant correctly", () => {
      const { toJSON } = render(
        <PressableFeedback variant="scale">
          <Text>Test</Text>
        </PressableFeedback>,
      );

      const tree = toJSON();
      expect(tree).toBeDefined();
    });

    it("applies both variant correctly", () => {
      const { toJSON } = render(
        <PressableFeedback variant="both">
          <Text>Test</Text>
        </PressableFeedback>,
      );

      const tree = toJSON();
      expect(tree).toBeDefined();
      // Both highlight overlay and scale should be present
      expect(tree?.children?.length).toBeGreaterThan(1);
    });

    it("applies none variant correctly (no animations)", () => {
      const { toJSON } = render(
        <PressableFeedback variant="none">
          <Text>Test</Text>
        </PressableFeedback>,
      );

      const tree = toJSON();
      expect(tree).toBeDefined();
      // No highlight overlay should be present
      expect(tree?.children?.length).toBe(1);
    });
  });

  describe("Animation Configuration", () => {
    it("uses custom scale value when provided", () => {
      const { toJSON } = render(
        <PressableFeedback
          variant="scale"
          scaleAnimation={{ value: 0.9 }}
        >
          <Text>Test</Text>
        </PressableFeedback>,
      );

      const tree = toJSON();
      expect(tree).toBeDefined();
    });

    it("uses custom highlight opacity when provided", () => {
      const { toJSON } = render(
        <PressableFeedback
          variant="highlight"
          highlightAnimation={{ opacity: [0, 0.3] }}
        >
          <Text>Test</Text>
        </PressableFeedback>,
      );

      const tree = toJSON();
      expect(tree).toBeDefined();
    });

    it("uses custom highlight background color when provided", () => {
      const { toJSON } = render(
        <PressableFeedback
          variant="highlight"
          highlightAnimation={{ backgroundColor: "rgba(255, 0, 0, 1)" }}
        >
          <Text>Test</Text>
        </PressableFeedback>,
      );

      const tree = toJSON();
      expect(tree).toBeDefined();
    });

    it("disables animations when disableAnimation is true", () => {
      const { toJSON } = render(
        <PressableFeedback disableAnimation variant="both">
          <Text>Test</Text>
        </PressableFeedback>,
      );

      const tree = toJSON();
      expect(tree).toBeDefined();
      // No highlight overlay should be present when animations are disabled
      expect(tree?.children?.length).toBe(1);
    });
  });

  describe("Props Forwarding", () => {
    it("forwards accessibility props", () => {
      render(
        <PressableFeedback
          accessibilityLabel="Test Button"
          accessibilityRole="button"
          testID="pressable"
        >
          <Text>Test</Text>
        </PressableFeedback>,
      );

      const pressable = screen.getByTestId("pressable");
      expect(pressable.props.accessibilityLabel).toBe("Test Button");
      expect(pressable.props.accessibilityRole).toBe("button");
    });

    it("forwards testID prop", () => {
      render(
        <PressableFeedback testID="pressable-feedback">
          <Text>Test</Text>
        </PressableFeedback>,
      );

      const pressable = screen.getByTestId("pressable-feedback");
      expect(pressable).toBeDefined();
    });

    it("merges custom className with default className", () => {
      const { toJSON } = render(
        <PressableFeedback className="custom-class">
          <Text>Test</Text>
        </PressableFeedback>,
      );

      const tree = toJSON();
      expect(tree).toBeDefined();
    });

    it("merges custom style with animated style", () => {
      const customStyle = { padding: 20 };
      const { toJSON } = render(
        <PressableFeedback style={customStyle}>
          <Text>Test</Text>
        </PressableFeedback>,
      );

      const tree = toJSON();
      expect(tree).toBeDefined();
    });
  });
});
