import React from 'react';
import styled from 'styled-components'

import AppContainer from './containers/AppContainer'
import { Summary } from './components/Summary'

import { Layout } from './layout/layout'


const StyledAppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: auto;
`

const App = () => {
  return (
    <Layout>
      <StyledAppContainer>
        <AppContainer/>
        <Summary/>
      </StyledAppContainer>
    </Layout>
  );
}

App.displayName = 'App'

export default App
