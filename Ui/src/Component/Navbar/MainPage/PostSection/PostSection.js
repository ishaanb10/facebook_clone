import {react,Component} from 'react';
import Paper from "@mui/material";
import Post from './Post';
class PostSection extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts:null
        };
    }
//  componentDidMount(){
//     const requestOptions ={
//         method: "GET",
//         headers: { 'Content-Type': 'application/json' }
//     };

//     fetch(`http://localhost:8080/api/Post/AllPost/${localStorage.getItem("user").uid}`,requestOptions)
//     .then(response => response.json()).then((data)=>{
//         this.setState({posts:data});

//         })
//     .catch(error =>{

//       // ...
//     })
//     // ...

//  }
    render() { 
        return ( <div>
            <Post/>
            <Post/>
            </div> );
    }
}
 
export default PostSection;