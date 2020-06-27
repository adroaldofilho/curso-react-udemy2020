import React, { Component } from 'react';
import ProdutoService from '../../app/produtoService';
import { withRouter } from 'react-router-dom';
import Card from '../../components/card';
import ProdutosTable from './produtosTable';

class ConsultaProdutos extends Component {

    constructor() {
        super();
        this.service = new ProdutoService();
    }

    state = {
        produtos: [],
    }

    preparaEditar = (sku) => {
        console.log('sku para editar: ', sku);
        this.props.history.push(`/cadastro-produto/${sku}`);
    }

    excluir = (sku) => {
        const produtos = this.service.excluir(sku);
        this.setState({ produtos });
    }

    componentDidMount() {
        const produtos = this.service.listarProdutos();
        this.setState({ produtos });
    }

    render() {
        return (

            <Card header="Consulta Produtos" >
                <ProdutosTable
                    produtos={this.state.produtos}
                    editarAction={this.preparaEditar}
                    excluirAction={this.excluir} />


            </Card>
        );
    }
}

export default withRouter(ConsultaProdutos);