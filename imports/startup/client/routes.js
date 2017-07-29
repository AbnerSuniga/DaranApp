import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
// route components
import App from '../../ui/App.js';
import NovoPedido from '../../ui/NovoPedido.js';
import VerMesas from '../../ui/VerMesas.js';
import FilaPedido from '../../ui/FilaPedido.js';

const browserHistory = createBrowserHistory();
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/novopedido" component={NovoPedido}/>
      <Route exact path="/vermesas" component={VerMesas}/>
      <Route exact path="/filapedido" component={FilaPedido}/>
    </div>
  </Router>
);
