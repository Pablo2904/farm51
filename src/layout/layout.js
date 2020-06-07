import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from './theme'

const GlobalStyle = createGlobalStyle`
  body, h5, h2, ul {
    padding: 0;
    margin: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`
const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.colors.darkGrey };
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
