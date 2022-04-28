export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'ADD_ITEM';

export const addCartItem = (id) => ({ type: ADD_ITEM, payload: id });
export const removeCartItem = (id) => ({ type: REMOVE_ITEM, payload: id });