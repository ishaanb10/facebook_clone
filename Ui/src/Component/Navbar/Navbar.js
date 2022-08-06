import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import fblogo from '../../../src/images /logo.png';
import home from '../../../src/images /home.svg';
import page from '../../../src/images /pages.svg';
import watch from '../../../src/images /watch.svg';
import market from '../../../src/images /market.svg';
import groups from '../../../src/images /groups.svg';
import profile from '../../../src/images /profile.png'
import '../Navbar/Navbar.css';
import { Avatar } from '@mui/material';
class Navbar extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
render(){
return(
<div>
    <Grid  container class="navbar__main">
        <Grid item xs={3}>
          <div class="navbar_left">
            <img src={fblogo} class="navbar_logo"/>
            <input type="input" class ="navbar_search" placeholder="Search Facebook"/>
          </div>

        </Grid>
        <Grid item xs={6}>
            <div class="navbar_centre">
              <div class="navbar_tabs active">
              <img src={home} width="35px" height="35px"/>
              </div>
               
               <div class="navbar_tabs ">
               <img src={page} width="35px" height="35px"/>
               </div>
               
               <div class="navbar_tabs" >
               <img src={watch} width="35px" height="35px" />
               </div>
              
              <div class="navbar_tabs ">
              <img src={market} width="35px" height="35px" />
              </div>
               
               <div class="navbar_tabs ">
               <img src={groups} width="35px" height="35px" />
               </div>
                
            </div>
        
        
        
        </Grid>
        <Grid item xs={3}>
            <div class="navbar_right">
              <div class="navbar_profile">
                <Avatar className="navbar_profileIcon" src={profile} />
                <div class="navbar_profileName">Ishaan</div>
              </div>


            </div>



        </Grid>

    </Grid>

</div>
  

);
}
}
export default Navbar;