import React from 'react';
import styled from 'styled-components'

import { Counter } from './features/counter/Counter';
import {FeatureGroup} from './components/FeatureGroup'
import { Item } from './components/Item'
import { Summary } from './components/Summary'

import { Layout } from './layout/layout'

import parts from './mock/parts.json'

const StyledAppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: auto;
`

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`

const App = () => {
  const carPartsNames = React.useMemo(() => Object.keys(parts), [])

  return (
    <Layout>
      <StyledAppContainer>
        <OptionsContainer>
        {
          carPartsNames.map(carPartName => {
            return (
              <FeatureGroup header={carPartName} key={carPartName}>
                {
                  parts[carPartName].sort((a, b) => a.index - b.index).map(carPart => {
                    return <Item key={carPart.id} name={carPart.name} />
                  })
                }
              </FeatureGroup>
            )
          })
        }
        </OptionsContainer>
        <Summary/>
      </StyledAppContainer>
    </Layout>
  );
}

App.displayName = 'App'

export default App;
