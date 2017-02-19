import React from 'react';
import chai from 'chai'; // eslint-disable-line
import { shallow } from 'enzyme'; // eslint-disable-line
import { ComputerBoard, Spinner } from '..';
import Board from '../../../components/Board';

const { describe, it } = global;
const { expect } = chai;

const props = { shape: 'rock', hasWon: 'no' };

describe('<ComputerBoard />', () => {
  it('should render a <Board />', () => {
    expect(shallow(<ComputerBoard {...props} />)
      .find(Board)).to.have.lengthOf(1);
  });

  it('should render a <Spinner /> when isThinking props is defined', () => {
    expect(shallow(<ComputerBoard {...props} isThinking />)
      .find(Spinner)).to.have.lengthOf(1);
  });

  it('should not render a <Spinner /> when isThinking props is undefined', () => {
    expect(shallow(<ComputerBoard {...props} />)
      .find(Spinner)).to.not.have.lengthOf(1);
  });
});
