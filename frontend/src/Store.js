import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsListReducer,productsDetailReducer } from './reducers/productReducer';

const reducer = combineReducers({
  productsList: productsListReducer,
  productDetails:productsDetailReducer
});

const initialState = {};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
