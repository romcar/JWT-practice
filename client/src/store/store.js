// These functions apply any middleware to the store
// and create the store.
import { applyMiddleware, createStore } from 'redux';
// The root is where all reducers will be merged
import root from './reducers/root';
// Redux middleware that allows for actions to return functions
import thunk from 'redux-thunk';


const middleware = applyMiddleware(thunk);

// Here we create the store and pass in all reducers
// the middleware and configuration for
// redux devtools.
export default function configureStore() {
  return creaateStore(
    root,
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};