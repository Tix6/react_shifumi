import chai from 'chai'; // eslint-disable-line
import reducer from '../game';
import initialState from '../../store/initial_state';
import { roundIsEnded } from '../../actions/game';

const { describe, it } = global;
const { expect } = chai;

describe('game reducer', () => {
  it('should return the initial state', () => {
    expect(reducer()).to.deep.equal(initialState.game);
  });

  it('should update round, scores and history', () => {
    const human = { shape: 'rock', hasWon: 'yes' };
    const computer = { shape: 'scissors', hasWon: 'no' };
    const action = roundIsEnded(human, computer);
    const expected = { roundCount: 2,
      scores: { human: 1, computer: 0, draw: 0 },
      history: [{ round: 1, computer, human }] };
    expect(reducer(undefined, action)).to.deep.equal(expected);
  });
});
