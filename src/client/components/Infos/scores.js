import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ScoreWrapper = styled.div`
  display; flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Score = ({ title, value = 0 }) =>
  <ScoreWrapper>
    <p>{ title }</p>
    <span>{ value }</span>
  </ScoreWrapper>;

Score.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

const Scores = ({ scores }) =>
  <Wrapper>
    <Score title="Win" value={scores.humanWin} />
    <Score title="Tie" value={scores.ties} />
    <Score title="Win" value={scores.computerWin} />
  </Wrapper>;

Scores.propTypes = {
  scores: PropTypes.object,
};

export default Scores;
