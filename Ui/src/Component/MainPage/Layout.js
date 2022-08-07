import React,{Component} from "react";
import Grid from '@mui/material/Grid';
import LeftPanel from "./LeftPanel/LeftPanel";
import StatusBar from "./StatusBar/StatusBar";
import UploadSection from "./UploadSection/UploadSection";


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
                    <LeftPanel/>
                </Grid>
                <Grid item xs={6}>
                    <StatusBar/>
                    <UploadSection/>
                </Grid>
                <Grid item xs={3}>
                    Right
                </Grid>

            </Grid>

        </div>);
    }
}
 
export default Layout;