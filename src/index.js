import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';

import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
//import { browserHistory } from 'react-router';
import {WrapperApp} from './App';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)


ReactDOM.render(
    <Provider store={store}>
        <WrapperApp />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
