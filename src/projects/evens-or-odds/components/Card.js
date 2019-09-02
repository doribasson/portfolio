import React from 'react';
import { connect } from 'react-redux';

const Card = ({ cards }) => {
    if (!cards[0]) return null; //if cards of 0 is equal to undedined and ir will not render anything

    const { value, suit, image } = cards[0]; //like value = cards[0].value

    return (
        <div>
            <h3>{value} of {suit}</h3>
            <img src={image} alt='card-image' />
        </div>
    )

}


export default connect(({ deck: { cards } }) => ({ cards }))(Card);




