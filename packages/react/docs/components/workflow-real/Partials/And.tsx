import { Box, Text } from "@factorialco/deprecated-design-system"

import i18n from "../_stubs/i18n"

export const And = () => {
  return (
    <Box
      paddingX="s4"
      borderRadius={{ all: "abs008" }}
      height="s20"
      border={{ all: { width: "s1", style: "solid", color: "grey300" } }}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <Text color="textPrimary" weight="medium" size="100">
        {i18n.t("workflows.node_type.condition.and")}
      </Text>
    </Box>
  )
}
