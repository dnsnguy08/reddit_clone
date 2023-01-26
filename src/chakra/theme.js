// Import font sources
import "@fontsource/open-sans/300.css"
import "@fontsource/open-sans/400.css"
import "@fontsource/open-sans/700.css"
// Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// Call `extendTheme` and pass your custom values
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
    // Button
  },
});

