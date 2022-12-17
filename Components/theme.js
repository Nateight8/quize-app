import { createMuiTheme } from "@mui/material";

const theme = createMuiTheme({
  root: {
    backgroundColor: "#1d2532",
    color: "#d9d9d9",
  },

  palette: {
    primary: {
      main: "#282F40",
    },
    secondary: {
      main: "#C26009",
    },
    customProgress: {
      main: "#1e40af",
    },

    customWhite: {
      main: "white",
    },

    progress: {
      main: "linear-gradient(180deg, #10347B 0%, #131925 100%)",
    },

    bgGradient: {
      main: "linear-gradient(180deg, #181E2B 30%, rgba(26, 32, 44, 0.7) 99.99%, rgba(26, 32, 44, 0.7) 100%)",
    },

    secondaryGradient: {
      main: "radial-gradient(50% 50% at 50% 50%, #1E2633 0%, rgba(21, 25, 34, 0.63) 100%)",
    },
  },
});

export default theme;
