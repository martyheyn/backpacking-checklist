import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  textField: {
    margin: 11,
    width: '32%',
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      width: '85%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '65%',
    },
  },
  button: {
    margin: theme.spacing(2),
    width: '10%',
    [theme.breakpoints.down('xs')]: {
      width: '30%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '20%',
    },
  },
}));

const FormPage2 = ({ nextStep, goBack, values, setValues }) => {
  // Destructure
  const { warmMeal, luxury } = values;
  const { setWarmeal, setLuxury } = setValues;

  // Go to the next page
  const continueOn = (e) => {
    e.preventDefault();
    nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    goBack();
  };

  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.textField}>
        <InputLabel id='demo-simple-select-label'>
          Do you want warm meals?
        </InputLabel>
        <Select
          value={warmMeal ? warmMeal : ''}
          onChange={(e) => setWarmeal(e.target.value)}
        >
          <MenuItem value='Yes'>Yes</MenuItem>
          <MenuItem value='No'>No</MenuItem>
        </Select>
      </FormControl>
      <br />
      <FormControl className={classes.textField}>
        <InputLabel id='demo-simple-select-label'>
          Want to backpack in comfort and luxury
        </InputLabel>
        <Select
          value={luxury ? luxury : ''}
          onChange={(e) => setLuxury(e.target.value)}
        >
          <MenuItem value='Yes'>Yes</MenuItem>
          <MenuItem value='No'>No</MenuItem>
        </Select>
      </FormControl>
      <br />
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

export default FormPage2;
