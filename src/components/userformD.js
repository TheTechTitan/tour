import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    textField: {
        flexBasis: 200,
    },
});

const ranges = [
    {
        value: '0-20',
        label: '0 to 20',
    },
    {
        value: '21-50',
        label: '21 to 50',
    },
    {
        value: '51-100',
        label: '51 to 100',
    },
];

class userformD extends React.Component {
    state = {
        where: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    render() {
        const { classes } = this.props;

        return (

                <div className={classes.root}>
                    <TextField
                        id="where"
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        label="Where"
                        /*InputProps={{
                            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                        }}*/
                    />

                    <br>

                    <TextField
                        id="checkIn"
                        label="Check In"
                        type="date"
                        defaultValue="2017-05-24"
                        onChange={this.handleChange('checkIn')}
                    />

                    <TextField
                        id="checkOut"
                        label="checkOut"
                        type="date"
                        defaultValue="2017-05-24"
                        onChange={this.handleChange('checkOut')}
                    />

                    </br>

                    <TextField
                        id="outlined-select-currency-native"
                        select
                        label="Native select"
                        className={classes.textField}
                        value={this.state.currency}
                        onChange={this.handleChange('currency')}
                        SelectProps={{
                            native: true,
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        helperText="Please select your currency"
                        margin="normal"
                        variant="outlined"
                    >

                    <div/>

        );
    }
}



export default withStyles(styles)(userformD);
