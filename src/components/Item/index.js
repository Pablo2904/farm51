import React from 'react'
import styled from 'styled-components'

 const StyledItem = styled.div`
  border: 1px solid black;
  padding: 5px 10px;
`

export const Item = ({ name }) => {
  if (!name) {
    return null
  }

  return (
    <StyledItem>
      {name}
    </StyledItem>
  )
}

Item.displayName = 'Item'
