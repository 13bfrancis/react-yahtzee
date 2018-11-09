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
          {isNaN(this.props.stateID) ? (
            <Button
              style={{ color: 'darkgrey' }}
              onClick={() => {
                this.props.setScore({
                  id: this.props.id,
                  score: checkScore({
                    id: this.props.id,
                    dice: this.props.dice
                  })
                });
              }}
            >
              {this.props.turn === 0 ? (
                <>-</>
              ) : (
                <>{checkScore({ id: this.props.id, dice: this.props.dice })}</>
              )}
            </Button>
          ) : (
            <Button>{this.props.stateID}</Button>
          )}
        </ListItemIcon>
      </ListItem>
    );
  }
}
