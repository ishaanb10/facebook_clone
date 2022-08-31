import React,{Component} from "react";
import ImageLayout from "../ImageLayout";
import covid from "../../../../images /covid.png";
import business from "../../../../images /business.png";
import blood from "../../../../images /blood.png";
import admanager from "../../../../images /admanager.png";
import ads from "../../../../images /ads.png";
import kids from "../../../../images /messengerkids.png";
import memories from "../../../../images /memories.png";
import market from "../../../../images /market.svg";
import pages from "../../../../images /pages.png";
import '../../../Navbar/Navbar.css'
class  LeftPanel extends Component {
    constructor(props) {
        super(props);
        this.state={
            imageData:[]
        };
    }
   
    getLeftMenuItems(){
        
        var LeftMenuList=[
            {"image":covid,
              "name": "COVID-19 Info"     
            },
            {"image":business,
              "name":"Business"        
            },
            {"image":blood,
              "name":"Blood Donations"          
            },
            
            {"image":admanager,
              "name":"Ads Manager"          
            },
            
            {"image":ads,
              "name":"Ads Center"          
            },
            {"image":kids,
              "name":"Messenger For Kids"          
            },

            {"image":memories,
              "name":"Memories"          
            },
            {"image":pages,
              "name":"Pages"          
            }


        ];
        this.setState({imageData:LeftMenuList});

    }
    componentDidMount(){
        this.getLeftMenuItems();
    }
    
    render() { 
      return (
        <div >
           {this.state.imageData.map((item)=>(
            <ImageLayout image={item.image} name={item.name}/>
           )

           )}
        </div>
        


      );
    }
}
 
export default LeftPanel;