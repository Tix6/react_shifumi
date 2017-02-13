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

const Infos = ({ round, scores, history }) =>
  <Wrapper>
    <Scores scores={scores} />
    <Round number={round} />
    <RoundHistory history={history} />
  </Wrapper>
;

Infos.propTypes = {
  round: PropTypes.number,
  scores: PropTypes.object,
  history: PropTypes.array,
};

export default Infos;
