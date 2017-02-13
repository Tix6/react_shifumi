import React, { PropTypes } from 'react';

const shapes = {
  paper: 'hand-paper-o',
  rock: 'hand-rock-o',
  scissors: 'hand-scissors-o',
};

const colors = ['#F34235', '#E81D62', '#9B26AF', '#6639B6', '#3E50B4',
  '#2095F2', '#02A8F3', '#00BBD3', '#009587', '#4BAE4F', '#FE5621', '#785447',
  '#9D9D9D', '#5F7C8A'];

const randomColor = () => colors[Math.round(Math.random() * colors.length)];

const Shape = ({ type, color = randomColor(), size = 2 }) =>
  <i className={`fa fa-${shapes[type]} fa-${size}x`} style={{ color }} />;

Shape.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Shape;
