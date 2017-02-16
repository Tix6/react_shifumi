const computeScores = (prevScores, humanHasWon, computerHasWon) => {
  if (humanHasWon === 'yes' && computerHasWon === 'no') {
    return { ...prevScores, human: prevScores.human + 1 };
  } else if (computerHasWon === 'yes' && humanHasWon === 'no') {
    return { ...prevScores, computer: prevScores.computer + 1 };
  } else if (humanHasWon === 'draw' && computerHasWon === 'draw') {
    return { ...prevScores, draw: prevScores.draw + 1 };
  }
  throw new Error('scores computation failed');
};

export default computeScores;
