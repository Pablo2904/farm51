import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import PartsGroup from '../components/PartsGroup'
import Item from '../components/Item'

import Schema from '../mock/modelSchema.json'

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  padding: 20px 0 10px 20px;
`

const AppContainer = ({ parts, selection }) => {
  const [data, setData] = React.useState(parts)
  const carPartsNames = React.useMemo(() => 
    Object.keys(parts)
      .slice(0, Object.values(selection).filter(i => i).length + 1)
  , [parts, selection])

  const isSelected = React.useCallback((carPartName, carPartId = '') => {
    return selection[carPartName.toLowerCase()] === carPartId
  },[selection])

  React.useEffect(() => {
    const validParts = Object.entries(selection).map(item => {
      if (item[0] && item[1]) {
        return Schema[item[0]] && Schema[item[0]][item[1]]
      } else {
        return undefined
      }
    }).filter(i => i)
    const filteredPartsIds = Object.assign(...validParts, {})

    const entries = Object.assign(...Object.entries(filteredPartsIds)
      .map(part => {
        return { [part[0]]: parts[part[0]].filter(item => part[1].includes(item.id))}
      }
    ), {})

    setData({ ...parts, ...entries })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selection])

  return (
    <OptionsContainer>
      {
        carPartsNames.map(carPartName => {
          return (
            <PartsGroup header={carPartName} key={carPartName}>
              {
                data[carPartName]
                .sort((a, b) => a.index - b.index)
                .map(carPart => {
                  return  <Item
                            key={carPart.id}
                            item={carPart}
                            carPartName={carPartName}
                            active={isSelected(carPartName, carPart.id)}
                          /> 
                })
              }
            </PartsGroup>
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
