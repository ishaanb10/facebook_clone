import { Avatar, Paper } from "@mui/material";
import {Component}from "react";
import profile from '../../../images /profile.png';
import '../../MainPage/UploadSection/UploadSection.css'

class UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    
    render() { 
        return (
            <div>
                <Paper className="upload_container">
                <div className="upload_image">
                <Avatar  src={profile}/>
                </div>
                    
                





                </Paper>

            </div>
            
          );
    }
}
 
export default UploadSection;