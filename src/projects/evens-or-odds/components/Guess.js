import React from 'react'; //1
import { connect } from 'react-redux'; //2
import { setGuessEven, setGuessOdd } from '../actions/guess';//3


const Guess = ({guess, setGuessEven, setGuessOdd}) => { //6 each one of these values from props object guess- parameter..setGuessEven - function  ..setGuessOdd - function
    return (
        <div>
            <h3>will it be even or odd?</h3>
            <div>
                <button className="button1"
                onClick={setGuessEven}
                style={guess ==='even' ? {border: '2px solid #43a047'} : null }
                >Even</button>
                {' '}
                <button className="button1"
                onClick={setGuessOdd}
                style={guess ==='odd' ? {border: '2px solid #000000'} : null }
                >Odd</button>
            </div>
        </div>
    )
}

export default connect(
    ({ gameState: { guess } }) => ({ guess }),// 4 //mapStateToprops parameter.. object that return { guess }
    { setGuessEven, setGuessOdd }   //5//dispatch function in action guess.. this is the mapDispatchProp
)(Guess);