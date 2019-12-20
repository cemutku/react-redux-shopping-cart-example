import { ActionTypes as actionTypes } from '../constants';

export function insertCartItem(newItem) {
  return {
    type: actionTypes.INSERT_ITEM,
    data: { newItem: newItem }
  };
}

export function deleteCartItem(id) {
  return {
    type: actionTypes.DELETE_ITEM,
    data: { id: id }
  };
}
