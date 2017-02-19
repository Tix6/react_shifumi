import { createSelector } from 'reselect';
import R from 'ramda';

export const HISTORY_LIMIT = 10;

const getHistory = state => state.history;
const filterHistory = R.take(HISTORY_LIMIT);

export const historySelector = createSelector(
  [getHistory],
  filterHistory
);
