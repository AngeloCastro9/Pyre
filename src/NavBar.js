import React, { Component } from 'react';
import { Navbar } from 'react-materialize';
import { NavItem } from 'react-materialize';
import Sidebar from "react-sidebar";
class NavBar extends Component {
    //SIDEBAR
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }
    teste=()=>{
        <div>
            sidebar={<img alt="brand" src="./women2.menor.jpeg"></img>}
            sidebar={<img alt="brand" src="./women.menor.jpg"></img>}
        </div>
    }
    render() {
        return (
            <div className="navC">
                <Sidebar
                    /*sidebar={this.state.imagens[this.state.index].imagem}*/
                    sidebar={<img alt="brand" src="./women2.menor.jpeg"></img> }
                   sidebar={<img alt="brand" src="./women.menor.jpg"></img>}
                  /*  sidebar={<img alt="brand" src="./women3.menor.jpg"></img>}
                    sidebar={<img alt="brand" src="./women4.menor.jpeg"></img>}
                    sidebar={<img alt="brand" src="./women5.menor.jpeg"></img>}*/
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: { background: "white" } }}>

                    <Navbar brand='Pyre' right>
                        <img alt="brand" src="./Fire.png"></img>
                        <NavItem onClick={() => this.onSetSidebarOpen(true)}>Chats</NavItem>
                        <NavItem onClick={() => console.log('você quis acessar as configurações')}>configurações</NavItem>
                        <NavItem href='components.html'>Sair</NavItem>
                    </Navbar>
                </Sidebar>
            </div>

        );

    }
}





export default NavBar;