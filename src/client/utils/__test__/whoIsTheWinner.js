import chai from 'chai'; // eslint-disable-line
import whoIsTheWinner from '../whoIsTheWinner';

const { describe, it } = global;
const { expect } = chai;

describe('whoIsTheWinner util', () => {
  it('should return \'human\' on human win', () => {
    const combinations = [
      { human: 'rock', computer: 'scissors' },
      { human: 'scissors', computer: 'paper' },
      { human: 'paper', computer: 'rock' },
    ];
    const results = combinations.map(whoIsTheWinner);
    results.forEach(r => expect(r).to.equal('human'));
  });

  it('should return \'computer\' on computer win', () => {
    const combinations = [
      { human: 'scissors', computer: 'rock' },
      { human: 'paper', computer: 'scissors' },
      { human: 'rock', computer: 'paper' },
    ];
    const results = combinations.map(whoIsTheWinner);
    results.forEach(r => expect(r).to.equal('computer'));
  });

  it('should return \'draw\' on draw', () => {
    const combinations = [
      { human: 'scissors', computer: 'scissors' },
      { human: 'paper', computer: 'paper' },
      { human: 'rock', computer: 'rock' },
    ];
    const results = combinations.map(whoIsTheWinner);
    results.forEach(r => expect(r).to.equal('draw'));
  });

  it('should throw an error on unknown shapes', () => {
    const combination = { human: '', computer: 'pappper' };
    expect(() => whoIsTheWinner(combination)).to.throw(Error);
  });
});
