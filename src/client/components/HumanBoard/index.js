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

const ShapeSelector = styled.div`
  cursor: pointer;
`;

const HumanBoard = ({ shape, hasWon, onSelection }) =>
  <Board title="HUMAN" shape={shape} hasWon={hasWon} >
    <ShapeSelect>
      { shapes.map((s, id) =>
        <ShapeSelector onClick={() => onSelection(s)} key={id}>
          <Shape type={s} />
        </ShapeSelector>
      ) }
    </ShapeSelect>
  </Board>;

HumanBoard.propTypes = {
  shape: PropTypes.string.isRequired,
  hasWon: PropTypes.string.isRequired,
  onSelection: PropTypes.func.isRequired,
};

export default HumanBoard;
