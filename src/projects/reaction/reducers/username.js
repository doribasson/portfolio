import { SET_USERNAME } from '../actions/type';

const DEFAULT_USERNAME = 'anonymous';

const usernameReducer = (state = DEFAULT_USERNAME, action) => {
    switch(action.type) {
        case SET_USERNAME:
            return action.username;
            default:
                return state;
    }
}

export default usernameReducer;