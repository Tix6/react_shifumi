import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Shape from '../Shape/';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  flex: 1;
`;

const Title = styled.h2`
  background-color: #cd4436;
  color: white;
  text-align: center;
  border-radius: 2px;
  padding: 5px;
`;

const Row = styled.p`
  text-align: center;
  font-size: 3em;
`;

const Selected = styled.div`
  display: flex;
  justify-content: center;
`;

const result = (hasWon) => {
  switch (hasWon) {
    case 'yes':
      return <span style={{ color: 'green' }}>WIN!</span>;
    case 'no':
      return '';
    case 'draw':
      return <span style={{ color: 'orange' }}>DRAW!</span>;
    default:
      return '';
  }
};

const Board = ({ title, shape, hasWon, children }) =>
  <Wrapper>
    <Title>{ title }</Title>
    { children }
    <Row>{ result(hasWon) }</Row>
    <Selected><Shape type={shape} size={5} /></Selected>
  </Wrapper>
;

Board.propTypes = {
  title: PropTypes.string.isRequired,
  shape: PropTypes.string,
  hasWon: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Board;
