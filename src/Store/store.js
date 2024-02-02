// import {legacy_createStore} from 'redux'
// import counterReducer from '../Reducers/counterReducer'

// const store = legacy_createStore(counterReducer);
// export default store
// ---------------------------------------------------------------------------------------------------------
import { legacy_createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import reducer from '../Reducers/reducer';
const store = legacy_createStore(reducer, applyMiddleware(thunk));
export default store;