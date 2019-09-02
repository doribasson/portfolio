import { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED } from './types';


//export for each of these can be imported within other files
export const startGame = () => { //8
    return { type: SET_GAME_STARTED, gameStarted: true }; // action creator
};

export const cancelGame = () => { //10
    return { type: SET_GAME_STARTED, gameStarted: false }
}

export const expandInstructions = () => {  //12
    return { type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: true }
}

export const collapseInstructions = () => {  //13
    return { type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: false }
}