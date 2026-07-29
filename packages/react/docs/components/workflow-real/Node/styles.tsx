import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react"

export interface Style {
  typeStyle: Partial<CSSStyleDeclaration>
  typeIconStyle: React.CSSProperties
  typeTitleStyle: React.CSSProperties
  containerStyle: Partial<CSSStyleDeclaration>
}

type Color = string

export type BasicNodeTheme = {
  type: {
    background: Color
    icon: ForwardRefExoticComponent<
      Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>
    >
    title: string
    color: Color
    selectedColor: Color
    selectedBackground: Color
    paddingLeft?: string
  }
  container: {
    borderColor: Color
    selectedBorderColor: Color
    hoverBorderColor?: Color
  }
}

export const getStyle = (
  isSelected: boolean,
  isValid: boolean,
  theme: BasicNodeTheme,
  isHovered = false
): Style => {
  if (!isValid) {
    return getErrorStyle()
  }

  const typeStyle = {
    backgroundColor: isSelected
      ? theme.type.selectedBackground
      : theme.type.background,
  }
  const typeIconStyle = {
    color: isSelected ? theme.type.selectedColor : theme.type.color,
    paddingLeft: theme.type.paddingLeft || undefined,
  }
  const typeTitleStyle = {
    color: isSelected ? theme.type.selectedColor : theme.type.color,
  }
  const containerStyle = {
    borderColor: isSelected
      ? theme.container.selectedBorderColor
      : isHovered && theme.container.hoverBorderColor
        ? theme.container.hoverBorderColor
        : theme.container.borderColor,
  }

  return {
    typeStyle,
    typeIconStyle,
    typeTitleStyle,
    containerStyle,
  }
}

const getErrorStyle = (): Style => {
  const typeStyle = {
    backgroundColor: "#FFF",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#E2E2E5",
  }
  const typeIconStyle = {}
  const typeTitleStyle = {}
  const containerStyle = { borderColor: "#E51943" }

  return {
    typeStyle,
    typeIconStyle,
    typeTitleStyle,
    containerStyle,
  }
}
