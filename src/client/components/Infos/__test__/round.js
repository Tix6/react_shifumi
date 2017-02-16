import React from 'react';
import chai from 'chai'; // eslint-disable-line
import { shallow } from 'enzyme'; // eslint-disable-line
import Round from '../round';

const { describe, it } = global;
const { expect } = chai;

describe('<Round />', () => {
  it('should render a round number', () => {
    expect(shallow(<Round />)
      .find('#roundNumber')).to.have.lengthOf(1);
  });
});
