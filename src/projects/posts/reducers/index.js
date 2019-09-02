//this index.js for bring it to our store

import { combineReducers } from 'redux';
import postReducer from './postReducer';

export default combineReducers({
   posts: postReducer  //call my postReducer posts
})