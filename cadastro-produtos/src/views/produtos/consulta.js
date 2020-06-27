import React, { Component } from 'react';
import ProdutoService from '../../app/produtoService';
import { withRouter } from 'react-router-dom';

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
            <div className="card" >
                <div className="card-header">
                    Consulta Produtos
                </div>
                <div className="card-body table-responsive">

                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">SKU</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Fornecedor</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.produtos.map((produto, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                {produto.nome}
                                            </td>
                                            <td>
                                                {produto.sku}
                                            </td>
                                            <td>
                                                {produto.preco}
                                            </td>
                                            <td>
                                                {produto.fornecedor}
                                            </td>
                                            <td>
                                                <button onClick={() => this.preparaEditar(produto.sku)} className="btn btn-primary">Editar</button>
                                                <button onClick={() => this.excluir(produto.sku)} className="btn btn-danger">Remover</button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withRouter(ConsultaProdutos);