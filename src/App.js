import React, { Component } from 'react';
import Centro from './Centro';
import NavBar from './NavBar';
/*import SideBar from './SideBar';*/

//import Rodape from './Rodape';

class App extends Component{
    render() 
       {
       
        return(
           <div>
               {/*<SideBar />*/}
                <NavBar />
                <Centro/>
            </div>
        );

        }
}
export default App;


