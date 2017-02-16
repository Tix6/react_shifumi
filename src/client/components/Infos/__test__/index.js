import React from 'react';
import chai from 'chai'; // eslint-disable-line
import { shallow } from 'enzyme'; // eslint-disable-line
import Infos from '..';
import Scores from '../scores';
import Round from '../round';
import RoundHistory from '../history';

const { describe, it } = global;
const { expect } = chai;
const props = { roundCount: 1, scores: {}, history: [] };

describe('<Infos />', () => {
  it('should render a <Scores />', () => {
    expect(shallow(<Infos {...props} />)
      .find(Scores)).to.have.lengthOf(1);
  });

  it('should render a <Round />', () => {
    expect(shallow(<Infos {...props} />)
      .find(Round)).to.have.lengthOf(1);
  });

  it('should render a <RoundHistory />', () => {
    expect(shallow(<Infos {...props} />)
      .find(RoundHistory)).to.have.lengthOf(1);
  });
});
