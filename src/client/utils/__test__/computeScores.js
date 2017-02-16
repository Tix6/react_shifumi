import chai from 'chai'; // eslint-disable-line
import computeScores from '../computeScores';

const { describe, it } = global;
const { expect } = chai;

const scores = { human: 0, computer: 0, draw: 0 };

describe('computeScores util', () => {
  it('should increment human score on human win', () => {
    const humanWin = { human: 1, computer: 0, draw: 0 };
    const result = computeScores(scores, 'yes', 'no');
    expect(result).to.deep.equal(humanWin);
  });

  it('should increment computer score on computer win', () => {
    const computerWin = { human: 0, computer: 1, draw: 0 };
    const result = computeScores(scores, 'no', 'yes');
    expect(result).to.deep.equal(computerWin);
  });

  it('should increment human score on human win', () => {
    const draw = { human: 0, computer: 0, draw: 1 };
    const result = computeScores(scores, 'draw', 'draw');
    expect(result).to.deep.equal(draw);
  });

  it('should throw an error on unexpected inputs', () => {
    const unexpecteds = [
      () => computeScores(scores, 'yes', 'yes'),
      () => computeScores(scores, 'no', 'no'),
      () => computeScores(scores, 'foo', 'bar'),
    ];
    unexpecteds.forEach(u => expect(u).to.throw(Error));
  });
});
