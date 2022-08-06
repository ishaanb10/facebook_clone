import React,{Component} from "react";
import Grid from '@mui/material/Grid';



class Layout extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div>
            <Grid container>
                <Grid item xs={3}>
                    Left 
                </Grid>
                <Grid item xs={6}>
                    Centre
                </Grid>
                <Grid item xs={3}>
                    Right
                </Grid>

            </Grid>

        </div>);
    }
}
 
export default Layout;