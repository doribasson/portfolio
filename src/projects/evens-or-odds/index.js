import React from 'react';
import { createStore, applyMiddleware } from 'redux'; //applyMiddleware is function that allows us to apply a middlewware
import App from './components/App';
import { Provider } from 'react-redux'; //1 provder component allows the entire react app to connect to the redux store
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import './index.css';

//store - for thrr application a reducer to describe how this store should update  an action objects that triggered the producers tp update the store
//action creator - to generate these action objects in a mor functional and reasonable way.
//reducer - alwayes returns an entirely new object


const store = createStore(rootReducer, applyMiddleware(thunk)); //1 //applyMiddleware an action gets dispatched and before the action reaches the reducer

const EvenOrOdds = () => {
    return (

        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default EvenOrOdds;


