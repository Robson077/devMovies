import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline : none;
        text-decoration: none;
    }

    body {
        background-color: #000000;
        font-family: 'Montserrat', sans-serif;
    }
`