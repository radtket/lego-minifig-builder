import PropTypes from "prop-types";
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";

export const theme = {
  spacing: {
    small: "12px",
    base: "24px",
    large: "48px",
  },
  colors: {
    black: "#000",
    white: "#fff",
    yellowBright: "#f5d63d",
    yellowDark: "#f2cc0d",
    red: "#c00",
    mercury: "#e6e6e6",
    gray1: "#dedede",
    gray2: "#cccccc",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
