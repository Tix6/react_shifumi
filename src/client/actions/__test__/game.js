import chai from 'chai'; // eslint-disable-line
import {
  ROUND_IS_ENDED,
  NOBODY_HAS_WON,
  roundIsEnded,
  nobodyHasWon,
} from '../game';

const { describe, it } = global;
const { expect } = chai;

describe('game actions', () => {
  it('round is ended', () => {
    const payload = { human: {}, computer: {} };
    const type = ROUND_IS_ENDED;
    const expected = { type, payload };
    expect(roundIsEnded(payload.human, payload.computer)).to.deep.equal(expected);
  });

  it('nobody has won', () => {
    const type = NOBODY_HAS_WON;
    const expected = { type };
    expect(nobodyHasWon()).to.deep.equal(expected);
  });
});
