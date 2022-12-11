import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        color: "gray.400",
      },
    },
  },
});

export default theme;
