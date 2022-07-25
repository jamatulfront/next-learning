import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";

import { Themes } from "./styles/themes";
export interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = (props: WrapperProps) => (
  <ThemeProvider theme={Themes.light}>{props.children}</ThemeProvider>
);

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Wrapper, ...options });

//re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
