import { createGlobalStyle } from 'styled-components/macro'

import font from '../assets/fonts/Yekan.ttf'

export const GlobalStyles = createGlobalStyle`
 html {
    box-sizing: border-box;
  }

 *,
 *::before,
 *::after {
    box-sizing: inherit;
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
