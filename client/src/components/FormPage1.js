import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import DatePicker from './DatePicker';
import { cities } from '../hooks/cities';

const useStyles = makeStyles((theme) => ({
  textField: {
    margin: 11,
    width: '32%',
    [theme.breakpoints.down('xs')]: {
      width: '85%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '60%',
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
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
}));

const FormPage1 = ({ nextStep, values, setValues }) => {
  // Destructure
  const { nights, location, dates } = values;
  const { setNights, setLocation, setDates } = setValues;

  // Go to the next page
  const continueOn = (e) => {
    e.preventDefault();
    nextStep();
  };

  const classes = useStyles();

  return (
    <div>
      <TextField
        className={classes.textField}
        label='How many nights are you camping?'
        onChange={(e) => setNights(e.target.value)}
        defaultValue={nights}
      />
      <br />
      <Autocomplete
        className={classes.textField}
        style={{ margin: 'auto' }}
        // disableClearable
        options={cities.sort((a, b) => -b.state.localeCompare(a.state))}
        groupBy={(option) => option.state}
        getOptionLabel={(option) => (option.city ? option.city : option)}
        freeSolo
        autoHighlight
        value={location}
        onChange={(event, newValue) => {
          setLocation(newValue && `${newValue.city} (${newValue.state})`);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Choose your destination'
            variant='standard'
          />
        )}
      />
      <br />
      {/* Cooler datepicker is possible */}
      <DatePicker dates={dates} setDates={setDates} />
      <br />
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        onClick={continueOn}
      >
        Continue
      </Button>
    </div>
  );
};

export default FormPage1;
