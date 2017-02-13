import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  text-align: center;
  font-size: 2em;
`;

const Round = ({ number = 0 }) =>
  <Wrapper>
    Round {number}
  </Wrapper>;

Round.propTypes = {
  number: PropTypes.number,
};

export default Round;
