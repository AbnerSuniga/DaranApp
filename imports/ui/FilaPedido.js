import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Mesas } from '../api/mesas.js';
import MesaFila from './MesaFila.js'
import PedidoMesa from './PedidoMesa.js';

class FilaPedido extends Component {

  renderFila() {
    return this.props.mesas.map(function(mesa) {
      if(!mesa.entregue && mesa.pronto) {
        return <MesaFila key={mesa._id} mesa={mesa} />
      }
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Fila de Pedidos</h1>
        <ul className="list-group">
          {this.renderFila()}
        </ul>
        <div className="navbar navbar-fixed-bottom">
          <a className="btn btn-primary btn-block" href="http://localhost:3000/" role="button">Voltar</a>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    mesas: Mesas.find({}, { sort: { numeroMesa: -1 } }).fetch(),
  };
}, FilaPedido);
