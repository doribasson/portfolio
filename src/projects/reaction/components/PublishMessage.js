import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { PubSub} from '../pubsub'; //for publish somehtinmg
import { PubSubContext } from '../pubsub'; //for publish somehtinmg

import { newMessage } from '../actions/messages'; //for action creator

// const pubsub = new PubSub(); //to access the publish function we need an instance of the pubsub class availble


class PublishMessage extends Component {
    state = { text: '' };

    updateText = event => this.setState({ text: event.target.value });

    publishMessage = () => {
        const { text } = this.state;
        const { username } = this.props; 
        this.context.pubsub.publish(newMessage({ text, username })); //call the newMessage creator
    }


    handleKeyPress = event => {
        if (event.key === 'Enter') this.publishMessage();
    }

    render() {
        console.log('this', this);
        return (
            <div>
                <h3>Got something to say?</h3>
                <input onChange={this.updateText} onKeyPress={this.handleKeyPress} />
                {' '}
                <button onClick={this.publishMessage}>Publish  it!</button>
            </div>
        )
    }
    static contextType = PubSubContext;
}

// PublishMessage.contextType = PubSubContext; //the result is that every instance of the published message component is gonna have local context firld that is created in the react engine.. like interface here

export default connect(({ username }) => ({ username }))(PublishMessage); //({ username }) => ({ username }) this is mapStateToProps