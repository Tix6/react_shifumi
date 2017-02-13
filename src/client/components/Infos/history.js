import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Shape from '../Shape/';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const shapeColor = ({ hasWon }) => (hasWon ? 'green' : 'red');

const RoundRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Round = ({ human, round, computer }) =>
  <RoundRow>
    <Shape type={human.shape} color={shapeColor(human)} size={1} />
    <span>Round { round }</span>
    <Shape type={computer.shape} color={shapeColor(computer)} size={1} />
  </RoundRow>;

Round.propTypes = {
  human: PropTypes.object.isRequired,
  round: PropTypes.number.isRequired,
  computer: PropTypes.object.isRequired,
};

const RoundHistory = ({ history }) =>
  <Wrapper>
    { history.map((round, id) => <Round {...round} key={id} />) }
  </Wrapper>;

RoundHistory.propTypes = {
  history: PropTypes.array.isRequired,
};

export default RoundHistory;
