"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { ReactNode, memo } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme } from "@/themes/GlobalStyles";

type ProviderType = {
  children: ReactNode;
};

export const StyledProvider = memo<ProviderType>(({ children }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
});
