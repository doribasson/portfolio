import React, { Component } from 'react';
import Header from './Header';

// const Joke = props => {
//     const { setup, punchline } = props.joke;
//     return <p style={{margin: 20}}>{setup} <em>{punchline}</em></p>;
//  }

const Joke = ({ joke: { setup, punchline } }) => (  //Joke is shorter function because we dont have state 
    <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
)

//  const Joke =({joke}) => {   the same like above just shorter
//     const { setup, punchline } = joke;  
//  }

class Jokes extends Component {
    state = { joke: {}, jokes: [] };

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')//go there and wait to get the resualt untill .then
            .then(response => response.json()) //like future return ..callback when ready
            .then(json => this.setState({ joke: json }))
            .catch(error => alert(error.message)); //if there is error so its add alert error message
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(json => this.setState({ jokes: json }))
            .catch(error => alert(error.message));  //if there is error so its add alert error message
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
        // const { setup, punchline} = this.state.joke; //setup,punchline are propties of joke have
        return (
            <div>
                <Header />
                <h2>Higelighted Joke</h2>
                {/* <p>{setup} <em>{punchline}</em></p>  */}
                <Joke joke={this.state.joke} />
                <hr />
                <h3>Want ten new jokes?</h3>
                <button onClick={this.fetchJokes}>Click me!</button>
                {
                    // this.state.jokes.map(joke => {                            //lambda expressions react ..implement func with automtic anonymous class
                    //     // const { id, setup, punchline } = joke;
                    //     ////// return <p key={id}>{setup} <em>{punchline}</em></p>
                    //     return <Joke key={joke.id} joke={joke} />

                    // })

                    this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke} />)) //shorter..inline

                }

            </div>
        )
    }
}


export default Jokes;