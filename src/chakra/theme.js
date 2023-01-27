// Import `extendTheme` to override default theme
import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";

// Call `extendTheme` and pass custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "FF3c00", // reddit orange
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: () => ({
        body: {
            bg: "gray.200",
        },
    }),
  },
  components: {
    Button
  },
});

