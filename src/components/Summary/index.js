import React from 'react'
import styled from 'styled-components'
import { Car } from '../../img/car'

const StyledContainer = styled.div`
  padding: 20px;
  background: ${({theme}) => theme.colors.black};
  width: 200px;
`

const StyledImgContainer = styled.div`
  background: ${({theme}) => theme.colors.white};
  ${({theme}) => theme.flexCenter};
  margin-bottom: 20px;
`

const StyledPrice = styled.div`
  text-align: left;
`

export const Summary = () => {
  return (
    <StyledContainer>
      <StyledImgContainer>
        <Car />
      </StyledImgContainer>
      <StyledPrice>
        Price: xxx
      </StyledPrice>
    </StyledContainer>
  )
}

Summary.displayName = 'Summary'
