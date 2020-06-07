import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import PartsGroup from '../PartsGroup'
import Part from '../Part'

import Schema from '../../mock/modelSchema.json'

const OptionsContainer = styled.div`
  ${({theme}) => theme.flexColumn};
  margin-right: 20px;
  padding: 20px 0 10px 20px;
`

const Options = ({ parts, selection }) => {
  const element = {
    name: 0,
    value: 1
  }
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
      if (item[element.name] && item[element.value]) {
        return Schema[item[element.name]] && Schema[item[element.name]][item[element.value]]
      } else {
        return undefined
      }
    }).filter(i => i)
    
    const filteredPartsIds = Object.assign(...validParts, {})

    const filteredParts = Object.assign(...Object.entries(filteredPartsIds)
      .map(part => {
        return { [part[element.name]]: parts[part[element.name]].filter(item => part[element.value].includes(item.id))}
      }
    ), {})

    setData({ ...parts, ...filteredParts })
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
                  return  (
                    <Part
                      key={carPart.id}
                      item={carPart}
                      carPartName={carPartName}
                      active={isSelected(carPartName, carPart.id)}
                    /> 
                  )
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

export default connect(mapStateToProps, {})(Options)
