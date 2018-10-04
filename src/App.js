import React, { Component } from 'react';
import Centro from './Centro';
import NavBar from './NavBar';

//import Rodape from './Rodape';

class App extends Component{
    render() 
       {
       
        return(
           <div>
              
                <NavBar />
                <Centro/>
            </div>
        );

        }
}
export default App;


