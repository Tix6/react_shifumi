import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Shape from '../Shape/';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  flex: 1;
`;

const Title = styled.h2`
  background-color: red;
  color: white;
  text-align: center;
  border-radius: 2px;
  padding: 5px;
`;

const WinAlert = styled.p`
  color: green;
  text-align: center;
  font-size: 3em;
`;

const Selected = styled.div`
  display: flex;
  justify-content: center;
`;

const Board = ({ title, shapeSelected, hasWon, children }) =>
  <Wrapper>
    <Title>{ title }</Title>
    { children }
    <WinAlert>{ hasWon ? 'WIN!' : '' }</WinAlert>
    <Selected>
      <Shape type={shapeSelected} size={5} />
    </Selected>
  </Wrapper>
;

Board.propTypes = {
  title: PropTypes.string.isRequired,
  shapeSelected: PropTypes.string,
  hasWon: PropTypes.bool,
  children: PropTypes.element,
};

export default Board;
