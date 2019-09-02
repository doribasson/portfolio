import { NEW_MESSAGE } from '../actions/type';

const DEFAULT_MESSAGES = { items: [] }; // contain array of item that consist each item that is dispatched as an action object and received from the pubsub system

const messagesReducer = (state = DEFAULT_MESSAGES, action) => {
    switch (action.type) {
        case NEW_MESSAGE:
            return { ...state, items: [...state.items, action.item] };  //[] to make new array of previous items..  action.item is the new item.. we must new array because that we cant do push
        default:
            return state;
    }
}

export default messagesReducer;