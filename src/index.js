import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'

// import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
  );

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(fbConfig, {attachAuthIsReady: true}), // redux binding for firebase
    reduxFirestore(fbConfig), // redux bindings for firestore
    enhancer
  )
);

//const store = createStore(rootReducer, enhancer);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
      <Provider store={store}>
          <App />
      </Provider>, document.getElementById('root'));
  registerServiceWorker();
});
