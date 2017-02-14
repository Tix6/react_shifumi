const initialState = {
  human: {
    shape: '',
    hasWon: '',
  },
  computer: {
    shape: '',
    hasWon: '',
  },
  game: {
    roundCount: 1,
    scores: {
      human: 0,
      computer: 0,
      draw: 0,
    },
    history: [],
  },
};

export default initialState;
