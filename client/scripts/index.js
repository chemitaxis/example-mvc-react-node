import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import moment from 'moment';
import _ from 'lodash';
// import Router from 'react-router/lib/Router'; // import separately to reduce bundle size
// import browserHistory from 'react-router/lib/browserHistory'; // import separately to reduce bundle size
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import promise from 'redux-promise';

// import reducers from './reducers';
// import routes from './routes';

const appRootEl = document.getElementsByClassName('app')[0];
console.log(_.partition([1, 2, 3, 4], n => n % 2));
console.log($('.app').length);
var a = moment('2016-01-01'); 
console.log(a);

if (appRootEl) {
  // const store = applyMiddleware(promise)(createStore)(reducers);
  // const router = <Router history={browserHistory} routes={routes} />;
  // if (process.env.NODE_ENV == 'production') {
  //   ReactDOM.render(<Provider store={store}>{router}</Provider>, appRootEl);
  // } else {
  //   const AppContainer = require('react-hot-loader').AppContainer;
  //   const render = () => {
  //     ReactDOM.render(<Provider store={store}><AppContainer>{router}</AppContainer></Provider>, appRootEl);
  //   };
  //   if (module.hot) {
  //     module.hot.accept('./reducers', () => { store.replaceReducer(reducers); });
  //     module.hot.accept('./routes', render);
  //   }
  //   render();
  // }

  ReactDOM.render(
  <h1>Hello, world!</h1>,
  appRootEl
);
}
