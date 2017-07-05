import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route} from 'react-router-dom';

//https://reacttraining.cn/web/api/StaticRouter/context-object

import Todos from './class/Todos.js';

const App = function (props){
  let {location: {pathname}} = props;
  return <Todos pathname={pathname}/>
}

ReactDOM.render(
  <Router>
    <Route path="/" component={App}/>
  </Router>,
  document.getElementById('root')
);

if(module.hot){
  module.hot.accept();
}

