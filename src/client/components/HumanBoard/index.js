import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Board from '../Board/';
import Shape from '../Shape/';

const ShapeSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const shapes = ['rock', 'paper', 'scissors'];

const HumanBoard = ({ shapeSelected, hasWon }) =>
  <Board title="human" shapeSelected={shapeSelected} hasWon={hasWon} >
    <ShapeSelect>
      { shapes.map((s, id) => <Shape type={s} key={id} />) }
    </ShapeSelect>
  </Board>;

HumanBoard.propTypes = {
  shapeSelected: PropTypes.string,
  hasWon: PropTypes.bool,
};

export default HumanBoard;
