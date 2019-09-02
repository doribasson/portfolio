import React from 'react'; //without class because its just navigate
import { Link } from 'react-router-dom'; //for navigate to other pads in the application

const Header = () => {
    const style = {
        display: 'inline-block',
        margin: 10,
        marginBottom: 30
    };
    
    return (
        <div>
            <h3 style={style}><Link to='/'>Home</Link></h3>
            <h3 style={style}><Link to='/jokes'>Jokes</Link></h3>
        </div> 

    )
}

export default Header; 