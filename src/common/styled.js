import styled, { createGlobalStyle } from 'styled-components/macro'

import font from '../assets/fonts/Yekan.ttf'

export const GlobalStyles = createGlobalStyle`
 html {
    box-sizing: border-box;
  }

 *,
 *::before,
 *::after {
    box-sizing: inherit;
    transition: 0.2s;
  }

  @font-face {
    font-family: 'Yekan';
    src: local('Yekan'), url(${font}) format('truetype');
  }

  body {
    direction: rtl;
    font-family: Yekan;
    background-color: #ECEFF1;
    color: #263238;
  }
`

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: pointer;
  background-color: inherit;
  border: none;
  color: inherit;
`
