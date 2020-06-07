import React from 'react'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import selectionActions from '../../app/selection/actions'

 const StyledItem = styled.button`
  border: 1px solid black;
  padding: 5px 10px;
  background: ${({ theme }) => theme.colors.grey };
  color: ${({ theme }) => theme.colors.white };
  cursor: pointer;
   
  :focus {
    outline: none;
  }

  ${props => props.active && css`
    background: ${({ theme }) => theme.colors.black };
  `}
`

const Item = (props) => {
  const { item, active, carPartName } = props
  const clickHander = () => {
    console.log(item.id, carPartName)
    props.addElement(item.id, carPartName)
  }

  return (
    <StyledItem active={active} onClick={clickHander}>
      {item.name}
    </StyledItem>
  )
}

Item.displayName = 'Item'

const mapDispatchToProps = dispatch => ({
  addElement: (elId, carPartName) => dispatch(selectionActions[`add${carPartName}`](elId))
})

export default connect(null, mapDispatchToProps)(Item)
