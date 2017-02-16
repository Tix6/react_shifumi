import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const ScoreWrapper = styled.div`
  display; flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ScoreTitle = styled.p`
  padding: 5px;
  background-color: #eee;
  margin-bottom: 10px;
`;

const ScoreValue = styled.p`
  font-size: 1.4em;
`;

export const Score = ({ title, value = 0 }) =>
  <ScoreWrapper>
    <ScoreTitle>{ title }</ScoreTitle>
    <ScoreValue>{ value }</ScoreValue>
  </ScoreWrapper>;

Score.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

const Scores = ({ scores }) =>
  <Wrapper>
    <Score title="Wins" value={scores.human} />
    <Score title="Ties" value={scores.draw} />
    <Score title="Wins" value={scores.computer} />
  </Wrapper>;

Scores.propTypes = {
  scores: PropTypes.object,
};

export default Scores;
