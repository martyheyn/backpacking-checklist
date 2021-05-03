import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Button,
} from '@material-ui/core';
import { DispatchContext } from '../context/globalState';

const useStyles = makeStyles((theme) => ({
  list: {
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing(2),
    marginBottom: 50,
    width: '10%',
    [theme.breakpoints.down('xs')]: {
      width: '30%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '20%',
    },
  },
}));

const Confirm = ({
  nextStep,
  goBack,
  values,
  values: { nights, location, dates, warmMeal, luxury },
}) => {
  const dispatch = useContext(DispatchContext);

  // Go to the next page
  const continueOn = (e) => {
    e.preventDefault();
    dispatch({ type: 'SEND_SACK_DATA', sackData: values });
    nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    goBack();
  };

  const classes = useStyles();

  const tripDration = nights && `${nights} nights`;

  return (
    <div>
      <h1>Confirmation</h1>
      <List>
        <ListSubheader>Trip Length</ListSubheader>
        <ListItem>
          <ListItemText className={classes.list} primary={tripDration} />
        </ListItem>
        <ListSubheader>Destination</ListSubheader>
        <ListItem>
          <ListItemText className={classes.list} primary={location} />
        </ListItem>
        <ListSubheader>Dates</ListSubheader>
        <ListItem>
          <ListItemText className={classes.list} primary={dates} />
        </ListItem>
        <ListSubheader>Warm Meals</ListSubheader>
        <ListItem>
          <ListItemText className={classes.list} primary={warmMeal} />
        </ListItem>
        <ListSubheader>Luxury</ListSubheader>
        <ListItem>
          <ListItemText className={classes.list} primary={luxury} />
        </ListItem>
      </List>
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        onClick={continueOn}
      >
        Continue
      </Button>
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        onClick={back}
      >
        Back
      </Button>
    </div>
  );
};

export default Confirm;
