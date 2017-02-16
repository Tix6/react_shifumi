import React from 'react';
import chai from 'chai'; // eslint-disable-line
import { shallow } from 'enzyme'; // eslint-disable-line
import { App } from '..';
import ComputerBoard from '../../ComputerBoard/';
import HumanBoard from '../../HumanBoard/';
import Infos from '../../Infos/';
import initialState from '../../../store/initial_state';

const { describe, it } = global;
const { expect } = chai;
const props = { ...initialState, actions: { humanTurn: () => (1) } };

describe('<App />', () => {
  it('should render a <HumanBoard />', () => {
    expect(shallow(<App {...props} />)
      .find(HumanBoard)).to.have.lengthOf(1);
  });

  it('should render a <Infos />', () => {
    expect(shallow(<App {...props} />)
      .find(Infos)).to.have.lengthOf(1);
  });

  it('should render a <ComputerBoard />', () => {
    expect(shallow(<App {...props} />)
      .find(ComputerBoard)).to.have.lengthOf(1);
  });
});
