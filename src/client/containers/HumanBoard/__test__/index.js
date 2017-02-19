import React from 'react';
import chai from 'chai'; // eslint-disable-line
import { shallow } from 'enzyme'; // eslint-disable-line
import { HumanBoard } from '..';
import Board from '../../../components/Board/';
import Shape from '../../../components/Shape/';

const { describe, it } = global;
const { expect } = chai;

const props = { shape: 'rock', hasWon: 'no', onSelection: () => 1 };

describe('<HumanBoard />', () => {
  it('should render a <Board />', () => {
    expect(shallow(<HumanBoard {...props} />)
      .find(Board)).to.have.lengthOf(1);
  });

  it('should render three <Shape />', () => {
    expect(shallow(<HumanBoard {...props} />)
      .find(Shape)).to.have.lengthOf(3);
  });
});
