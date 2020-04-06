import React from 'react';
import { Link } from 'react-router-dom'

//I expect us to modifty this alot in the future but I always liked having this to start
function Nav() {

    const navStyle = {
        color: 'white'
    }

    return (
        <nav>
            <h3>Stories Around the World</h3>
            <ul className='nav-links'>
                <Link style={navStyle} to="/"><strong><li>Home</li></strong></Link>
                <Link style={navStyle} to='/login'><strong><li>Login</li></strong></Link>
                <Link style={navStyle} to='/signup'><strong><li>Signup</li></strong></Link>
                <Link style={navStyle} to='/Travel'><strong><li>Travel</li></strong></Link>
                <Link style={navStyle} to='/Trending'><strong><li>Trending</li></strong></Link>
                <Link style={navStyle} to='/userprofile'><strong><li>User Profile</li></strong></Link>

            </ul>
        </nav>
    );
}

export default Nav;