import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import Header from './Header';
import profile from '../assets/profile.png';

class App extends Component {
    state = { displayBio: false };
    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }


    //render = () => {
    render() {
        //console.log('hi');
        return (
            <div>
                <Header />
                <img src={profile} alt='profile' className='profile'/>
                <h1>Hello!</h1>
                <p>My name is dori.</p>
                <Title />
                <p>iam always looking forward to working on meaningful projects</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in yavne and code every day</p>
                            <p>My favorite language is javaScript,and i think React.js is awesome</p>
                            <p>Besides coding, I also love Music</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                            <div>
                                <button onClick={this.toggleDisplayBio}>Read more less</button>
                            </div>
                        )
                }
                <hr/>
                <Projects />
                <hr/>
                <SocialProfiles />
            </div>
        )
    }
}

export default App;