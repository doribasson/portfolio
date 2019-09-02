// import { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED } from '../actions/types';
import { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED } from '../actions/types'; //1//


const DEFAULT_SETTINGS = {        //global value for the project
    gameStarted: false,        //represent whether or not we have started the overall evens or odds game
    instructionsExpanded: false  ///to find how to play the game
};

// const rootReducer = (state, action) => {  //2
const settingsReducer = (state = DEFAULT_SETTINGS, action) => {  //2,8 //state = DEFAULT_SETTINGSto to make the state defined

    switch (action.type) {   //19
        case SET_GAME_STARTED:
            return {
                ...state, //to take it from past //equal to  state.instructionsExpanded
                gameStarted: action.gameStarted
            };
        case SET_INSTRUCTIONS_EXPANDED:
            return {
                ...state, //to take it from past //equal to state.gameStarted
                instructionsExpanded: action.instructionsExpanded
            };
        //break; not need here because a return statament already escape the overall functionality //break stop and quit from it
        default:
            return state;
    }
};

export default settingsReducer;