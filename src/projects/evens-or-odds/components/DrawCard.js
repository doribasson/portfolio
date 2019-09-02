import React from 'react'; //1
import { connect } from 'react-redux'; //2  that we can access the deck_id from redux store
import { fetchDrawCard } from '../actions/deck';

// const DrawCard = props => { //3
//     console.log('DrawCard props', props);

//     const { deck_id, fetchDrawCard } = props;



const DrawCard = ({ deck_id, fetchDrawCard }) => { 
    return (
        <div>
            <button className="button1" onClick={fetchDrawCard(deck_id)}>Draw the next card!</button>
        </div>
    )

}




const mapDispatchToProps = dispatch => {
    return {
        fetchDrawCard: deck_id => () => dispatch(fetchDrawCard(deck_id)) //this gi ti the action crator at deck.js
    };
}


export default connect( //4
    state => ({ deck_id: state.deck.deck_id }),
    mapDispatchToProps
)(DrawCard);



// export default connect( //5 the same like 4 just shorter
//     ({ deck: { deck_id } }) => ({ deck_id }), //take deck_id from deck object and we can return an object that only contains that deck_id
//     mapDispatchToProps
// )(DrawCard); 
