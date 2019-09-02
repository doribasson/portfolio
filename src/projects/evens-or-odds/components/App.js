import React, { Component } from 'react';
import { connect } from 'react-redux';  //3 //connect function it actually returns a functions itself //the result of that function is acomponent connector function
import { startGame, cancelGame } from '../actions/settings'; //7//10cancelGame
import { fetchNewDeck } from '../actions/deck';
import fetchStates from '../reducers/fetchStates';
import Instructions from './Instructions'; //16
import DrawCard from './DrawCard';
import Card from './Card';
import Guess from './Guess';
import GameState from './GameState';


class App extends Component {

  startGame = () => { //8
    this.props.startGame();
    this.props.fetchNewDeck();

  }
  // cancelGame = () => { //8
  //   this.props.dispatch(cancelGame())
  // }

  render() {
    console.log('this', this); //6

    if (this.props.fetchState == fetchStates.error) {
      return (
        <div>
          <p>pls try reloading the app.. an error occurred.</p>
          <p>{this.props.message}</p>
        </div>
      )
    }

    return (
      // <div style={{background: '#839dc5d0', color: 'white'}}> {/* //7 */}
      <div id='grad1'> {/* //7 */}
        <h2>♠️♤♢ Evens or Odds ♠️♤♢</h2>
        {
          this.props.gameStarted ? ( //default if false///take it from settings at action  if gameStarted true or false
            <div>
              <h3>The game is on!</h3>
              <GameState/>
              <Guess />
              <br />
              <DrawCard />
              <hr />
              <Card />
              <hr />
              {/* <button onClick={this.cancelGame}>Cancel Game</button> //11 cancelGame */}
              <button className="button1" onClick={this.props.cancelGame}>Cancel Game</button> {/* //14 cancelGame */}
            </div>
          ) : (
              <div>
                <h3>A new game awaits</h3>
                <br />
                {/* <button onClick={this.startGame}>Start Game</button> {/* //9 */}
                <button className="button1" onClick={this.startGame}>Start Game</button> {/* //15 */}
                <hr />
                <Instructions />
              </div>
            )
        }
      </div>
    );
  }
}

const mapStateToProps = state => {   //this is like...  function mapStateToProps(state) {
  // const { gameStarted } = state.settings;
  // const { fetchState, message } = state.deck;
  const {
    settings: { gameStarted },
    deck: { fetchState, message }
  } = state;

  return { gameStarted, fetchState, message }; //8

}


/////////this is the same like the top
// function mapStateToProps(state) {
//   // const { gameStarted } = state.settings;
//   // const { fetchState, message } = state.deck;
//   const {
//     settings: { gameStarted },
//     deck: { fetchState, message }
//   } = state;

//   return { gameStarted, fetchState, message }; //8

// }









// const componentConnector = connect(); //4//this componentConnector its own function but we can use this now connect our app components

// const mapDispatchToProps = dispatch => {
//   return {
//     startGame: () => dispatch(startGame()), //12  startGame gonna be set to a callback which does a dispatch of the startgame action.. fires off a dispatch or the result calling
//     cancelGame: () => dispatch(cancelGame()), //13 cancelGame going to a callback which fires off a dispatch or the result calling
//     //fetchNewDeck: () => dispatch(fetchNewDeck()) //deckJson is parameter
//     fetchNewDeck: () => fetchNewDeck(dispatch)
//   };
// }

// const componentConnector = connect(mapStateToProps);
// const componentConnector = connect(mapStateToProps, mapDispatchToProps); //14 add seconed parameter mapDispatchToProps   

const componentConnector = connect(
  mapStateToProps,
  { startGame, cancelGame, fetchNewDeck }
);

export default componentConnector(App); //5//
