
import React, { Component } from 'react';
import { Button, Card, Icon } from 'react-materialize'
import { CardTitle } from 'react-materialize';
import { Col } from 'react-materialize';
import { Row } from 'react-materialize';
//import {Alert} from 'react-bootstrap';
import "./Tinder.css";
class Centro extends Component {
    //testes!!
   componentDidMount() {
     this.setState({ mulherAtual: this.state.mulheres[0]}, this.setState({meCurtiu: this.state.mulheres[0]}))
       if (this.state.index === 0) {
            //testes!!
            console.log("HELLO WORLD");
        }

        else {
            console.log("deu ruim")
        }
    }
    state = {
        mulherAtual: {},
        mulheres: [
            { id: 1, imagem: "women2.jpeg", nome: "Josefina, 23", idade: "23", descricao: " Me chamo Josefina, da uma pizza pro Angelo, Dudu!!",meCurtiu: true },
            { id: 2, imagem: "women.jpg", nome: "Fernandinha", idade: "20",descricao: " DA UMA PIZZA PRO ANGELO, ELE VAI FICAR FELIZ!",meCurtiu: true },
            { id: 3, imagem: "women3.jpg", nome: "Sofia", idade: "22",descricao:  "PIZZAAAAAAAAAAAAAAAAA",meCurtiu: true },
            { id: 4, imagem: "women5.jpeg", nome: "Marta", idade: "19", descricao: "DIA 16, OK?",meCurtiu: true },
            { id: 5, imagem: "women4.jpeg", nome: "Erizete", idade: "20", descricao: "TODO MUNDO COVIDADO",meCurtiu: true },
            { id: 6, imagem: "fim.jpg"},
        ],
        index: 0
    }

    showMatch = () => {
       alert("DEU MATCH")
        
        console.log('ROLA O MATCH')
    }

    like = () => {
        if(this.state.mulherAtual.meCurtiu) {
            this.showMatch();
        } else{
            console.log("voce passou por aqui")
        }
        this.alterarMulher()
        
    }
    
    dislike = () => {
       this.alterarMulher() 
    }

    alterarMulher = () => {
        if (this.state.index >= this.state.mulheres.length - 1) {
            //remove as imagens!!!!!! ↓↓↓↓↓↓
            this.setState({index: 6});
            return null;
        } 
        //this.setState({ index: this.state.index + 1 })
        this.setState({ mulherAtual: this.state.mulheres[this.state.index + 1], index: this.state.index + 1})
    }

    render() {
        return (

            <div className="botoes" >
                <div className="atributos">
                    < Card header={<CardTitle image={this.state.mulherAtual.imagem} />}
                        title={this.state.mulherAtual.nome} nome={this.state.mulherAtual.idade}
                        reveal={this.state.mulherAtual.descricao}>
                        <b><p>{this.state.mulherAtual.idade}</p></b>
                    </ Card >

                </div>
                <div>
                    <Row>

                        <Col s={5} className='grid-example'></Col>

                        <Button
                            className="botoes"
                            onClick={() => this.like()}
                            waves='light'>Like<Icon></Icon></Button>

                        <Button waves='light'
                            className="botoes"
                            onClick={() => this.dislike()}>Deslike</Button>
                    </Row>
                </div>
            </div>



        );

    }

}


export default Centro;
