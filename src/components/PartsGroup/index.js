import React from 'react';
import styled from 'styled-components'

const StyleHeader = styled.h5`
  margin-bottom: 5px;
  text-align: left;
  display: block;
  text-transform: capitalize;
`

const StyledChildrenContainer = styled.div`
  margin-bottom: 10px;
  ${({theme}) => theme.flexCenter};
`

const StyledGroupContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

const PartsGroup = ({ header, children }) => {
  return (
    <StyledGroupContainer>
      <StyleHeader>{header}</StyleHeader>
      <StyledChildrenContainer>
        {children}
      </StyledChildrenContainer>
    </StyledGroupContainer>
  )
}

export default PartsGroup
