import React from 'react';
import { Component } from 'react';
import { Paper } from '@mui/material';
import "../StatusBar/Statusbar.css";

class  Status extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
        <div>
            <Paper className="status"/> 
        </div>);
    }
}
 
export default Status ;