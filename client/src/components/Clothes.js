import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// Resize Images

import Cards from './Cards';

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

const Clothes = ({ setValues: { setStep }, reset, goBack }) => {
  const classes = useStyles();

    const sackClothes = [
        {
            name: 'Short Sleeve Shirt',
            img: '',
            link: '',
            description: 'Sweat through these babies',
        }, {
            name: 'Long Sleeve Shirts',
            img: '',
            link: '',
            description: 'Going to need these especially at night when the sun goes down and it gets chilly',
        }, {
            name: 'Shorts',
            img: '',
            link: '',
            description: 'Bang around in these babies',
        }, {
            name: 'Pants',
            img: '',
            link: '',
            description: 'Again these are good for the when the sun goes down',
        }, {
            name: 'Gloves',
            img: '',
            link: '',
            description: 'Take these if you think theres going to snow',
        }, {
            name: 'Beenie',
            img: '',
            link: '',
            description: 'Cover them ears up',
        }, {
            name: 'Socks',
            img: '',
            link: '',
            description: 'Definitely bring some wool socks to keep your extrendies more',
        }, {
            name: 'Underwear',
            img: '',
            link: '',
            description: 'Bring an extra pair or two of these. Changing into a fresh pair might be the highlight of the day',
    },
    ]

  // Reset
  // Use the context API for this
  const resetHome = (e) => {
    e.preventDefault();
    reset();
  };
    return (
        <div>
                  <h1>Items for your Sack</h1>
      <Grid className={classes.cards} container spacing={3}>
        {sackClothes.map((item, i) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={i}>
              <Cards
                sackItem={item.name}
                image={item.img}
                description={item.description}
                link={item.link}
                alt={item.name}
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
          onClick={goBack}
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
    )
}

export default Clothes;