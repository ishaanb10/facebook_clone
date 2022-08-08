import {react,Component} from 'react';
import Paper from "@mui/material";
import Post from './Post';
class PostSection extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
 
    render() { 
        return ( <div>
            <Post/>
            <Post/>
            </div> );
    }
}
 
export default PostSection;