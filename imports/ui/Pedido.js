import React, { Component } from 'react';

import { Pedidos } from '../api/pedidos.js';


export default class Pedido extends Component {

  deleteThisPedido() {
    Pedidos.remove(this.props.pedido._id);
  }

  render() {

    return (
      <li className="list-group-item">
        <b>{this.props.pedido.nomePedido}</b>
        <button className="btn btn-default btn-margin delete" onClick={this.deleteThisPedido.bind(this)}>
          <span className="glyphicon glyphicon-remove"></span>
        </button>
        <br/>
        <em>R$ {this.props.pedido.preço}</em>
      </li>
    );
  }
}
