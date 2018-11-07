export const createDice = () => {
  let diceArr = [];
  for (let i = 0; i < 5; i++) {
    diceArr.push({
      id: i + 1,
      value: 1,
      hold: false
    });
  }
  return diceArr;
};
export const createScoreCard = () => {
  return {
    ones: NaN,
    twos: NaN,
    threes: NaN,
    fours: NaN,
    fives: NaN,
    sixes: NaN,
    bonus: NaN,
    fullHouse: NaN,
    threeOfAKind: NaN,
    fourOfAKind: NaN,
    smallStraight: NaN,
    largeStraight: NaN,
    yahtzee: NaN,
    chance: NaN
  };
};
// make a function to make prettier display for the scorecard names
