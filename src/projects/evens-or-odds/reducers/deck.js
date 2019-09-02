// import { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED } from '../actions/types';
import { DECK, DECK_DRAW } from '../actions/types'; //1//
import fetchStates from './fetchStates';

const DEFAULT_DECK = { deck_id: '', remaining: 0, fetchState: '', message: '', cards: [] };

const deckReducer = (state = DEFAULT_DECK, action) => {  //2,8 //state = DEFAULT_SETTINGSto to make the state defined

    let remaining, deck_id, cards;

    switch (action.type) {   //19
        case DECK.FETCH_SUCCESS: ////2 we add new case for fetch
            ({ remaining, deck_id } = action); //// like remaining = action.remaining; remaining = action.remaining;
            return { ...state, remaining, deck_id, fetchState: fetchStates.success };
        case DECK.FETCH_ERROR:
            return { ...state, message: action.message, fetchState: fetchStates.error };
        case DECK_DRAW.FETCH_SUCCESS:
            ({ cards, remaining } = action);
            return { ...state, cards, remaining, fetchState: fetchStates.success };
        case DECK_DRAW.FETCH_ERROR:
            return { ...state, message: action.message, fetchState: fetchStates.error };
        //break; not need here because a return statament already escape the overall functionality //break stop and quit from it
        default:
            return state;
    }
};

export default deckReducer;
