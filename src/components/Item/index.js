import React from 'react'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import selectionActions from '../../app/selection/actions'

 const StyledItem = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  padding: 5px 10px;
  background: ${({ theme }) => theme.colors.grey };
  color: ${({ theme }) => theme.colors.white };
  cursor: pointer;
  margin-right: 5px;
   
  :focus {
    outline: none;
  }

  ${props => props.active && css`
    background: ${({ theme }) => theme.colors.black };
    border-color: ${({ theme }) => theme.colors.white };
  `}

  ${props => props.carPartName ==='color' && css`
    background: ${props => `#${props.name}` };
    color: ${props => `#${props.name}` };
  `}
`

const Item = ({ item, active, carPartName, selection, addElement, removeUnder }) => {
  const clickHander = () => {
    const carPartNameCapitalized = carPartName.charAt(0).toUpperCase() + carPartName.slice(1)

    if (selection[carPartName] === item.id) {
      addElement('', carPartNameCapitalized)
      removeUnder(carPartNameCapitalized)
    } else {
      addElement(item.id, carPartNameCapitalized)
    }

    if (selection[carPartName]) {
      removeUnder(carPartNameCapitalized)
    }
  }

  return (
    <StyledItem
      active={active}
      onClick={clickHander}
      carPartName={carPartName}
      name={item.colorHex}
    >
      {item.name}
    </StyledItem>
  )
}

const mapDispatchToProps = dispatch => ({
  addElement: (elId, carPartName) => dispatch(selectionActions[`add${carPartName}`](elId)),
  removeUnder: (carPartName) => dispatch(selectionActions[`removeUnder${carPartName}`]())
})

const mapStateToProps = state => ({
  selection: state.selection
})

export default connect(mapStateToProps, mapDispatchToProps)(Item)
