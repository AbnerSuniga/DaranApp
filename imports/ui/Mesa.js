import React, { Component } from 'react';

import { Mesas } from '../api/mesas.js';
import PedidoMesa from './PedidoMesa.js';


export default class Mesa extends Component {

  checkEntregue() {
    if(!this.props.mesa.entregue) {
      return <span className="label label-warning">Não foi entregue</span>
    } else {
      return <span className="label label-success">Pedido entregue</span>
    }
  }

  renderPedidoMesa() {
    return this.props.mesa.pedidosDaMesa.map(function(pedido) {
      return <PedidoMesa key={pedido._id} pedido={pedido} />
    });
  }

  renderTotal() {
    return this.props.mesa.pedidosDaMesa.map(function(pedido) {
      return pedido.preço;
    }).reduce(function(ant, prox) {
      return ant + prox;
    },0);
  }

  render() {
    return (
      <li className="list-group-item">
        <em>
        Realizado às&nbsp;
        {this.props.mesa.createdAt.getHours()}:
        {this.props.mesa.createdAt.getMinutes()}
        </em>
        <br/>
        {this.checkEntregue()}
        <ul className="list-group">
          {this.renderPedidoMesa()}
        </ul>
        <b className="pull-right">Total: R$ {this.renderTotal()}</b>
        <div className="clearfix"></div>
      </li>
    );
  }
}
