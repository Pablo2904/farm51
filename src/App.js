import React from 'react';
import styled from 'styled-components'

import Options from './components/Options'
import Summary from './components/Summary'

import { Layout } from './layout/layout'

const StyledAppContainer = styled.div`
  display: flex;
  border: 3px solid ${({theme}) => theme.colors.black};
  background: ${({theme}) => theme.colors.darkGrey};
  border-radius: 10px;
`

const App = () => {
  return (
    <Layout>
      <StyledAppContainer>
        <Options/>
        <Summary/>
      </StyledAppContainer>
    </Layout>
  );
}

export default App
