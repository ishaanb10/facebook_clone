import React,{Component} from "react";
import Grid from '@mui/material/Grid';
import LeftPanel from "./LeftPanel/LeftPanel";
import StatusBar from "./StatusBar/StatusBar";
import UploadSection from "./UploadSection/UploadSection";
import PostSection from "./PostSection/PostSection";
import './MainPage.css';
import ContactList from "./ContactList/ContactList";
import '../Navbar.css';


class Layout extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div>
            <Grid container>
                <Grid item xs={3} className="left_container" >
                    <LeftPanel/>
                </Grid>
                <Grid item xs={6} className="middle_container"> 
                    <StatusBar/>
                    <UploadSection/>
                    <PostSection/>
                </Grid>
                <Grid item xs={3} className="left_container">
                    <ContactList/>
                </Grid>

            </Grid>

        </div>);
    }
}
 
export default Layout;