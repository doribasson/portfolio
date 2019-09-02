import React from 'react';
import { connect } from 'react-redux';

const correctGuessesRecordKey = 'CORRECT_GUESSES_RECORD_foo123';

const checkRecord = correctGuesses => {
    const record = Number(localStorage.getItem(correctGuessesRecordKey));

    if (correctGuesses > record) {
        localStorage.setItem(correctGuessesRecordKey, correctGuesses);
        return { record: correctGuesses, isNewRecord: true }
    }

    return { record, isNewRecord: false };
};


const GameState = ({ remaining, correctGuesses }) => {
    const guessText = correctGuesses === 1 ? 'guess' : 'gusses';

    //const recordObject = checkRecord(correctGuesses);
    const { record, isNewRecord } = checkRecord(correctGuesses);
    const recordLabel = isNewRecord ? '!!!!!New record!!!!!!' : 'Record';


    // const deleteRecored = () => {
    //     localStorage.clear(record);
    // };

    return (
        <div>
            <h3>{recordLabel}: " " {record}</h3>
            {/* <button className="button1" onClick={deleteRecored}
                style={{ border: '2px solid #000000' }}
            >clear Record</button> */}
            <p>{remaining} cards remaining</p>
            {/* <br/><br/> */}
            <p>{correctGuesses} correct {guessText}</p>
            <br />
        </div>
    );

}

const mapStateToProps = state => {   
    return {
        remaining: state.deck.remaining,
        correctGuesses: state.gameState.correctGuesses
    }
}


export default connect(mapStateToProps)(GameState);


////this is shorter for connect and mapStateToProps
// export default connect(   //its just mapStateToProps without mapDisptchToProps
//     ({
//         deck: { remaining },                   //go to deck and gameState from reducer and then take the state of them
//         gameState: { correctGuesses },
//     }) => ({ remaining, correctGuesses })
// )(GameState);






