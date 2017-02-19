import React, { PropTypes } from 'react';
import styled from 'styled-components';
import R from 'ramda';
import uniqid from 'uniqid';
import Shape from '../Shape/';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const shapeColor = ({ hasWon }) => {
  switch (hasWon) {
    case 'yes':
      return 'green';
    case 'no':
      return 'red';
    case 'draw':
      return 'orange';
    default:
      return '';
  }
};

const RoundRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #aaa;
  font-size: 0.9em;
  margin-bottom: 2px;
`;

export const Round = ({ human, round, computer }) =>
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
    { R.map(round => <Round {...round} key={uniqid('round-')} />)(history) }
  </Wrapper>;

RoundHistory.propTypes = {
  history: PropTypes.array.isRequired,
};

export default RoundHistory;
