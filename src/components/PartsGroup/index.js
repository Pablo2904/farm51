import React from 'react';
import styled from 'styled-components'

const StyleHeader = styled.h3`
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
  ${({theme}) => theme.flexColumn};
  align-items: flex-start;
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
