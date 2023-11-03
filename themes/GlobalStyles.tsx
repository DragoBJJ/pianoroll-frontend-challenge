import { DefaultTheme, createGlobalStyle } from "styled-components";

export const defaultTheme: DefaultTheme = {
  name: "default",
  borderRadius: "4px",
  bodyColor: "#004281",
  textColor: "#000000",
  palette: {
    common: {
      black: "#28282B",
      white: "#ffffff",
      cream: "#eee7e1",
      ecru: "	#f6f1e8",
      red: "#A51C30",
    },
    primary: {
      main: "rgb(75, 108, 183)",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#A51C30",
      contrastText: "#ffffff",
    },
  },
};
export const darkTheme: DefaultTheme = {
  name: "darkTheme",
  borderRadius: "4px",
  bodyColor: "#373737",
  textColor: "#fff",
  palette: {
    common: {
      black: "#121212",
      white: "#ffffff",
      cream: "#eee7e1",
      ecru: "	#f6f1e8",
      red: "#A51C30",
    },
    primary: {
      main: "#3b82f6",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#eee7e1",
      contrastText: "#ffffff",
    },
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
     background:${({ theme }) => theme.palette.common.ecru};
    color: ${({ theme }) => theme.textColor};
  }
`;
