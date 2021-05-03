import React, { useState } from 'react';
// AppBar
import { makeStyles } from '@material-ui/core/styles';

import NavAppBar from './AppBar';
import FormPage1 from './FormPage1';
import FormPage2 from './FormPage2';
import Confirm from './Confirm';
import Success from './Success';
import Clothes from './Clothes';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [nights, setNights] = useState();
  const [location, setLocation] = useState(null);
  const [dates, setDates] = useState();
  const [warmMeal, setWarmeal] = useState();
  const [luxury, setLuxury] = useState();

  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go back to next step
  const goBack = () => {
    setStep(step - 1);
  };

  const reset = () => {
    setStep(1);
    setNights();
    setLocation(null);
    setDates();
    setWarmeal();
    setLuxury();
  };

  const classes = useStyles();

  const values = { nights, location, dates, warmMeal, luxury };
  const setValues = {
    setStep,
    setNights,
    setLocation,
    setDates,
    setWarmeal,
    setLuxury,
  };

  return (
    <div>
      <NavAppBar setStep={setStep} />
      <div className={classes.root}>
        {step < 3 ? (
          <div>
            <h1 style={{ padding: '1em' }}>
              Answer these questions to figure out what to Pack in your Sack
            </h1>
            <p>Step: {step}/3</p>
          </div>
        ) : null}
        {(() => {
          switch (step) {
            case 1:
              return (
                <FormPage1
                  nextStep={nextStep}
                  values={values}
                  setValues={setValues}
                />
              );
            case 2:
              return (
                <FormPage2
                  nextStep={nextStep}
                  goBack={goBack}
                  values={values}
                  setValues={setValues}
                />
              );
            case 3:
              return (
                <Confirm
                  nextStep={nextStep}
                  goBack={goBack}
                  values={values}
                  setValues={setValues}
                />
              );
            case 4:
              return (
                <Success
                  setValues={setValues}
                  nextStep={nextStep}
                  reset={reset}
                />
              );
            case 5:
              return (
                <Clothes setValues={setValues} goBack={goBack} reset={reset} />
              );
            default:
              return <h1>Default</h1>;
          }
        })()}
      </div>
    </div>
  );
};

export default UserForm;
