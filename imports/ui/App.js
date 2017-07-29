import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header>
          <h1>Daran Serveur</h1>
        </header>
        <a className="btn-lg btn-block btn btn-default" href="http://localhost:3000/novopedido" role="button">Novo Pedido</a>
        <a className="btn-lg btn-block btn btn-default" href="http://localhost:3000/vermesas" role="button">Ver Mesas</a>
        <a className="btn-lg btn-block btn btn-default" href="http://localhost:3000/filapedido" role="button">Fila de Pedidos</a>
      </div>
    )
  }
}
