import chai from 'chai'; // eslint-disable-line
import {
  HUMAN_HAS_CHOSEN,
  HUMAN_HAS_WON,
  humanHasChosen,
  humanHasWon,
} from '../human';

const { describe, it } = global;
const { expect } = chai;

describe('computer actions', () => {
  it('shape chosen', () => {
    const payload = 'paper';
    const type = HUMAN_HAS_CHOSEN;
    const expected = { type, payload };
    expect(humanHasChosen(payload)).to.deep.equal(expected);
  });

  it('has won', () => {
    const type = HUMAN_HAS_WON;
    const expected = { type };
    expect(humanHasWon()).to.deep.equal(expected);
  });
});
