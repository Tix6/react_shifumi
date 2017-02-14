import store from '../store/';
import whoIsTheWinner from '../utils/whoIsTheWinner';
import { humanHasWon } from './human';
import { computerHasWon } from './computer';

export const ROUND_IS_ENDED = 'game/roundIsEnded';
export const NOBODY_HAS_WON = 'game/nobodyHasWon';

export const roundIsEnded = (human, computer) => ({
  type: ROUND_IS_ENDED,
  payload: { human, computer },
});

export const nobodyHasWon = () => ({
  type: NOBODY_HAS_WON,
});

const dispatchWinner = (dispatch, { human, computer }) => {
  const winner = whoIsTheWinner({
    human: human.shape,
    computer: computer.shape,
  });
  switch (winner) {
    case 'human':
      dispatch(humanHasWon());
      break;
    case 'computer':
      dispatch(computerHasWon());
      break;
    case 'draw':
      dispatch(nobodyHasWon());
      break;
    default:
      break;
  }
};

export const gameResults = () => {
  dispatchWinner(store.dispatch, store.getState());
  const { human, computer } = store.getState();
  store.dispatch(roundIsEnded(human, computer));
};
