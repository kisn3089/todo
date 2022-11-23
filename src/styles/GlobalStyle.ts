import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
        ${reset}
        
        * {
        box-sizing: border-box;
     }

    body {
        margin: 0;
        padding: 0;
        background-color: #202124;
        color: #fff;
    }
`;
