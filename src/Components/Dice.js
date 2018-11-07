import React, { Component } from 'react';

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
          width: '100vw',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        {this.props.dice.map(die => (
          <button
            key={die.id}
            style={{
              flexBasis: '20%',
              fontSize: '16px',
              height: '40px',
              background: `${this.setBackgroundButton(die.hold)}`
            }}
            onClick={() => {
              this.props.hold(die.id);
            }}
          >
            {die.value}
          </button>
        ))}
      </div>
    );
  }
}
