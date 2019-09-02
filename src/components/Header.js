import React from 'react'; //without class because its just navigate
import { Link } from 'react-router-dom'; //for navigate to other pads in the application

// const Header = ({ children }) => {
//     const style = {
//         display: 'inline-block',
//         margin: 5,
//         marginBottom: 30
//     };



const Header = props => {
    const { Component } = props;
    
    const style = {
        display: 'inline-block',
        margin: 5,
        // marginBottom: 30
    };

    return (
        <div>
            <div className='bar'>
                <h3 style={style}><Link to='/'>Home</Link></h3>
                <h3 style={style}><Link to='/jokes'>Jokes</Link></h3>
                <h3 style={style}><Link to='/music-master'>Music</Link></h3>
                <h3 style={style}><Link to='/evens-or-odds'>Game</Link></h3>
                <h3 style={style}><Link to='/reaction'>Reaction</Link></h3>
                <h3 style={style}><Link to='/posts'>Posts</Link></h3>
                <h3 style={style}><Link to='/todos1'>Todos2</Link></h3>
                <h3 style={style}><Link to='/todos2'>Todos3</Link></h3>
            </div>
            <br /><br />
            {/* {children} */}
            {props.children}
        </div>

    )
}

export default Header; 