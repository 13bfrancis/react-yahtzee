import React, { Component } from 'react';

import List from '@material-ui/core/List';

export default class Scorecard extends Component {
  render() {
    const { renderScoreline } = this.props;
    return (
      <List style={{ flexBasis: '100%' }}>
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
