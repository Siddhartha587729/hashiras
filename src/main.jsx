import React from 'react';
import ReactDOM  from 'react-dom';
import {Provider} from 'react-redux';
import { compose} from 'redux';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; 
import reducers from './reducers';
import App from './App.jsx';

const store = configureStore({
    reducer:reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root'));