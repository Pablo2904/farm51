import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const StyledContainer = styled.div`
  padding: 20px;
  background: ${({theme}) => theme.colors.black};
  text-align: left;
  min-width: 300px;
  ${({theme}) => theme.flexColumn};
`

const StyledH2 = styled.h2`
  margin-bottom: 15px;
  text-align: center;
`

const StyledUl = styled.ul`
  margin-bottom: 40px;
  flex-grow: 1;
`

const StyledLi = styled.li`
  list-style-type: none;
  margin-bottom: 5px;
  text-transform: capitalize;
  ${({theme}) => theme.flexSpaceBeetwen};
`

const StyledSummary = styled.div`
  ${({theme}) => theme.flexSpaceBeetwen};

  :last-child {
    font-weight: bold;
  }
`

const Summary = ({selection, parts}) => {
  const elements = {
    name: 0,
    value: 1
  }

  const summaryData =  React.useMemo(() => Object.entries(selection), [selection])

  const dataToRender = React.useMemo(() => summaryData.map(part => {
    return [part[elements.name], parts[part[elements.name]].find(el => el.id === part[elements.value])]
  }), [elements.name, elements.value, parts, summaryData])

  const countSummaryPrice = React.useCallback(() => {
    return dataToRender.map(part => {
      return (part && part[elements.value] && part[elements.value].price) || 0
    }).reduce((prev, curr) => {
      return prev + curr
    }).toFixed(2)
  }, [dataToRender, elements.value])

  return (
    <StyledContainer>
      <StyledH2>
        Summary
      </StyledH2>
      <StyledUl>
      {
        dataToRender.map((item, index) =>
          <StyledLi key={index}>
            <span>{item[elements.name]}:</span>
            <span>{(item[elements.value] && item[elements.value].name) || `Choose Your ${item[elements.name]}`}</span>
          </StyledLi>
        )
      }
      </StyledUl>
      <StyledSummary>
        <span>Price:</span>
        <span>${countSummaryPrice()}</span>
      </StyledSummary>
    </StyledContainer>
  )
}

const mapStateToProps = state => ({
  parts: state.parts,
  selection: state.selection
})

export default connect(mapStateToProps, {})(Summary)
