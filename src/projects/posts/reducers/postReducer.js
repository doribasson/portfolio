import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [], //represnt the post that come in from our action and our action will is where are going to put the detch request
    item: {} //represent the single post that we  add when we get the the response back its going go in there
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload //take the post from action.payload we can rename from payload to post the same just name
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload //take the post from action.payload we can rename from payload to post the same just name
            }
        default:
            return state;
    }
}