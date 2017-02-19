import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Scores from '../../components/Infos/scores';
import Round from '../../components/Infos/round';
import RoundHistory from '../../components/Infos/history';
import { historySelector } from './selectors';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
`;

export const Infos = ({ roundCount, scores, history }) =>
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

const mapStateToProps = state => ({
  ...state.game,
  history: historySelector(state.game),
});

export default connect(mapStateToProps)(Infos);
