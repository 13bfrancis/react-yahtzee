import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { checkScore } from '../helperFunctions';

export default class Scoreline extends Component {
  render() {
    return (
      <ListItem>
        <ListItemText>{this.props.children}</ListItemText>
        <ListItemIcon>
          {isNaN(this.props.id) ? (
            <Button style={{ color: 'darkgrey' }}>
              {this.props.turn === 0 ? (
                <>-</>
              ) : (
                <>{checkScore({ id: this.props.id, dice: this.props.dice })}</>
              )}
            </Button>
          ) : (
            <Button>{this.props.id}</Button>
          )}
        </ListItemIcon>
      </ListItem>
    );
  }
}
