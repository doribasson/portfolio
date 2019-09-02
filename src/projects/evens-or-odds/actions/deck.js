import { DECK, DECK_DRAW } from './types'; //1

const API_ADDRESS = 'https://deckofcardsapi.com/api';

export const fetchDeckSuccess = deckJson => { //2//Jason parameter is goming to represent the resulting jason from successful fetch to the api 
    const { remaining, deck_id } = deckJson;

    return { type: DECK.FETCH_SUCCESS, remaining, deck_id };
}

export const fetchDeckError = error => { //2//Jason parameter is goming to represent the resulting jason from successful fetch to the api 
    return { type: DECK.FETCH_ERROR, message: error.message };
}


export const fetchNewDeck = () => dispatch => {
    // https://deckofcardsapi.com/api/deck/new/shuffle/ will not work becuase not have same origin policy so 
    //1.we can allow-control-allow-origin-google chrome but its just for locali
    //2. we can use service on Heroku - cors anywhere herokuapp but in large data is slowly https://cors-anywhere.herokuapp.com/link..
    //3. do own homegrow service for  api 
    // fetch('https://deckofcardsapi.com/api/deck/new/shuffle')
    return fetch(`${API_ADDRESS}/deck/new/shuffle/`)  //option 2
        // .then(response => response.json())
        .then(response => {
            if (response.status !== 200) {
                throw new Error('Unsuccessful request to deckofcardsapi.com')
            }
            return response.json();
        })
        .then(json => dispatch(fetchDeckSuccess(json)))
        .catch(error => dispatch(fetchDeckError(error)));
}

export const fetchDrawCard = deck_id => dispatch => { //get the deck_id from click button iin component Drawcard 
    return fetch(`${API_ADDRESS}/deck/${deck_id}/draw/`)
        .then(response => {
            if (response.status !== 200) {
                throw new Error('Unsuccessful request to deckofcardsapi.com')
            }

            return response.json();
        })
        .then(json => {
            dispatch({
                type: DECK_DRAW.FETCH_SUCCESS,
                cards: json.cards,
                remaining: json.remaining
            });
        })
        .catch(error => dispatch({ type: DECK_DRAW.FETCH_ERROR, message: error.message }));
}