import React from 'react';
import styled from 'styled-components';
import HumanBoard from '../../containers/HumanBoard/'; // eslint-disable-line
import Infos from '../../containers/Infos'; // eslint-disable-line
import ComputerBoard from '../../containers/ComputerBoard/'; // eslint-disable-line

const Wrapper = styled.div`
  font-family: 'Lato', sans-serif;
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  min-height: 400px;
`;

export const App = () =>
  <Wrapper>
    <HumanBoard />
    <Infos />
    <ComputerBoard />
  </Wrapper>;

export default App;
