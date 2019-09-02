import React, { Component } from 'react';

// class RegularClass {}
// class ComponentClass extends Component{}

// const regularClassInstance = new RegularClass();
// const componentClassInstance = new ComponentClass();

// console.log('regularClassInstance', regularClassInstance);
// console.log('componentClassInstance', componentClassInstance);

class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {displayBio: false }; 
            state = { displayBio: false };
            toggleDisplayBio = () => { 
                this.setState({ displayBio: !this.state.displayBio });
            }

    //     console.log('Component this', this);

        //this.showLess = this.showLess.bind(this);
        //this.readMore = this.readMore.bind(this);
        //this.toggleDisplayBio = this.toggleDisplayBio.bind(this);

        // this.readMore = () => {
        //     //console.log('readMore this', this)
        //     //this.setState({displayBio: true});
        // }
    // }

    readMore() {
        //this.state.displayBio = true;
        this.setState({displayBio: true});
        console.log('readMore this', this);
    }

    showLess(){
            this.setState({displayBio: false});
    }
    
    // toggleDisplayBio() { //replace readmore and showless function
    //     this.setState({ displayBio: !this.state.displayBio });
    // }

    render() {
        //let bio = this.state.displayBio ? 
        const bio = this.state.displayBio ? (  //like if that true so else null {displayBio: true }; 
          <div>
            <p>I live in yavne and code every day</p>
            <p>My favorite language is javaScript,and i think React.js is awesome</p>
            <p>Besides coding, I also love Music</p>
            {/* <button onClick={this.showLess}>Show less</button> */}
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) :   //or null ..if displayBio false so come here else no ;
            (  
            <div>
            {/* <button onClick={this.readMore}>Read more</button> */}
            <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
            )
       


        // if (!this.state.displayBio) { //like == false because the !
        //     bio = null;
        // }
        
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is dori. iam software</p>
                <p>iam always looking forward to working on meaningful projects</p>
                {bio} 
            </div>
        )
    }
}

export default App;