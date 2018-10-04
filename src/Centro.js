import React, { Component } from 'react';
import { Button, Card, Icon } from 'react-materialize'
import { CardTitle } from 'react-materialize';
import { Col } from 'react-materialize';
import { Row } from 'react-materialize';
import "./Tinder.css";
class Centro extends Component {
   componentDidMount(){
        if(this.state.index.imagem === 0) {
            console.log("HELLO WORLD");
        }

        else{
            console.log("deu ruim")
        }
   }
    state = {
        descricao: [
            { id: 1, imagem: "women2.jpeg", nome: "Josefina" },
            { imagem: "women.jpg" },
            { imagem: "women3.jpg" },
            { imagem: "women4.jpeg"},
            {imagem: "women5.jpeg"}
        ],
        index: 0



    }
    /*state = {
         nome: [
             { apelido: 'Josilene' },
             { apelido: 'eduarda' },
             { apelido: 'Josefina' }
         ],
         id: 0
     }*/


    alterarImage = () => {
        if (this.state.index >= this.state.descricao.length - 1) {
            this.setState({ index: 0 });
            return null;
        }
        this.setState({ index: this.state.index + 1 })

    }



    alterarNome() {
        return this.state.descricao.map((descricao => <Card
            titulo={descricao.nome} descricao={descricao.nome}
            key={descricao.id} />));
    }

    render() {
        

        return (
            <div className="botoes" >


                <div className="atributos">
                    < Card header={<CardTitle image={this.state.descricao[this.state.index].imagem} />}
                        title={this.alteraImage}
                        reveal={<p> sou uma pessoa legal, gosto de comer e quero que o Eduardo Mendes
                        dê uma pizza para o Ângelo no dia 16 de outubro. </p>}>
                    </ Card >

                </div>
                <div>
                    <Row>
                        <Col s={5} className='grid-example'></Col>
                        <Button
                            className="botoes"
                            onClick={this.alterarImage}
                            waves='light'>Like<Icon>add</Icon></Button>

                        <Button waves='light'
                            className="botoes"
                            onClick={this.alterarImage}>Deslike</Button>
                    </Row>
                </div>
            </div>


        );

    }

}


export default Centro;