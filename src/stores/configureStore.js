import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import cartItem from '../reducers/cartItem';

var logger = createLogger({
  collapsed: true
});

const store = createStore(
  cartItem,
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
