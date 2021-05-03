import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// Resize Images

import Cards from './Cards';
import Weather from './Weather';
import { SackContext } from '../context/globalState';
import { inSack } from '../hooks/conditions';

const useStyles = makeStyles((theme) => ({
  cards: {
    padding: theme.spacing(4),
  },
  titles: {
    textAlign: 'center',
  },
  buttons: {
    margin: theme.spacing(2),
    marginBottom: 50,
  },
}));

const Success = ({ setValues: { setStep }, reset, nextStep }) => {
  const { nights, luxury, warmMeal, location } = useContext(SackContext);
  const [essentails, jet_boil_stove, water_pump, hammock, pillow] = inSack(
    nights
  );

  const sack = essentails;
  if (warmMeal === 'Yes') {
    sack.push(jet_boil_stove);
  }
  if (nights >= '1') {
    sack.push(water_pump);
  }
  if (luxury === 'Yes') {
    sack.push(hammock, pillow);
  }

  // Go to Home Page
  // Use the context API for this
  const goHome = (e) => {
    e.preventDefault();
    setStep(1);
  };

  // Reset
  // Use the context API for this
  const resetHome = (e) => {
    e.preventDefault();
    reset();
  };

  const classes = useStyles();

  return (
    <div>
      {location && <Weather />}
      {/* Put images in a List and map over it */}
      <h1>Items for your Sack</h1>
      <Grid className={classes.cards} container spacing={3}>
        {sack.map((item, i) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={i}>
              <Cards
                sackItem={item.name}
                image={item.img}
                description={item.description}
                link={item.link}
                alt={item.name}
                nextStep={nextStep}
                key={i}
              />
            </Grid>
          );
        })}
      </Grid>
      <div>
        <Button
          className={classes.buttons}
          variant='contained'
          color='primary'
          onClick={goHome}
        >
          Back to the Start
        </Button>
        <Button
          className={classes.buttons}
          variant='contained'
          color='primary'
          onClick={resetHome}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Success;
