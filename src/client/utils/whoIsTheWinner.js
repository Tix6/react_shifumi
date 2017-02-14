const whoIsTheWinner = ({ human, computer }) => {
  switch (`${human} vs ${computer}`) {
    case 'rock vs scissors':
      return 'human';
    case 'scissors vs paper':
      return 'human';
    case 'paper vs rock':
      return 'human';
    case 'scissors vs rock':
      return 'computer';
    case 'paper vs scissors':
      return 'computer';
    case 'rock vs paper':
      return 'computer';
    case 'rock vs rock':
      return 'draw';
    case 'scissors vs scissors':
      return 'draw';
    case 'paper vs paper':
      return 'draw';
    default:
      throw new Error('players shapes unknown.');
  }
};

export default whoIsTheWinner;
