import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        font-family: sans-serif;
        background-attachment: fixed;
        background: rgb(67, 208, 226);
        background: linear-gradient(
            133deg,
            rgba(67, 208, 226, 1) 0%,
            rgba(72, 146, 226, 1) 100%
        );
    }
    a {
        text-decoration: none;
        color: unset;
        display: block;
    }
    * {
        box-sizing: border-box;
    }
    *:focus {
        outline: none;
    }
`;

export const colors = {
  light: "#ffffff",
  shadow: "#00000030",
  blue: "#2a6b89",
  transparentBlue: "#398fb790"
};

export default GlobalStyle;
