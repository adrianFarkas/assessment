import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
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

export default GlobalStyle;
