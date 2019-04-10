import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import {UserForm} from "./UserForm";

export class Test extends Component {
    render() {
        return (
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        );
    }
}
export default Test;
