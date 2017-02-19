import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Board from '../../components/Board/';

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export const Spinner = () =>
  <Row>
    <i className="fa fa-spinner fa-spin fa-5x fa-fw" />
  </Row>;

export const ComputerBoard = ({ shape, hasWon, isThinking }) =>
  <Board title="COMPUTER" shape={shape} hasWon={hasWon}>
    { isThinking && <Spinner /> }
  </Board>;

ComputerBoard.propTypes = {
  shape: PropTypes.string,
  hasWon: PropTypes.string,
  isThinking: PropTypes.bool,
};

const mapStateToProps = state => state.computer;

export default connect(mapStateToProps)(ComputerBoard);
