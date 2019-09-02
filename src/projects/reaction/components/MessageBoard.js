import React from 'react';
import { connect } from 'react-redux';
import CreateReaction from './CreateReaction';

const MessageReactions = ({ messageReactions }) => { //componenet of function that gonna take an array of messageReactions witinin an object to display its jsx. messageReactions takes from conncet in the redux store
    if (!messageReactions) return null; //if messageReactions undfined return null

    return (
        // messageReactions.map(reaction => {
        messageReactions.map((reaction, index) => {
            const { id, emoji, username } = reaction; //d`structure

            return (
                <span key={id}>
                    <em>{username}:</em>{' '}
                    {emoji}
                    {index !== messageReactions.length - 1 ? ', ' : null} {/* //if the index is not the last value do , and spcae else will not rendering anything */}
                </span>
            )
        })
    )
}

const MessageBoard = ({ messages, reactions }) => {
    return (
        <div>
            {
                messages.items.map(messageItem => {
                    const { id, text, timestamp, username } = messageItem;

                    return (
                        <div key={id}>
                            <h4>{new Date(timestamp).toLocaleString()}</h4>
                            <p>{text}</p>
                            <h3>{username}</h3>
                            <CreateReaction messageId={id} />
                            <MessageReactions messageReactions={reactions[id]} />
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )

}

export default connect(
    ({ messages, reactions }) => ({ messages, reactions }) //reaction for acsess for MessageReactions this is all stateToProps
)(MessageBoard);