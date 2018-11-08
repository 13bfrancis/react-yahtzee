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

// make a function that you assign to state that will add up all of the scores to get a total score
export const prettyName = uglyName => {
  switch (uglyName) {
    case 'ones':
      return 'Ones';
    case 'twos':
      return 'Twos';
    case 'threes':
      return 'Threes';
    case 'fours':
      return 'Fours';
    case 'fives':
      return 'Fives';
    case 'sixes':
      return 'Sixes';
    case 'bonus':
      return 'Bonus';
    case 'fullHouse':
      return 'Full House';
    case 'threeOfAKind':
      return 'Three of a Kind';
    case 'fourOfAKind':
      return 'Four of a Kind';
    case 'smallStraight':
      return 'Small Straight';
    case 'largeStraight':
      return 'Large Straight';
    case 'yahtzee':
      return 'Yahtzee';
    case 'chance':
      return 'Chance';
    default:
      return;
  }
};
