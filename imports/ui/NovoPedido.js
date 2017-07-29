import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Pedidos } from '../api/pedidos.js';
import { Mesas } from '../api/mesas.js';

import Pedido from './Pedido.js'

class NovoPedido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Prato da Casa',
      mesa: '1',
      preço: {
        'Prato da Casa': 15,
        'Macarrão ao Molho': 20,
        'Porção de Frango': 20,
        'Costela Assada': 45
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeMesa = this.handleChangeMesa.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMesa = this.handleMesa.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleChangeMesa(event) {
    this.setState({mesa: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    nomePedido = this.state.value;
    preço = this.state.preço[nomePedido];
    console.log(preço);
    Pedidos.insert({
      nomePedido,
      preço,
      createdAt: new Date(), // current time
    });

  }

  deletePedidos() {
    this.props.pedidos.map((pedido) => {
      Pedidos.remove(pedido._id);
    });
  }

  handleMesa(event) {
    event.preventDefault();

    numeroMesa = this.state.mesa;
    pedidosDaMesa = this.props.pedidos;

    console.log(numeroMesa);
    console.log(pedidosDaMesa);

    entregue = false;
    pronto = false;
    Mesas.insert({
      numeroMesa,
      pedidosDaMesa,
      entregue,
      pronto,
      createdAt: new Date(),
    });

    this.deletePedidos();

    window.location = "http://localhost:3000/";
  }

  renderPedidos() {
    return this.props.pedidos.map((pedido) => (
      <Pedido key={pedido._id} pedido={pedido} />
    ));
  }

  render() {
    return (
      <div className="container-fluid">
        <header>
          <h1>Novo Pedido</h1>
        </header>
        <div className="form-group">
          <form onSubmit={this.handleSubmit}>
            <label>Opções</label>
            <select className="styled-select form-control" value={this.state.value} onChange={this.handleChange}>
              <option value="Prato da Casa">Prato da Casa</option>
              <option value="Macarrão ao Molho">Macarrão ao molho</option>
              <option value="Porção de Frango">Porção de frango</option>
              <option value="Costela Assada">Costela assada</option>
            </select>
            <label>Mesa</label>
            <select className="styled-select form-control" value={this.state.mesa} onChange={this.handleChangeMesa}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <input className="btn btn-primary btn-block" type="submit" value="Add" />
          </form>

          <ul className="list-group">
            {this.renderPedidos()}
          </ul>
        </div>
        <div className="navbar navbar-fixed-bottom">
          <button className="btn btn-success btn-block btn-lg" onClick={this.handleMesa}>Finalizar</button>
          <a className="btn btn-danger btn-block" href="http://localhost:3000/" role="button">Cancelar</a>
        </div>
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    pedidos: Pedidos.find({}).fetch(),
  };
}, NovoPedido);
