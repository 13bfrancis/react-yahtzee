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

export const checkScore = ({ id, dice }) => {
  let sum = 0;

  switch (id) {
    case 'ones':
      return (dice.match(/1/g) || []).length * 1;
    case 'twos':
      return (dice.match(/2/g) || []).length * 2;
    case 'threes':
      return (dice.match(/3/g) || []).length * 3;
    case 'fours':
      return (dice.match(/4/g) || []).length * 4;
    case 'fives':
      return (dice.match(/5/g) || []).length * 5;
    case 'sixes':
      return (dice.match(/6/g) || []).length * 6;
    case 'fullHouse':
      if (
        !!dice.match(
          /([1-6])\1{1}(?!\1)([1-6])\2{2}|([1-6])\3{2}(?!\3)([1-6])\4{1}/g
        ) === true
      ) {
        return 25;
      }
      return 0;
    case 'threeOfAKind':
      sum = 0;
      if (!!dice.match(/([1-6])\1{2,}/g) === true) {
        for (let i = 0; i < dice.length; i++) {
          sum += parseInt(dice[i]);
        }
        return sum;
      }
      return sum;
    case 'fourOfAKind':
      sum = 0;
      if (!!dice.match(/([1-6])\1{3,}/g) === true) {
        for (let i = 0; i < dice.length; i++) {
          sum += parseInt(dice[i]);
        }
        return sum;
      }
      return sum;
    case 'smallStraight':
      if (
        !!dice.match(
          /(.?(1).?(2).?(3).?(4).?)|(.?(2).?(3).?(4).?(5).?)|(.?(3).?(4).?(5).?(6).?)/g
        )
      ) {
        return 30;
      }
      return 0;
    case 'largeStraight':
      if (!!dice.match(/(12345|23456)/g)) {
        return 40;
      }
      return 0;
    case 'yahtzee':
      if (!!dice.match(/([1-6])\1{4}/g)) {
        return 50;
      }
      return 0;
    case 'chance':
      sum = 0;
      for (let i = 0; i < dice.length; i++) {
        sum += parseInt(dice[i]);
      }
      return sum;
    default:
      return '-';
  }
};
