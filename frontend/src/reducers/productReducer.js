import {
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../contants/productConstants";

export const productsListReducer = (state = { products: [] }, actions) => {
  switch (actions.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: [actions.payload] };
    case PRODUCT_LIST_FAILURE:
      return { loading: false, error: actions.payload };
    default:
        return state
    }

};
