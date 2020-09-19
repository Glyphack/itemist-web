import styled, { createGlobalStyle } from 'styled-components/macro'

import font from '../assets/fonts/Iranian-Sans.ttf'

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
    font-family: 'IranSans';
    src: local('IranSans'), url(${font}) format('truetype');
  }

  body {
    direction: rtl;
    font-family: IranSans;
    background-color: #ECEFF1;
    color: #263238;
  }
`

export const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: pointer;
`
