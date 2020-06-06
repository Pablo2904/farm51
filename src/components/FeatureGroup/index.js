import React from 'react';
import styled from 'styled-components'

const StyleHeader = styled.h5`
  margin-bottom: 5px;
  text-align: left;
  display: block;
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

export const FeatureGroup = ({ header, children }) => {
  return (
    <StyledGroupContainer>
      <StyleHeader>{header}</StyleHeader>
      <StyledChildrenContainer>
        {children}
      </StyledChildrenContainer>
    </StyledGroupContainer>
  )
}

FeatureGroup.displayName = 'FeatureGroup'
