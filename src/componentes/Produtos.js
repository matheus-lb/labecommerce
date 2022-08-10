import React from "react";
import styled from "styled-components";
import Card from "./card"

const PaginaCentral = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;

    .head{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .ordenacao{
        display: flex;
        align-items: center;
    }

    .produtos{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
    }
`

export const produtos = [
    {
        id: Date.now(),
        name: "Jogo Astronomia",
        value: 120.0,
        imageUrl: "https://newparquedpedro.vteximg.com.br/arquivos/ids/309238-1000-1000/image-a90c001fd67e4f24b86419d32c6ce0e7.jpg?v=637685281446330000",
        qnt: 0
    },
    {
        id: Date.now(),
        name: "Lego ISS",
        value: 500.0,
        imageUrl: "https://rihappy.vtexassets.com/arquivos/ids/809744-1200-auto?v=637375093769970000&width=1200&height=auto&aspect=true",
        qnt: 0
    },
    {
        id: Date.now(),
        name: "Lego ônibus espacial",
        value: 240.0,
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_756627-MLB47991027938_102021-O.webp",
        qnt: 0
    },
    {
        id: Date.now(),
        name: "Lego Rover Explorer",
        value: 360.0,
        imageUrl: "https://www.virtualmegashop.com.br/media/catalog/product/cache/7a9516001de72579d7e5834631c68281/f/4/f4eea9b1-23f0-47e4-9e25-5e0bd2281867.jpg",
        qnt: 0
    },
    {
        id: Date.now(),
        name: "Planetarium",
        value: 200.0,
        imageUrl: "https://images-americanas.b2w.io/produtos/4611169446/imagens/criancas-planeta-modelo-projetor-luminoso-brinquedos-brinquedos-multicolor-opcional-treinamento-cereal-portatil-brinquedos-educativos/4611169446_1_xlarge.jpg",
        qnt: 0
    },
    {
        id: Date.now(),
        name: "Telescópio",
        value: 800.0,
        imageUrl: "https://images-americanas.b2w.io/produtos/3048038155/imagens/telescopio-astronomico-40x-com-tripe-refrator-monocular-scope-toy-para-criancas/3048038155_6_xlarge.jpg",
        qnt: 0
    }
]

export class Produtos extends React.Component {
    
    state = {
        ordenar: "Nenhum",
        produtosCarrinho:[],
        
    }

    onChangeOrdenar = (event) => {
        this.setState({ ordenar: event.target.value })
    }

    recuperaCarrinho = (novo) =>{
        this.props.recupera(novo)
    }
  
    render(){

        if (this.state.ordenar === "Crescente"){

            this.props.produtos.sort((a,b)=>{
                if (a.value > b.value){
                    return 1
                }
                if (b.value > a.value){
                    return -1
                }
                return 0
            })
        }

        if (this.state.ordenar === "Decrescente"){

            this.props.produtos.sort((a,b)=>{
                if (a.value > b.value){
                    return -1
                }
                if (b.value > a.value){
                    return 1
                }
                return 0
            })
        }
        
        const listCards = this.props.produtos.map((elemento) => {

            return(
                <Card 
                    nomeDoProduto = {elemento.name}
                    linkDaImagem = {elemento.imageUrl}
                    valorDoProduto = {elemento.value}
                    idProduto = {elemento.id}
                    recupera = {this.recuperaCarrinho}
                />
            )
        })

        return (
            <PaginaCentral>
                <div className="head">
                    <p>Quantidade de Produtos: {this.props.produtos.length}</p>
                    <h1>Space Toys</h1>
                    <div className="ordenacao">
                        <p>Ordenação: </p>
                        <select value={this.state.ordenar} onChange={this.onChangeOrdenar}>
                            <option>Nenhum</option>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </div>
                </div>

                <div className="produtos" >
                    {listCards}
                </div>
            </PaginaCentral>
        )
    }
}