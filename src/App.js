import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ShoppingCart from './components/ShoppingCart';
import InsertItem from './components/InsertItem';
import { connect } from 'react-redux';
import * as actions from './actions/actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  deleteItem = id => {
    this.props.dispatch(actions.deleteCartItem(id));
  };

  addItem = newItem => {
    this.props.dispatch(actions.insertCartItem(newItem));
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <InsertItem onAddItem={this.addItem} />
        <ShoppingCart
          onDeleteItem={this.deleteItem}
          cartItems={this.props.cartItems}
        />
      </div>
    );
  }
}

export default connect((state, props) => {
  return {
    cartItems: state.cartItems
  };
})(App);
