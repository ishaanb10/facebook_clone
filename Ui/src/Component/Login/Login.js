import {React,Component}from "react";
import Grid from '@mui/material/Grid';
import { Dialog, Paper } from "@mui/material";
import '../../Component/Login/Login.css'
import { firebase } from "../../firebase";
import AlertDialog from "../DialogBox/DialogBox";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";

class Login extends Component {
    constructor(props) {
        super(props);
    }
    state = {  
        signIn:true,
        signup_name:null,
        signin_email:null,
        signin_password:null,
        signup_email:null,
        signup_password:null,
        signInMethod:null,
        errorOccured:null
    }

    switchPanel =()=> { 
    if(this.state.signIn){
        this.setState({signIn:false});
    }
    else{
        this.setState({signIn:true});
    }


    };

    getImage(){
        return "../../images /dp"+Math.floor(Math.random() * 10);
    }

    signUp =async() =>{
        
        createUserWithEmailAndPassword(firebase.auth, this.state.signup_email,this.state.signup_password)
        .then((userCredential) => {
          
          console.log(userCredential);
          const user = userCredential.user;

          let payload = {
            "userID" : user.uid,
            "userName": this.state.signup_name,
            "userImage" : this.getImage()
        }

        const requestOptions ={
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(payload),
        };

        fetch("http://localhost:8080/api/user/save",requestOptions)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("user",JSON.stringify(data));
            window.location.reload();
        })
        .catch(error =>{

          // ...
        })
    })
        .catch((error) => {
          const errorCode = error.code;
          const errorMssg = error.message;
        
          // ..
        });

        

    };

    signIn=()=>{
       
        signInWithEmailAndPassword(firebase.auth,this.state.signin_email,this.state.signin_password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
console.log(user);

    const requestOptions ={
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    };

    fetch(`http://localhost:8080/api/user/${user.uid}`,requestOptions)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("user",JSON.stringify(user));
window.location.reload();
       
    })
    .catch(error =>{

      // ...
    })
    // ...
  })
  .catch((error) => {
    console.log("failure");
    const errorCode = error.code;
    const errorMessage = error.message;
this.setState({errorOccured:errorMessage})

  });

    };

    render() {   
      

        
        return ( 
        
            <div className="main__container">
                <Grid className="main__content" container >
                        <Grid item xs={7}>
                            <div className="fblogo">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" width="300px" />
                            </div>
                            <div>
                                <h1 className="text">Facebook helps you connect and share with the people in your life.</h1>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className="logincard__container">
                            {
                                this.state.signIn === true ?
                            
                                <div container="login__panel" >
                                    <div>
                                        <input onChange={(event)=>{this.setState({signin_email : event.currentTarget.value})}}  type="text" className="login__input" placeholder="Email address" />
                                    </div>
                                    <div>
                                        <input onChange={(event)=>{this.setState({signin_password :event.currentTarget.value})}}  type="password" className="login__input" placeholder="Password"/>
                                    </div>
                                    <div>
                                        <button onClick={this.signIn} className="login__button">Log in</button>
                                       
                                    </div>
                                    <div>
                                        <div className="forget_Text">Forgotten password?</div>
                                    </div>
                                    <div>
                                        <div className="dividor"></div>
                                    </div>
                                    <div>
                                        <button className="login__createnew" onClick={this.switchPanel}>Create New Account</button>
                                       
                                    </div>
                                </div>
                                :
                                <div container="login__panel">
                                    <div>
                                        <input onChange={(event)=>{this.setState({signup_name:event.currentTarget.value})}} type="text" className="login__input" placeholder="Name" />
                                    </div>
                                    <div>
                                        <input onChange={(event)=>{this.setState({signup_email:event.currentTarget.value})}}  type="text" className="login__input" placeholder="Email address" />
                                    </div>
                                    <div>
                                        <input onChange={(event)=>{this.setState({signup_password:event.currentTarget.value})}}  type="password" className="login__input" placeholder="Password"/>
                                    </div>
                                    <div>
                                        <button onClick={this.signUp} className="login__button">Sign Up</button>
                                        
                                    </div>
                                    <div>
                                        <div onClick={this.switchPanel} className="forget_Text">Already have account?</div>
                                    </div>
                                </div>
                             }
    
                            </Paper>
                        </Grid>
                        <Grid item xs={1}></Grid>
                </Grid>
            </div> );
    }
}
 
export default Login;