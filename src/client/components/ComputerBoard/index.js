import React, { PropTypes } from 'react';
import Board from '../Board/';

const ComputerBoard = ({ shapeSelected, hasWon }) =>
  <Board title="computer" shapeSelected={shapeSelected} hasWon={hasWon} />;

ComputerBoard.propTypes = {
  shapeSelected: PropTypes.string,
  hasWon: PropTypes.bool,
};

export default ComputerBoard;
