import { HUMAN_HAS_CHOSEN, HUMAN_HAS_WON } from '../actions/human';
import { COMPUTER_HAS_WON } from '../actions/computer';
import { NOBODY_HAS_WON } from '../actions/game';
import initialState from '../store/initial_state';

const human = (state = initialState.human, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case HUMAN_HAS_CHOSEN:
      return { shape: payload, hasWon: '' };
    case HUMAN_HAS_WON:
      return { ...state, hasWon: 'yes' };
    case COMPUTER_HAS_WON:
      return { ...state, hasWon: 'no' };
    case NOBODY_HAS_WON:
      return { ...state, hasWon: 'draw' };
    default:
      return state;
  }
};

export default human;
