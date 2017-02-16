import R from 'ramda';
import { ROUND_IS_ENDED } from '../actions/game';
import initialState from '../store/initial_state';
import computeScores from '../utils/computeScores';

const game = (state = initialState.game, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ROUND_IS_ENDED: {
      const { human, computer } = payload;
      const newRound = { round: state.roundCount, human, computer };
      return {
        roundCount: state.roundCount + 1,
        scores: computeScores(state.scores, human.hasWon, computer.hasWon),
        history: R.concat([newRound], state.history),
      };
    }
    default:
      return state;
  }
};

export default game;
