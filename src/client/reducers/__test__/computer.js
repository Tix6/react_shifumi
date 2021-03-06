import chai from 'chai'; // eslint-disable-line
import reducer from '../computer';
import initialState from '../../store/initial_state';
import { computerHasChosen, computerHasWon, computerIsThinking } from '../../actions/computer';
import { humanHasChosen, humanHasWon } from '../../actions/human';
import { nobodyHasWon } from '../../actions/game';

const { describe, it } = global;
const { expect } = chai;

describe('computer reducer', () => {
  const state = Object.freeze(initialState.computer);

  it('should return the initial state', () => {
    expect(reducer()).to.deep.equal(state);
  });

  it('should handle the shape choice', () => {
    const action = computerHasChosen('rock');
    const expected = { shape: 'rock', hasWon: '' };
    expect(reducer(state, action)).to.deep.equal(expected);
  });

  it('should handle thinking', () => {
    const action = computerIsThinking();
    const expected = { shape: '', hasWon: '', isThinking: true };
    expect(reducer(state, action)).to.deep.equal(expected);
  });

  it('should handle the victory', () => {
    const action = computerHasWon();
    const expected = { shape: '', hasWon: 'yes' };
    expect(reducer(state, action)).to.deep.equal(expected);
  });

  it('should handle the defeat', () => {
    const action = humanHasWon();
    const expected = { shape: '', hasWon: 'no' };
    expect(reducer(state, action)).to.deep.equal(expected);
  });

  it('should handle the draw', () => {
    const action = nobodyHasWon();
    const expected = { shape: '', hasWon: 'draw' };
    expect(reducer(state, action)).to.deep.equal(expected);
  });

  it('human choice should reset the state', () => {
    const action = humanHasChosen('rock');
    const expected = { shape: '', hasWon: '' };
    const anotherState = Object.freeze({ shape: 'paper', hasWon: true, isThinking: true });
    expect(reducer(anotherState, action)).to.deep.equal(expected);
  });
});
