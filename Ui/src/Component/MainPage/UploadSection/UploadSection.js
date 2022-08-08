import { Avatar, Paper } from "@mui/material";
import {Component}from "react";
import profile from '../../../images /profile.png';
import imge from '../../../images /image.png';
import video from '../../../images /video.png';
import reaction from '../../../images /feelings.png';
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
                 <div className="upload_top">

                    <div className="upload_image">
                        <Avatar  src={profile}/>
                    </div>

                    <div>
                        <input type="text" className="upload_box" placeholder="Whats on your mind ?"/>
                    </div>

                 </div>

                 <div className="upload_bottom">
                    <div className="upload_tabs"> 
                        <img src={imge} width="35px"/>
                        <div className="upload_text">Photo/Video</div>
                    </div>

                    <div className="upload_tabs"> 
                        <img src={video} width="35px"/>
                        <div className="upload_text">Live Video</div>
                    </div>

                    <div className="upload_tabs">
                        <img src={reaction} width="35px"/>
                        <div className="upload_text">Feeling/Activity</div>
                    </div>

                 </div>
               
                    
                





                </Paper>

            </div>
            
          );
    }
}
 
export default UploadSection;