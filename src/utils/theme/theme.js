import { createTheme } from "@mui/material";
import { pink } from "@mui/material/colors";

export const theme = createTheme({
  typography: {
    fontFamily:  'Poppins, sans-serif'
  },
  palette: {
    primary: {
      main: pink[200]
    }
  }
})