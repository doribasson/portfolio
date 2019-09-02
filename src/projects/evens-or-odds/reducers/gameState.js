import { SET_GUESS, SET_GAME_STARTED, DECK_DRAW } from '../actions/types'; //1

const DEFAULT_GAME_STATE = { guess: '', correctGuesses: 0 };  //2

const EVENS = ['2', '4', '6', '8', '10'];             //4
const ODDS = ['ACE', '3', '5', '7', '9'];        //5


const gameStateReducer = (state = DEFAULT_GAME_STATE, action) => { //3
    switch (action.type) {
        case SET_GUESS:
            return { ...state, guess: action.guess };
        case SET_GAME_STARTED:
            return DEFAULT_GAME_STATE;
        case DECK_DRAW.FETCH_SUCCESS:            //adding
            const { value } = action.cards[0];
            const { guess, correctGuesses } = state; //the same like... const guess = state.guess; //const { guess, correctGuesses } = state; 
            console.log('value', value);
            console.log('guess', guess);
            if (
                (guess === 'even' && EVENS.includes(value)) ||  //also
                (guess === 'odd' && ODDS.includes(value))
            ) {
                return { ...state, correctGuesses: correctGuesses + 1 };
            }
            return state;
        default:
            return state;

    }

};

export default gameStateReducer;