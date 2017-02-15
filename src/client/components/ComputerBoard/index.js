import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Board from '../Board/';

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const Spinner = () =>
  <Row>
    <i className="fa fa-spinner fa-spin fa-5x fa-fw" />
  </Row>;

const ComputerBoard = ({ shape, hasWon, isThinking }) =>
  <Board title="COMPUTER" shape={shape} hasWon={hasWon}>
    { isThinking && <Spinner /> }
  </Board>;

ComputerBoard.propTypes = {
  shape: PropTypes.string.isRequired,
  hasWon: PropTypes.string.isRequired,
  isThinking: PropTypes.bool,
};

export default ComputerBoard;
