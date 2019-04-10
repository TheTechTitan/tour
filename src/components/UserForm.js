import React,{Component} from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import AppBar from '@material-ui/core/AppBar';
// import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
//
// import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


// const styles = theme => ({
//     button: {
//         margin: theme.spacing.unit,
//     },
//     input: {
//         display: 'none',
//     },
// });

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

        // const values= {firstName: '', lastName: '', checkIn: '',checkOut: '',date: ''}
        //
        // const { classes } = this.props;

        console.log(this.state.where);
        return(

            <div style={{marginLeft:50, borderBlock:1, borderBlockColor: 'black'}}>
                <br/>
                <form noValidate>
                    <h2>Explore Sri lanka</h2>
                    <p>Find the best deals for your travel around Sri Lanka. <br/>An Island full of adventures to mark your most memorable memory.</p>
                    <TextField style={{width:400}}
                        id="where"
                        variant="outlined"
                        label="Where"
                        /*InputProps={{
                            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                        }}*/
                    />
                    <br/><br/>

                    <TextField
                        id="checkIn"
                        label="Check In"
                        type="date"
                        defaultValue="2017-05-24"
                        onChange={this.handleChange('checkIn')}
                    />

                    <TextField style={{marginLeft:45}}
                        id="checkOut"
                        label="checkOut"
                        type="date"
                        defaultValue="2017-05-24"
                        onChange={this.handleChange('checkOut')}
                    />

                    <br/><br/>

                    <TextField
                        id="adult"
                        variant="outlined"
                        label="Adult"
                        /*InputProps={{
                            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                        }}*/
                    />

                    <TextField style={{marginLeft:5}}
                        id="children"
                        variant="outlined"
                        label="Children"
                        /*InputProps={{
                            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                        }}*/
                    />
                    <br/><br/>

                    <Button variant="contained" color="primary" style={{backgroundColor:"green", color:"white", width:400, height:50}}>
                        Search
                    </Button>


                </form>
            </div>

        );

    }
}

// UserForm.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default UserForm;