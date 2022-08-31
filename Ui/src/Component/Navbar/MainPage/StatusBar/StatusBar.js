import React from 'react';
import { Component } from 'react';
import { Paper } from '@mui/material';
import "./Statusbar.css";
import Status from './Status';

class  StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
                
            <div className="status_barcontainer">
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
            </div>
        );
    }
}
 
export default StatusBar;