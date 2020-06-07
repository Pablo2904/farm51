import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const StyledContainer = styled.div`
  padding: 20px;
  background: ${({theme}) => theme.colors.black};
  text-align: left;
  min-width:300px;
`

const StyledH2 = styled.h2`
  margin-bottom: 15px;
  text-align: center;
`

const StyledUl = styled.ul`
  margin-bottom: 10px;
`

const StyledLi = styled.li`
  list-style-type: none;
  margin-bottom: 5px;
  padding: 0;
  text-transform: capitalize;
`

const Summary = ({selection, parts}) => {
  const elements = {
    name: 0,
    value: 1
  }

  const summaryData =  React.useMemo(() => Object.entries(selection), [selection])

  const dataToRender = React.useMemo(() => summaryData.map(item => {
    return [item[elements.name], parts[item[elements.name]].find(el => el.id === item[elements.value])]
  }), [elements.name, elements.value, parts, summaryData])

  const countSummaryPrice = React.useCallback(() => {
    return dataToRender.map(item => {
      return (item && item[1] && item[1].price) || 0
    }).reduce((prev, curr) => {
      return prev + curr
    }).toFixed(2)
  }, [dataToRender])

  return (
    <StyledContainer>
      <StyledH2>
        Summary
      </StyledH2>
      <StyledUl>
      {
        dataToRender.map((item, index) =>
          <StyledLi key={index}>
            {item[elements.name]}: {(item[elements.value] && item[elements.value].name) || `Choose Your ${item[elements.name]}.`}
          </StyledLi>
        )
      }
      </StyledUl>
      <span>Price: {countSummaryPrice()}</span>
    </StyledContainer>
  )
}

const mapStateToProps = state => ({
  parts: state.parts,
  selection: state.selection
})

export default connect(mapStateToProps, {})(Summary)
