import React from 'react';
import styled from 'styled-components'

import AppContainer from './containers/AppContainer'
import Summary from './components/Summary'

import { Layout } from './layout/layout'


const StyledAppContainer = styled.div`
  display: flex;
  border: 3px solid ${({theme}) => theme.colors.black};
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
