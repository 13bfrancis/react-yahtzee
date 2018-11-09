import React, { Component } from 'react';

import List from '@material-ui/core/List';

export default class Scorecard extends Component {
  render() {
    const { renderScoreline } = this.props;
    return (
      <List style={{ flexBasis: '100%' }}>
        {/* <ListItem>
          <ListItemText>Ones</ListItemText>
          <ListItemIcon>
            {isNaN(this.props.scorecard.ones) ? (
              <Button style={{ color: 'lightgrey' }}>
                {this.props.turn === 0 ? (
                  <>-</>
                ) : (
                  <>{checkScore({ id: 'ones', dice: this.props.dice })}</>
                )}
              </Button>
            ) : (
              <Button>{this.props.scorecard.ones}</Button>
            )}
          </ListItemIcon>
        </ListItem> */}
        {renderScoreline('ones')}
        {renderScoreline('twos')}
        {renderScoreline('threes')}
        {renderScoreline('fours')}
        {renderScoreline('fives')}
        {renderScoreline('sixes')}
        {renderScoreline('fullHouse')}
        {renderScoreline('threeOfAKind')}
        {renderScoreline('fourOfAKind')}
        {renderScoreline('smallStraight')}
        {renderScoreline('largeStraight')}
        {renderScoreline('yahtzee')}
        {renderScoreline('chance')}
      </List>
    );
  }
}
