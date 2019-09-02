import React, { Component } from 'react';

class Jokes extends Component {
    state = { joke: {}, jokes: [] };

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')//go there and wait to get the resualt untill .then
            .then(response => response.json()) //like future return ..callback when ready
            .then(json => this.setState({joke: json})); 
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({ jokes: json }));
    } 


    // componentDidMount() {
    //     fetch('https://official-joke-api.appspot.com/random_joke')
    //         .then(response => response.json()) //the same like : .then {return response => response.json() });
    //         .then(json => console.log('json', json))
    //         .then(json => this.setState({joke: json})); //the key is joke and start the state and the resulting joke data is the json
    //     //fetch('https://official-joke-api.appspot.com/random_joke').then (response => response.json()).then(json => console.log('json', json)); //the same like : .then {return response => response.json() }); 
    //     //take aurl of the api method that we want to hit and that is https
    //     //.then(response => console.log('response', response)); // this is logging to response object.. like handler ..function to fire when the event is actually available and this paramter is a return value of the promise whih in the case of a fetch is a response
    // }

    render() {
        const { setup, punchline} = this.state.joke; //setup,punchline are propties of joke have
        return (
            <div>
                <h2>Higelighted Joke</h2>
                <p>{setup} <em>{punchline}</em></p> 
                <hr />
                <h3>Want ten new jokes?</h3>
                <button onClick={this.fetchJokes}>Click me!</button>
                {
                    this.state.jokes.map(joke => {
                        const { id, setup, punchline } = joke;

                        return <p key={id}>{setup} <em>{punchline}</em></p>

                    })
                }
            </div>
        )
    }
}


export default Jokes;