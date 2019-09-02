import { REACTION_OBJECTS } from '../actions/type';

const REACTION_TYPES = REACTION_OBJECTS.map(   // build an array of all the reaction types by mapping over the reaction object and returning each one of their fields
    REACTION_OBJECT => REACTION_OBJECT.type //now we have an array of all the reaction types from the type fields of each reaction object
)

const DEFAULT_REACTIONS = {};

const reactionsReducer = (state = DEFAULT_REACTIONS, action) => {
    if (REACTION_TYPES.includes(action.type)) {
        const { messageId } = action.item;
        const messageReactions = state[messageId];
        if (messageReactions) {
            return { ...state, [messageId]: [...messageReactions, action.item] }
        }
        return { ...state, [messageId]: [action.item] };
    }

    return state;

}

export default reactionsReducer;