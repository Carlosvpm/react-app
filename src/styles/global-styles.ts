
import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background-color: #F6F8FA;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  overflow: auto;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`;
