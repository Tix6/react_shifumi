import chai from 'chai'; // eslint-disable-line
import { historySelector, HISTORY_LIMIT } from '../selectors';

const { describe, it } = global;
const { expect } = chai;

describe('history selector', () => {
  it('should return at most as much items as HISTORY_LIMIT', () => {
    const history = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    expect(historySelector({ history }))
      .to.have.length.below(HISTORY_LIMIT + 1);
  });
});
