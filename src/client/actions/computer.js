import fetchComputerShape from '../utils/fetchComputerShape';
import { gameResults } from './game';

export const COMPUTER_HAS_CHOSEN = 'computer/hasChosen';
export const COMPUTER_HAS_WON = 'computer/hasWon';
export const COMPUTER_IS_THINKING = 'computer/computerIsThinking';

export const computerHasChosen = shape => ({
  type: COMPUTER_HAS_CHOSEN,
  payload: shape,
});

export const computerHasWon = () => ({
  type: COMPUTER_HAS_WON,
});

export const computerIsThinking = () => ({
  type: COMPUTER_IS_THINKING,
});

export const computerTurn = () => (dispatch) => {
  dispatch(computerIsThinking());
  const thinkingTime = () => Math.round(Math.random() * 2) + 1;
  const afterThinking = (shape) => {
    dispatch(computerHasChosen(shape));
    dispatch(gameResults());
  };
  fetchComputerShape()
    .then(shape => setTimeout(() => afterThinking(shape), thinkingTime()))
    .catch(console.error); // eslint-disable-line no-console
};
