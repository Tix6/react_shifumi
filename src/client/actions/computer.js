import store from '../store/';
import fetchComputerShape from '../utils/fetchComputerShape';
import { gameResults } from './game';

export const COMPUTER_HAS_CHOSEN = 'computer/hasChosen';
export const COMPUTER_HAS_WON = 'computer/hasWon';
export const COMPUTER_IS_THINKING = 'computer/isThinking';

export const shapeChosen = shape => ({
  type: COMPUTER_HAS_CHOSEN,
  payload: shape,
});

export const computerHasWon = () => ({
  type: COMPUTER_HAS_WON,
});

export const isThinking = () => ({
  type: COMPUTER_IS_THINKING,
});

export const computerTurn = () => {
  store.dispatch(isThinking());
  const thinkingTime = () => Math.round(Math.random() * 2) + 1;
  const afterThinking = (shape) => {
    store.dispatch(shapeChosen(shape));
    gameResults();
  };
  fetchComputerShape()
    .then(shape => setTimeout(() => afterThinking(shape), thinkingTime()))
    .catch(console.error); // eslint-disable-line no-console
};
