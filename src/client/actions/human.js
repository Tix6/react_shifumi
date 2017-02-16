import { computerTurn } from './computer';

export const HUMAN_HAS_CHOSEN = 'human/hasChosen';
export const HUMAN_HAS_WON = 'human/hasWon';

export const humanHasChosen = shape => ({
  type: HUMAN_HAS_CHOSEN,
  payload: shape,
});

export const humanHasWon = () => ({
  type: HUMAN_HAS_WON,
});

export const humanTurn = shape => (dispatch) => {
  dispatch(humanHasChosen(shape));
  computerTurn();
};
