import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../constants/cartContant.js";

export const cartReducer = (
  state = { cartItems: [], shippingInfo: {} },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;

      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product
      );
      console.log(isItemExist);
      if (isItemExist) {
        console.log('isItem Exist is True');

        // var get=JSON.parse({...action?.payload})

        localStorage.setItem("cart", JSON.stringify({ ...action?.payload }));
      
        
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case REMOVE_CART_ITEM:

    const basket=localStorage.getItem('cart');

    basket.map((item) => {
      
    }
    )
    // getState().cart.cartItems.splice(index, 1);
    //   localStorage.setItem(
    //     "testObject",
    //     JSON.stringify(getState().cart.cartItems)
    //   );

      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      };

    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };

    default:
      return state;
  }
};
