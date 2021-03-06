import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from '../src/pages/home/index';

import CadastroVideo from '../src/pages/cadastro/video';
import CadastroCategoria from '../src/pages/cadastro/categoria';
import PageNotFound from '../src/pages/pageNotFound';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={PageNotFound}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

