/* import React from 'react';
import ReactDOM  from 'react-dom';
import {Provider} from 'react-redux';
import { compose} from 'redux';

import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; 
import reducers from './reducers';
import App from './App.jsx';
const store = configureStore({
    reducer:reducers,
    middleware:[thunk]
});

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')); */

    import React from 'react'
    import ReactDOM from 'react-dom/client'
    import App from './App.jsx'
    import './index.css'
    
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )