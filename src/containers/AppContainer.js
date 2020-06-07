import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { FeatureGroup } from '../components/FeatureGroup'
import Item from '../components/Item'

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`

const AppContainer = ({ parts, selection}) => {
  const carPartsNames = React.useMemo(() => Object.keys(parts), [parts])
  const isSelected = (carPartName, carPartId = '') => {
    return selection[carPartName.toLowerCase()] === carPartId
  }

  return (
    <OptionsContainer>
      {
        carPartsNames.map(carPartName => {
          return (
            <FeatureGroup header={carPartName} key={carPartName}>
              {
                parts[carPartName].sort((a, b) => a.index - b.index).map(carPart => {
                  return <Item key={carPart.id} item={carPart} carPartName={carPartName} active={isSelected(carPartName, carPart.id)} />
                })
              }
            </FeatureGroup>
          )
        })
      }
    </OptionsContainer>
  )
}

const mapStateToProps = state => ({
  parts: state.parts,
  selection: state.selection
})

export default connect(mapStateToProps, {})(AppContainer)
