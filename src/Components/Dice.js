import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

export default class Dice extends Component {
  //based on if the die is held or not it changes background color to reflect this
  setBackgroundButton = holdVal => {
    if (holdVal) return 'grey';
    return 'darkgrey';
  };
  render() {
    return (
      <div
        style={{
          flexBasis: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        {this.props.dice.map(die => (
          <Button
            key={die.id}
            style={{
              flexBasis: '20%',
              fontSize: '16px',
              height: '40px',
              background: `${this.setBackgroundButton(die.hold)}`,
              margin: '1%'
            }}
            onClick={() => {
              this.props.hold(die.id);
            }}
          >
            {die.value}
          </Button>
        ))}
      </div>
    );
  }
}
