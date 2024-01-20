import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    // CSS Reset
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html {
    font-size: 16px;
    }

    body {
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    margin: 0;
    font-weight: normal;
    }

    p {
    margin: 0;
    }

    ul,
    ol {
    margin: 0;
    padding: 0;
    list-style: none;
    }

    a {
    text-decoration: none;
    }

    button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    }

    input,
    textarea {
    border: none;
    outline: none;
    }

    /* Additional reset styles */

    /* Remove default list styles */
    ul,
    ol {
    list-style: none;
    }

    /* Remove default button styles */
    button {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    }

    /* Remove default input styles */
    input[type="text"],
    input[type="password"],
    textarea {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    }

`;

export default GlobalStyles;
