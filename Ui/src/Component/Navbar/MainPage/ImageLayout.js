import { Avatar } from "@mui/material";
import React,{Component} from "react";
import './MainPage.css';

class ImageLayout extends Component{

    constructor(props){
        super(props);
        this.state={};
    }

        render(){
            return(
                   
                    <div className="img_layoutProfile">
                    <Avatar className="img_layoutIcon" src={this.props.image}/>
                    <div className="img_layoutName">{this.props.name}</div>
                    </div>
                    
                
                );

    }




}

export default ImageLayout;