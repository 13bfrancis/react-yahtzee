import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Refresh from '@material-ui/icons/Refresh';
import Dice from './Dice';
import Scorecard from './Scorecard';

// This is a function that is used to create the starting die for when the initial state is set.
const createDice = () => {
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

const createScoreCard = () => {
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

export default class Yahtzee extends Component {
  state = {
    scorecard: createScoreCard(),
    dice: createDice(),
    turn: 0,
    turnOver: false
  };
  //function to reset state values for the beginning of a game
  resetTurn = () => {
    let newDice = [];
    this.state.dice.forEach(die => {
      newDice.push({ ...die, hold: false });
    });
    this.setState({
      turn: 0,
      turnOver: false,
      dice: newDice
    });
  };
  //function to increment turn as well as disable roll button
  incrementTurn = () => {
    if (this.state.turn < 2) {
      this.setState({
        turn: this.state.turn + 1
      });
    } else {
      this.setState({ turn: this.state.turn + 1, turnOver: true });
    }
  };
  //function to roll the dice
  rollDice = () => {
    let newRoll = [];
    this.state.dice.forEach(die => {
      if (die.hold) newRoll.push({ ...die });
      else
        newRoll.push({
          ...die,
          value: Math.floor(Math.random() * 6 + 1)
        });
    });
    this.setState({
      dice: newRoll
    });
  };
  //function used  to hold dice
  holdDice = id => {
    let updatedDice = [];
    this.state.dice.forEach(die => {
      if (die.id === id) updatedDice.push({ ...die, hold: !die.hold });
      else updatedDice.push({ ...die });
    });
    this.setState({
      dice: updatedDice
    });
  };
  render() {
    return (
      <>
        <Button onClick={this.resetTurn}>
          <Refresh />
        </Button>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '75vw',
            justifyContent: 'center',
            margin: '0 auto'
          }}
        >
          {this.state.turn === 0 ? (
            <h1 style={{ flexBasis: '100%', textAlign: 'center' }}>
              Roll to Start
            </h1>
          ) : (
            <h1 style={{ flexBasis: '100%', textAlign: 'center' }}>
              Turn {this.state.turn}
            </h1>
          )}
          <Button
            disabled={this.state.turnOver}
            variant="contained"
            color="primary"
            style={{ flexBasis: '100%', margin: '5px' }}
            onClick={() => {
              this.incrementTurn();
              this.rollDice();
            }}
          >
            Roll
          </Button>
          <Dice dice={this.state.dice} hold={this.holdDice} />
          <Scorecard scorecard={this.state.scorecard} />
        </div>
      </>
    );
  }
}
