import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f0f3f7;
    height: 40vh;
    border: 1px solid black;
    border-radius: 16px;
    margin: 0.5em 0.5em;
    
    img{
        width: 100%;
        height: 60%;
        border-radius: 16px 16px 0 0;
    }

    h4, p {
        margin: 0 1em;
    }

    button {
        align-self: center;
        margin-bottom: 1em;
        border-radius: 5px;
    } 
`

export default class Card extends React.Component{

    onClickCarrinho = () =>{
        let novo ={
          nome:this.props.nomeDoProduto,
          valor:this.props.valorDoProduto,
          id: Date.now()
        }
        this.props.recupera(novo)
    }
  
    render(){

        return (
            <Item>
                <img src={this.props.linkDaImagem} alt="Produto" />
                <h4>{this.props.nomeDoProduto}</h4>
                <p>R$ {this.props.valorDoProduto}</p>

                <button 
                onClick={this.onClickCarrinho}
                value={this.props.idProduto}
                >
                Adicionar ao Carrinho
                </button>
            </Item>  
        )
        
    }
}

