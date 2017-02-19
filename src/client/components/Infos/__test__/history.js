import React from 'react';
import chai from 'chai'; // eslint-disable-line
import { shallow } from 'enzyme'; // eslint-disable-line
import RoundHistory, { Round } from '../history';
import Shape from '../../Shape';

const { describe, it } = global;
const { expect } = chai;
const history = [
  { round: 3, human: { shape: 'paper' }, computer: { shape: 'rock' } },
  { round: 2, human: { shape: 'paper' }, computer: { shape: 'rock' } },
  { round: 1, human: { shape: 'paper' }, computer: { shape: 'rock' } },
];

describe('<RoundHistory />', () => {
  it('should not render <Round /> when [history] is empty', () => {
    expect(shallow(<RoundHistory history={[]} />)
      .find(Round)).to.have.lengthOf(0);
  });

  it('should render N <Round /> equals to [history] length', () => {
    expect(shallow(<RoundHistory history={history} />)
      .find(Round)).to.have.lengthOf(history.length);
  });

  it('should render two <Shape /> per <Round />', () => {
    const roundProps = history[0];
    expect(shallow(<Round {...roundProps} />)
      .find(Shape)).to.have.lengthOf(2);
  });
});
