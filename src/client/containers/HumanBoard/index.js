import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { humanTurn } from '../../actions/human';
import Board from '../../components/Board/';
import Shape from '../../components/Shape/';

const ShapeSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const shapes = ['rock', 'paper', 'scissors'];

const ShapeSelector = styled.div`
  cursor: pointer;
`;

export const HumanBoard = ({ shape, hasWon, onSelection }) =>
  <Board title="HUMAN" shape={shape} hasWon={hasWon} >
    <ShapeSelect>
      { shapes.map((s, id) =>
        <ShapeSelector onClick={() => onSelection(s)} key={`shape-${id}`}>
          <Shape type={s} size={3} />
        </ShapeSelector>)
      }
    </ShapeSelect>
  </Board>;

HumanBoard.propTypes = {
  shape: PropTypes.string,
  hasWon: PropTypes.string,
  onSelection: PropTypes.func,
};

const mapStateToProps = state => state.human;
const mapDispatchToProps = dispatch => ({ onSelection: bindActionCreators(humanTurn, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(HumanBoard);
