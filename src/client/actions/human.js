import { computerTurn } from './computer';

export const HUMAN_HAS_CHOSEN = 'human/hasChosen';
export const HUMAN_HAS_WON = 'human/hasWon';

export const shapeChosen = shape => ({
  type: HUMAN_HAS_CHOSEN,
  payload: shape,
});

export const humanHasWon = () => ({
  type: HUMAN_HAS_WON,
});

export const humanTurn = shape => (dispatch) => {
  dispatch(shapeChosen(shape));
  computerTurn();
};
