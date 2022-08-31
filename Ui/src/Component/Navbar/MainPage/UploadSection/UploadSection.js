import { Avatar, Paper } from "@mui/material";
import {Component}from "react";
import {firebase, storage} from "../../../../firebase";
//'import firebase from "firebase/compat/app";
import {getDownloadURL, ref} from "firebase/storage";
import profile from '../../../../images /profile.png';
import Dialog from '@mui/material/Dialog'
import imge from '../../../../images /image.png';
import video from '../../../../images /video.png';
import reaction from '../../../../images /feelings.png';
import './UploadSection.css'
import { app } from "../../../../firebase";
import { uploadBytes } from "firebase/storage";

class UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state={
            open:false,
            uploadImage:null,
            image:null
        };
    }
    handleClose=()=>{
        this.setState({open:false})
    }
    openDialog=(event)=>{
        this.setState({open:true});
        this.setState({uploadImage:URL.createObjectURL(event.target.files[0])});
        this.setState({image:event.target.files[0]});
    }

    uploadToFirebase=() =>{

const imgRef=ref(storage,`images/${this.state.image.name}`);
uploadBytes(imgRef,this.state.image).then(()=> {getDownloadURL(imgRef).then((url)=>{
    
    // let payload = {
    //     "userID" : user.uid,
    //     "userName": this.state.signup_name,
    //     "userImage" : this.getImage()
    // }

    // const requestOptions ={
    //     method: "POST",
    //     headers: { 'Content-Type': 'application/json' },
    //     body : JSON.stringify(payload),
    // };

    // fetch(`http://localhost:8080/api/Post/save/${localStorage.getItem("user").uid}`,requestOptions)
    // .then(response => response.json())
    // .then(data => {
    //     //localStorage.setItem("user",JSON.stringify(data));
    //     window.location.reload();
    // })
    // .catch(error =>{

    //   // ...
    // })
    })}  
);


        // [START storage_monitor_upload]
       
    }

    
    
    render() { 
        return (
            <div>
                <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-titile" open={this.state.open}>
                    <div className="upload__header">
                        <div className="upload__text">Create Post</div>
                        <div className="upload__close"><span onClick={this.handleClose}>X</span></div>
                    </div> 
                    
                    <input type="text" onChange={(event)=>this.state.description= event.currentTarget.value} className="upload__textbox" placeholder="What's on your mind"/>
                    <img src={this.state.uploadImage} className="upload__img"/>
                    <input type="button" onClick ={this.uploadToFirebase} value="Post" className="upload__post" />
                    
                    
                 </Dialog>

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
                    <label  className= "upload_tabs" for="file-upload">
                        <img src={imge} width="35px"/>
                        <div className="upload_text">Photo/Video</div>
                    </label>
                    <input type="file" className="upload__button" id="file-upload" onChange={this.openDialog}/>
                      
                    </div>

                    <div className="upload_tabs" id="video"> 
                        <img src={video} width="35px" height="35px"/>
                        <div className="upload_text">Live Video</div>
                    </div>

                    <div className="upload_tabs" id="feeling">
                        <img src={reaction} width="35px"  height="35px"/>
                        <div className="upload_text">Feeling/Activity</div>
                    </div>

                 </div>
               
                    
                





                </Paper>

            </div>
            
          );
    }
}
 
export default UploadSection;