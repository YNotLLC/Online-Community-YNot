import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        color: "blackAlpha.600",
      },
    },
    Heading: {
      baseStyle: {
        color: "blackAlpha.900",
      },
    },
    Button: {
      defaultProps: {
        colorScheme: "red",
      },
    },
  },
});

export default theme;
