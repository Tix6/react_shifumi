import { COMPUTER_HAS_CHOSEN, COMPUTER_HAS_WON, COMPUTER_IS_THINKING } from '../actions/computer';
import { HUMAN_HAS_CHOSEN, HUMAN_HAS_WON } from '../actions/human';
import { NOBODY_HAS_WON } from '../actions/game';
import initialState from '../store/initial_state';

const computer = (state = initialState.computer, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case HUMAN_HAS_CHOSEN:
      return { shape: '', hasWon: '' };
    case COMPUTER_HAS_CHOSEN:
      return { shape: payload, hasWon: '' };
    case COMPUTER_IS_THINKING:
      return { ...state, isThinking: true };
    case COMPUTER_HAS_WON:
      return { ...state, hasWon: 'yes' };
    case HUMAN_HAS_WON:
      return { ...state, hasWon: 'no' };
    case NOBODY_HAS_WON:
      return { ...state, hasWon: 'draw' };
    default:
      return state;
  }
};

export default computer;
