import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { ThemeProvider, createTheme } from "@mui/material/styles";

/* Button Theme********************************************************/
// Augment the palette to include an custom color
declare module "@mui/material/styles" {
  interface Palette {
    peach: Palette["primary"];
    apple: Palette["primary"];
  }

  interface PaletteOptions {
    peach?: PaletteOptions["primary"];
    apple?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    peach: {
      main: "#FF5733",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    apple: {
      main: "#388b2d",
    },
  },
});

// Update the Button's color options to include a violet option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    peach: true;
    apple: true;
  }
}
/********************************************************Button Theme */

export enum EColor {
  secondary = "secondary",
  peach = "peach",
  apple = "apple",
}

type TProps = {
  disabled: boolean;
  isLoading: boolean;
  title: string;
  color: EColor;
  handleClick: () => void;
};

export default function DynamicButton({
  disabled,
  isLoading,
  title,
  color,
  handleClick,
}: TProps) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        color={color}
        variant="outlined"
        onClick={handleClick}
        disabled={disabled}
      >
        {title}
        {isLoading && " ... "}
        {isLoading && <CircularProgress disableShrink sx={{ marginLeft: 2 }} />}
      </Button>
    </ThemeProvider>
  );
}
