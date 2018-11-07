import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default class Scorecard extends Component {
  render() {
    return (
      <List style={{ flexBasis: '100%' }}>
        {Object.entries(this.props.scorecard).map(item => (
          <ListItem key={item[0]}>
            <ListItemText>{item[0]}</ListItemText>
            <ListItemIcon>
              {isNaN(item[1]) ? (
                <Button style={{ fontSize: '16px' }}>-</Button>
              ) : (
                <Button style={{ fontSize: '16px' }}>{item[1]}</Button>
              )}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    );
  }
}
