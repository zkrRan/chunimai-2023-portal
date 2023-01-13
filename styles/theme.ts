import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: "element.background",
      },
    },
  },
  components: {
    Container: defineStyleConfig({
      baseStyle: {
        maxW: "7xl",
        px: 4,
      },
    }),
    Button: defineStyleConfig({
      variants: {
        primary: {
          background: "primary.500",
          textColor: "element.background",
          _hover: {
            background: "primary.600",
          },
          _active: {
            background: "primary.700",
          },
          _disabled: {
            _hover: {
              background: "primary.600 !important",
            },
            _active: {
              background: "primary.700 !important",
            },
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    }),
    Heading: defineStyleConfig({
      baseStyle: {
        textColor: "primary.400",
      },
    }),
    Link: defineStyleConfig({
      baseStyle: {
        textColor: "primary.500",
      },
    }),
  },
  fonts: {
    heading: "Line, sans-serif",
    body: "Line, sans-serif",
  },
  colors: {
    primary: {
      50: "#fffceb",
      100: "#fdf4c8",
      200: "#fbe98c",
      300: "#f8d751",
      400: "#f6c529",
      500: "#efa40f", // Base Color
      600: "#d47e0b",
      700: "#b0590d",
      800: "#8f4611",
      900: "#763a11",
    },
    element: {
      footer: "#181617",
      background: "#232122",
    },
  },
});
