import React from 'react';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './reducers'
import store from './components/store';




const Posts = () => {
    return (
        <Provider store={store}>
        <App />
        </Provider>
    )
    
}

export default Posts
    






