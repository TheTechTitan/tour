import React,{Component} from 'react';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


class UserForm extends Component {

    state={

        where: '',
        checkIn: '',
        checkOut: '',
        adult:'',
        children: ''
    };

    handleChange = input => e =>{
        this.setState({[input]:e.target.value});
    };



    render() {

        const values= {firstName: '', lastName: '', checkIn: '',checkOut: '',date: ''}

        const { classes } = this.props;

        console.log(this.state.where);
        return(

            <div>
                <form styles={{border:1}} noValidate>
                    <h2>Tour Sri lanka</h2>
                    <h4>blah blah</h4>
                    <TextField
                        id="where"
                        variant="outlined"
                        label="Where"
                        /*InputProps={{
                            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                        }}*/
                    />
                    <br/>

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

                    <br/>

                    <TextField
                        id="adult"
                        variant="outlined"
                        label="Adult"
                        /*InputProps={{
                            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                        }}*/
                    />

                    <TextField
                        id="children"
                        variant="outlined"
                        label="Children"
                        /*InputProps={{
                            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                        }}*/
                    />
                </form>
            </div>

        );

    }
}

export default UserForm;