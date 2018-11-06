import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dice from './Dice';

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

export default class Yahtzee extends Component {
  state = {
    dice: createDice()
  };

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
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            this.rollDice();
          }}
        >
          Roll
        </Button>
        <Dice dice={this.state.dice} hold={this.holdDice} />
      </div>
    );
  }
}
