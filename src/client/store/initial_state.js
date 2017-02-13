const initialState = {
  human: {
    shape: 'rock',
    hasWon: true,
  },
  computer: {
    shape: 'paper',
    hasWon: false,
  },
  logs: {
    round: 3,
    scores: {
      humanWin: 1,
      ties: 2,
      computerWin: 3,
    },
    history: [
      {
        round: 3,
        human: { shape: 'paper', hasWon: true },
        computer: { shape: 'rock', hasWon: false },
      },
      {
        round: 2,
        human: { shape: 'paper', hasWon: true },
        computer: { shape: 'rock', hasWon: false },
      },
      {
        round: 1,
        human: { shape: 'paper', hasWon: true },
        computer: { shape: 'rock', hasWon: false },
      },
    ],
  },
};

export default initialState;
