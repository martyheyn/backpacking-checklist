import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Link,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 390,
    height: 370,
  },
  action: {
    height: 325,
    position: 'relative',
  },
  media: {
    height: 225,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    margin: 1,
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
}));

const Cards = ({ sackItem, image, alt, description, link, nextStep }) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea className={classes.action}>
          {sackItem === 'Clothes' ? 
          <CardMedia
            className={classes.media}
            onClick={nextStep}
            alt={alt}
            image={image}
            title={alt}
          /> : 
          <CardMedia
          className={classes.media}
          alt={alt}
          image={image}
          title={alt}
          />
          }
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant='h5' component='h2'>
              {sackItem}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            <Link
              target='_blank'
              href={link}
              style={{ textDecoration: 'none' }}
            >
              Purchase
            </Link>
          </Button>
          <Button size='small' color='primary'>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Cards;
