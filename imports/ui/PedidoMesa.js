import React, { Component } from 'react';



export default class PedidoMesa extends Component {
  render() {
    return (
      <li className="list-group-item">
        {this.props.pedido.nomePedido}
      </li>
    );
  }
}
