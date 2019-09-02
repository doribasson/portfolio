import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header style={headStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">List</Link> | <Link style={linkStyle} to="/about">About</Link>
            {/* <Link style={linkStyle} to="/">Home</Link> */}
        </header>
    )
}


const headStyle = {
    //background: '#001f3d' ,
    // background: '#5b0139' ,
    // background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    // background: 'blue'
}

export default Header;
