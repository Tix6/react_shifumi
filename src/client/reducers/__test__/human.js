import chai from 'chai'; // eslint-disable-line
import reducer from '../human';
import initialState from '../../store/initial_state';
import { humanHasChosen, humanHasWon } from '../../actions/human';
import { computerHasWon } from '../../actions/computer';
import { nobodyHasWon } from '../../actions/game';

const { describe, it } = global;
const { expect } = chai;

describe('human reducer', () => {
  const state = Object.freeze(initialState.human);

  it('should return the initial state', () => {
    expect(reducer()).to.deep.equal(state);
  });

  it('should handle the shape choice', () => {
    const action = humanHasChosen('rock');
    const expected = { shape: 'rock', hasWon: '' };
    expect(reducer(state, action)).to.deep.equal(expected);
  });

  it('should handle the victory', () => {
    const action = humanHasWon();
    const expected = { shape: '', hasWon: 'yes' };
    expect(reducer(state, action)).to.deep.equal(expected);
  });

  it('should handle the defeat', () => {
    const action = computerHasWon();
    const expected = { shape: '', hasWon: 'no' };
    expect(reducer(state, action)).to.deep.equal(expected);
  });

  it('should handle the draw', () => {
    const action = nobodyHasWon();
    const expected = { shape: '', hasWon: 'draw' };
    expect(reducer(state, action)).to.deep.equal(expected);
  });
});
