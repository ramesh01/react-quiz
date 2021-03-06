import styled, { createGlobalStyle } from "styled-components";
const BGImage  = require('./assets/background-image.jpg');

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'catamaran', sans-serif;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2 rem;
        margin: 0;
    }

    h1 {
        font-family: Fascinate Inline, 'Arial Narrow Bold';
        background-size: 100%;
        text-shadow: 1px 1px 2px;
    }

    .start, .next {
        cursor: pointer;
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;createGlobalStyle
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;createGlobalStyle
    }
`