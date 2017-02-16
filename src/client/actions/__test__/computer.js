import chai from 'chai'; // eslint-disable-line
import {
  COMPUTER_HAS_CHOSEN,
  COMPUTER_HAS_WON,
  COMPUTER_IS_THINKING,
  computerHasChosen,
  computerHasWon,
  computerIsThinking,
} from '../computer';

const { describe, it } = global;
const { expect } = chai;

describe('computer actions', () => {
  it('shape chosen', () => {
    const payload = 'paper';
    const type = COMPUTER_HAS_CHOSEN;
    const expected = { type, payload };
    expect(computerHasChosen(payload)).to.deep.equal(expected);
  });

  it('has won', () => {
    const type = COMPUTER_HAS_WON;
    const expected = { type };
    expect(computerHasWon()).to.deep.equal(expected);
  });

  it('is thinking', () => {
    const type = COMPUTER_IS_THINKING;
    const expected = { type };
    expect(computerIsThinking()).to.deep.equal(expected);
  });
});
