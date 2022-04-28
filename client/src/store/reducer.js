import { ADD_ITEM } from "./actions";

const initialState = {
  cartItems: []
}

const reducer = (state = initialState, action) => {
  const { type , payload} = action;
  const { cartItems } = state;
  switch (type) {
    case ADD_ITEM:
      return {
        cartItems: cartItems.push(payload),
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;