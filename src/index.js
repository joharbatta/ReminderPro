import React from 'react';
import REACTDOM from 'react-dom';
import App from "./components/App"
import "./App.css";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from "./reducers";
const store=createStore(reducer);
REACTDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
    );