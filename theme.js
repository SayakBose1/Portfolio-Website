import { extendTheme } from "@chakra-ui/react";
export const theme = extendTheme({
    styles: {
      global: {
        'input::placeholder': {
          color: '#BB86FC', // Your placeholder color
        },
        'textarea::placeholder': {
          color: '#BB86FC', // Your placeholder color
        },
      },
    },
  });