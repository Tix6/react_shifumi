import React from 'react';
import chai from 'chai'; // eslint-disable-line
import { shallow } from 'enzyme'; // eslint-disable-line
import Board, { Title } from '..';
import Shape from '../../Shape/';

const { describe, it } = global;
const { expect } = chai;

const props = { title: 'BOARD', shape: 'rock', hasWon: 'no' };

describe('<Board />', () => {
  it('should render a <Title />', () => {
    expect(shallow(<Board {...props} />)
      .find(Title)).to.have.lengthOf(1);
  });

  it('should render a <Shape />', () => {
    expect(shallow(<Board {...props} />)
      .find(Shape)).to.have.lengthOf(1);
  });

  it('should display a WIN! message on win', () => {
    expect(shallow(<Board {...props} hasWon="yes" />)
      .find('#win')).to.have.lengthOf(1);
  });

  it('should display a DRAW! message on draw', () => {
    expect(shallow(<Board {...props} hasWon="draw" />)
      .find('#draw')).to.have.lengthOf(1);
  });

  it('should not display message on loose', () => {
    expect(shallow(<Board {...props} hasWon="no" />)
      .find('span')).to.not.have.lengthOf(1);
  });
});
