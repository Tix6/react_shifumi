import React from 'react';
import chai from 'chai'; // eslint-disable-line
import { shallow } from 'enzyme'; // eslint-disable-line
import Scores, { Score } from '../scores';

const { describe, it } = global;
const { expect } = chai;

const props = { scores: { human: 0, computer: 0, draw: 0 } };

describe('<Scores />', () => {
  it('should three <Score />', () => {
    expect(shallow(<Scores {...props} />)
      .find(Score)).to.have.lengthOf(3);
  });
});
