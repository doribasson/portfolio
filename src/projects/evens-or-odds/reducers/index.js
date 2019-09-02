import { combineReducers } from 'redux';
import SettingsReducer from './settings';
import deckReducer from './deck';
import gameStateReducer from './gameState';

export default combineReducers({
    settings: SettingsReducer,
    deck: deckReducer,
    gameState: gameStateReducer
});
