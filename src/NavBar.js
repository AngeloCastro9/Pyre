import React, { Component } from 'react';
import {Navbar} from 'react-materialize';
import {NavItem} from 'react-materialize';
class NavBar extends Component{
    render(){
        return(  
            <div className="navC">
           <Navbar brand='Pyre' right>
            <img alt="brand" src="./Fire.png"></img>
            <NavItem onClick={() => console.log('test click')}>Chats</NavItem>
            <NavItem href='components.html'>Sair</NavItem>
          </Navbar>
          </div>
        );
            
    }
}

export default NavBar;