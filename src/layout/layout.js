import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from './theme'

const GlobalStyle = createGlobalStyle`
  body, h3, h2, ul {
    padding: 0;
    margin: 0;
  }

  h3 {
    font-size: 1rem;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`
const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.colors.blueSea };
  color: ${({ theme }) => theme.colors.white };
  height: ${({ theme }) => theme.screenHeight.full };
  ${({theme}) => theme.flexCenter};
`

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <StyledWrapper>
          {children}
        </StyledWrapper>
      </>
    </ThemeProvider>
  )
}

Layout.displayName = 'Layout'
