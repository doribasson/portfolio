import React, { Component } from 'react';

const TITLES = [
    'a software engineer',
    'a B.sc Graduate',
    'Looking for job '
];

class Title extends Component {
    state = { titleIndex: 0 };

    componentDidMount() {
        console.log('Title component has mounted');
        this.animateTitles();
    }

    //componentDidMount =() =>  {this.animateTitles();}


    componentWillMount() {                                //this is to clear the queued titleInterval
        console.log('Title component will unmount!');
        clearInterval(this.titleInterval);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {   //to remove the queued setInterval method since the component is now leaving the DOM..it tell no want this functionality be firing in the background anymore since we no longer have this Title anymore in the app... for asynchronous operation that is firing in the background
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex: titleIndex });
        }, 2000);

        console.log('this.titleInterval', this.titleInterval);
    }

    render() {
        const title = TITLES[this.state.titleIndex];

        return (
            <p>I am {title}</p>
        )
    }
}

export default Title;