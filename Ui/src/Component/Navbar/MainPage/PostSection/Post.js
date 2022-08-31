import React,{Component} from "react";
import { Avatar, Paper } from "@mui/material";
import testImg from '../../../../images /home.jpeg';
import profile from '../../../../images /profile.png';
import like from '../../../../images /like.png';
import comment from '../../../../images /comment.png';
import share from '../../../../images /share.png';
import './PostSection.css';
import '../UploadSection/UploadSection.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    
    render(props) { 
        return (  
            <div>
            <Paper sx={{ borderColor:'#B8B8B8',borderTop:'2px'}} className="post__container">
                {/* header */}
                <div className="post__header">
                    <div className="post__header_img">
                        <Avatar src={profile} className="post_img" />
                    </div>
                    <div className="post__header_text"> 
                        Ishaan
                    </div>
                </div> 

                {/* description */}
                <div className="post__description">
                    Description
                </div>
                {/* image */}
                <div className="post__image">
                    <img src={testImg} width="600px" /> 
                    
                </div>
                {/* like count */}
                <div className="post__likeCountContainer">
                    <div className="post__like">
                        <img className="post__img" src={like} />
                    </div>
                    <div className="post__likecount">
                    5
                    </div>
                    <div className="post__commentcount">
                        6 comments
                    </div>
                </div>
                {/* like share box */}
                <div className="post__likeShare">
                    <div className="post__tab">
                        <div className="post__tabfirst">
                            <img className="post__tabimg" src={like} />
                        </div>
                        <div className="post__tabtext">
                            Like
                        </div>
                    </div>

                    <div className="post__tab">
                        <div className="post__tabfirst">
                            <img className="post__tabimg" src={comment} />
                        </div>
                        <div className="post__tabtext">
                            Comment
                        </div>
                    </div>

                    <div className="post__tab">
                        <div className="post__tabfirst">
                            <img className="post__tabimg" src={share} />
                        </div>
                        <div className="post__tabtext">
                            Share
                        </div>
                    </div>
                </div>
                {/* comment box */}
                <div className="upload__comment">
                    <div className="comment__section">
                        
                                    <div className="comment">
                                        <Avatar src={profile} className="comment_img" />
                                        <div  className="comment_text" >Commented by user </div>
                                    </div> 
                      
                    </div>
                    <div className="upload_top">
                        <div>
                            <Avatar src={profile} className="upload_img"/>
                        </div>
                        <div>
                            <input  className="upload_box" placeholder="What's on your mind ?" type="text" />
                        </div>
                    </div>
                </div>
                
            </Paper>
        </div>
    );
    }
}
 
export default Post ;