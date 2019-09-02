import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REACTION_OBJECTS } from '../actions/type';
import { PubSubContext } from '../pubsub';
import { createReaction } from '../actions/reactions';

class CreateReaction extends Component {
    publishReaction = ({ type, emoji }) => () => { //** that way when its called it returnes a function which calls this data
        const { username, messageId } = this.props; //username from connect in redux store; and messageId from  <CreateReaction messageId={id} /> at MessageBoard

        this.context.pubsub.publish(createReaction({ type, emoji, username, messageId })); //createReaction from action creator ar reaction.js
    }

    render() {
        return (
            <div>
                {
                    REACTION_OBJECTS.map(REACTION_OBJECT => {
                        const { type, emoji } = REACTION_OBJECT;

                        return <span
                            style={{ margin: 6, cursor: 'pointer' }}
                            key={type}
                            onClick={this.publishReaction({ type, emoji })} //** pass in an object we are calling a function in our jsx so we need to make sure that is onckick handler still refereneces a function and not directly cause a function so adapt double arrow synttax in published reaction function 
                        >
                            {emoji}
                        </span>
                    })
                }
            </div>
        )
    }

    static contextType = PubSubContext;
}

export default connect(({ username }) => ({ username }))(CreateReaction);