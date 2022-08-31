import React,{Component} from "react";
import ImageLayout from "../ImageLayout";
import './ContactList.css';

import dp0 from'../../../../images /dp0.png';
import dp1 from'../../../../images /dp1.png';
import dp2 from'../../../../images /dp2.png';
import dp3 from'../../../../images /dp3.png';
import dp4 from'../../../../images /dp4.png';
import dp5 from'../../../../images /dp5.png';
import dp6 from'../../../../images /dp6.png';
import dp7 from'../../../../images /dp7.png';
import dp8 from'../../../../images /dp8.png';
import dp9 from'../../../../images /dp9.png';

class  ContactList extends Component {
    constructor(props) {
        super(props);
        this.state={
            imageData:[]
        };
    }
   
    getContactMenuItems(){
        
        var RightMenuList=[
            {"image":dp0,
              "name": "Elon Musk"     
            },
            {"image":dp1,
              "name":"Conor McGregor"        
            },
            {"image":dp2,
              "name":"Chris Bumstead"          
            },
            
            {"image":dp3,
              "name":"SRK"          
            },
            
            {"image":dp4,
              "name":"Selmon Bhai"          
            },
            {"image":dp5,
              "name":"Ranveer Singh"          
            },

            {"image":dp6,
              "name":"Alia Bhatt"          
            },
            {"image":dp7,
              "name":"Random Stranger"          
            },
            {"image":dp8,
              "name":"Mangloo"          
            },
            {"image":dp9,
              "name":"Mangloo Michael"          
            },



        ];
        this.setState({imageData:RightMenuList});

    }
    componentDidMount(){
        this.getContactMenuItems();
    }
    
    render() { 
      return (
        <div className="rightside__container">
          
                <div className="rightside__header">
                    Contacts
                </div>

                <div className="rightside__content">
                    {this.state.imageData.map((item)=>(
                      <ImageLayout image={item.image} name={item.name}/>
                    )
                    )}
                </div>

        </div>
        
        


      );
    }
}
 
export default ContactList;