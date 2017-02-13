import React, { PropTypes } from 'react';
import styled from 'styled-components';
import HumanBoard from '../HumanBoard/';
import Infos from '../Infos';
import ComputerBoard from '../ComputerBoard/';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
`;

const App = ({ state }) => (
  <Wrapper>
    <HumanBoard shapeSelected={state.human.shape} hasWon={state.human.hasWon} />
    <Infos round={state.logs.round} scores={state.logs.scores} history={state.logs.history} />
    <ComputerBoard shapeSelected={state.computer.shape} hasWon={state.computer.hasWon} />
  </Wrapper>
);

App.propTypes = {
  state: PropTypes.object.isRequired,
};

export default App;
