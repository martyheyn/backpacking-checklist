import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    textField: {
        margin: 11,
        width: '32%',
        [theme.breakpoints.down('xs')]: {
            width: '85%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '60%',
        }
    },
}));

const DatePicker = ({ dates, setDates }) => {
    const classes = useStyles();

    return (
        <div>
            <TextField
                className={classes.textField}
                label="What dates are you going"
                type="date"
                onChange={(e) => setDates(e.target.value)}
                // Make this todays date
                defaultValue={dates}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    )
}

export default DatePicker;


// Dateicker
// import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardDatePicker,
// } from '@material-ui/pickers';

// <MuiPickersUtilsProvider utils={DateFnsUtils}>
// <KeyboardDatePicker
//     className={classes.textField}
//     margin="normal"
//     id="date-picker-dialog"
//     label="What dates are you going"
//     format="MM/dd/yyyy"
//     value={email}
//     onChange={(date) => setEmail(date)}
//     KeyboardButtonProps={{
//         'aria-label': 'change date',
//     }}
// />
// </MuiPickersUtilsProvider>