import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Mesas } from '../api/mesas.js';
import Mesa from './Mesa.js'

class VerMesas extends Component {
  constructor(props) {
    super(props);
    this.state = {mesa: '1', total: 0};

    this.handleChangeMesa = this.handleChangeMesa.bind(this);;
  }

  handleChangeMesa(event) {
    this.setState({mesa: event.target.value});
  }

  renderMesas () {
    numero = this.state.mesa;

    this.state.total = this.props.mesas.map(function(mesa) {
      if(mesa.numeroMesa == numero) {
        return mesa.pedidosDaMesa.map(function(pedido) {
          return pedido.preço;
        }).reduce(function(ant, prox) {
          return ant + prox;
        },0);
      } else {
        return 0;
      }
    }).reduce(function(ant, prox) {
      return ant + prox;
    },0);

    return this.props.mesas.map(function(mesa) {
      if(mesa.numeroMesa == numero) {
        return <Mesa key={mesa._id} mesa={mesa} />
      }
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Ver Mesas</h1>
        <label>Mesa</label>
        <select className="styled-select form-control" value={this.state.mesa} onChange={this.handleChangeMesa}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <ul className="list-group">
          {this.renderMesas()}
        </ul>
        <div className="navbar navbar-fixed-bottom">
          <a className="btn btn-primary btn-block" href="http://localhost:3000/" role="button">Voltar</a>
        </div>
        <h3 className="pull-right">Total: R$ {this.state.total}</h3>
        <div className="clearfix"></div>
    </div>
    )
  }
}

export default createContainer(() => {
  return {
    mesas: Mesas.find({}, { sort: { numeroMesa: -1 } }).fetch(),
  };
}, VerMesas);
