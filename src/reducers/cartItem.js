import uuid from 'uuid';

var defaultState = {
  cartItems: [
    {
      id: uuid(),
      name: 'Item 1'
    },
    {
      id: uuid(),
      name: 'Item 2'
     },
    {
      id: uuid(),
      name: 'Item 3'
    }
  ]
};

function cartItem(state = defaultState, action) {
  switch (action.type) {
    case 'INSERT_ITEM':
      return {
        cartItems: [...state.cartItems, action.data.newItem]
      };
    case 'DELETE_ITEM':
      return {
        cartItems: state.cartItems.filter(item => item.id !== action.data.id)
      };
    default:
      return state;
  }
}

export default cartItem;
