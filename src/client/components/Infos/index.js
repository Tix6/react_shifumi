import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Scores from './scores';
import Round from './round';
import RoundHistory from './history';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Infos = ({ roundCount, scores, history }) =>
  <Wrapper>
    <Scores scores={scores} />
    <Round number={roundCount} />
    <RoundHistory history={history} />
  </Wrapper>
;

Infos.propTypes = {
  roundCount: PropTypes.number,
  scores: PropTypes.object,
  history: PropTypes.array,
};

export default Infos;
