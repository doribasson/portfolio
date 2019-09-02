import React from 'react'; //1//react library from the react module.in this case no need component class
import { connect } from 'react-redux'; //2// this component will need to read data from the store also dispatch actions to the redux store
import { expandInstructions, collapseInstructions } from '../actions/settings'; //3//impprt the expand instructions and collapse instructions action creators from the action setting file located

const Instructions = props => { //4//actual component
    // const { instructionsExpanded } = props; //5//19
    const { instructionsExpanded, expandInstructions, collapseInstructions } = props; //5//19


    if (instructionsExpanded) { //6
        return (
            <div>
                <br/><br/>
                <h3>Instructions</h3>
                <p>Welcome to evens or odds. the game goes like this</p>
                <p>The deck is shuffled. Then choose: will the next card be even or odd?</p>
                <p>Make a choice on every draw, and see how many you get right!</p>
                <p>Face card dont count</p>
                <button className="button1" onClick={collapseInstructions}>Show less</button>
            </div>
        );
    }

    return ( //7//
        <div>
            <br/><br/>
            <h3>Instructions</h3>
            <p>Welcome to evens or odds. the game goes like this</p>
            <button className="button1" onClick={expandInstructions}>Read more</button>
        </div>
    )
}

// const mapStateToProps = state => { //8
//     return { instructionsExpanded: state.instructionsExpanded };
// }

// const mapDispatchToProps = dispatch => { //17//
//     return {
//         expandInstructions: () => dispatch(expandInstructions()), //12  startGame gonna be set to a callback which does a dispatch of the startgame action.. fires off a dispatch or the result calling
//         collapseInstructions: () => dispatch(collapseInstructions()) //13 cancelGame going to a callback which fires off a dispatch or the result calling
//     };
// }

// const componentConnector = connect(mapStateToProps, mapDispatchToProps); //9 //18

// export default componentConnector(Instructions); //10

//export default connect(mapStateToProps,mapDispatchToProps)(Instructions); //20= 8+17+10 all togthere//we only using it once so we can inline connect call and replace it where we are using component connector 

// export default connect(
//     state => {
//         return { instructionsExpanded: state.instructionsExpanded }; //like mapStateToProps like 8
//     }, { expandInstructions, collapseInstructions } //like mapDispatchToProps like 17
// )(Instructions)


export default connect(  //shorter inline
    state => ( { instructionsExpanded: state.settings.instructionsExpanded }), //like mapStateToProps like 8
   { expandInstructions, collapseInstructions } //like mapDispatchToProps like 17
)(Instructions)





















