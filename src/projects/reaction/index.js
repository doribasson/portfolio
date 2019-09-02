import React from 'react';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import PubSub, { PubSubContext } from './pubsub';
import { newMessage } from './actions/messages';
import './index.css';



const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);

console.log('store.getState()', store.getState());
store.subscribe(() => console.log('store.getState()', store.getState())); ////subscribe received a plain action object and dispatch that to the local store

const pubsub = new PubSub();

pubsub.addListener({
    message: messageObject => {
        const { message, channel } = messageObject;
        console.log('received message:', message, 'channel:', channel);

        store.dispatch(message);
    }
});

setTimeout(() => {
    //    pubsub.publish({ type: 'foo', value: 'bar'});
    pubsub.publish(newMessage({ text: 'Hello world', username: 'Bob' }));
}, 1000);




//this is like the buttom here we can use inline  and no name because we use just 1 time
export default () => (
    <Provider store={store}>
        <PubSubContext.Provider value={{ pubsub }}>
            <App />
        </PubSubContext.Provider>
    </Provider>
);



// //this is like the buttom and no name because we use just 1 time
// export default () => {
//     return (
//         <Provider store={store}>
//             <PubSubContext.Provider value={{ pubsub }}>
//                 <App />
//             </PubSubContext.Provider>
//         </Provider>
//     )
// };




// const Reaction = () => {
//     return (
//         <Provider store={store}>
//             <PubSubContext.Provider value={{ pubsub }}>
//                 <App />
//             </PubSubContext.Provider>
//         </Provider>
//     )
// };

// export default Reaction;