import { createStore } from 'redux';
// import { StoreProvider } from './GlobalState';
import reducers from "./reducers";

const Store = createStore(reducers);

export default Store;

