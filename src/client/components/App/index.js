import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import HumanBoard from '../HumanBoard/';
import Infos from '../Infos';
import ComputerBoard from '../ComputerBoard/';
import { humanTurn } from '../../actions/human';

const Wrapper = styled.div`
  font-family: 'Lato', sans-serif;
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  min-height: 400px;
`;

export const App = ({ human, computer, game, actions }) =>
  <Wrapper>
    <HumanBoard {...human} onSelection={actions.humanTurn} />
    <Infos {...game} />
    <ComputerBoard {...computer} />
  </Wrapper>;

App.propTypes = {
  human: PropTypes.object,
  computer: PropTypes.object,
  game: PropTypes.object,
  actions: PropTypes.object,
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ humanTurn }, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(App);
