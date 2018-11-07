import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Refresh from '@material-ui/icons/Refresh';
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
    dice: createDice(),
    turn: 0,
    turnOver: false
  };
  resetTurn = () => {
    this.setState({
      turn: 0,
      turnOver: false
    });
  };
  incrementTurn = () => {
    if (this.state.turn < 2) {
      this.setState({
        turn: this.state.turn + 1
      });
    } else {
      this.setState({ turn: this.state.turn + 1, turnOver: true });
    }
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
      <>
        <Button onClick={this.resetTurn}>
          <Refresh />
        </Button>
        <div style={{ textAlign: 'center' }}>
          {this.state.turn === 0 ? (
            <h1>Roll to Start</h1>
          ) : (
            <h1>Turn {this.state.turn}</h1>
          )}
          <Button
            disabled={this.state.turnOver}
            variant="contained"
            color="primary"
            style={{ width: '50%', margin: '5px' }}
            onClick={() => {
              this.incrementTurn();
              this.rollDice();
            }}
          >
            Roll
          </Button>
          <Dice dice={this.state.dice} hold={this.holdDice} />
        </div>
      </>
    );
  }
}
