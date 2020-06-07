import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../Actions/authActions';
import Navbar from '../Support Files/Navbar'

function Travel() {
    
    return (
        <div className='global'>
            <Navbar />
            <div className="inner-pages">
                <h1>Travel Page</h1>
                {/* <img src='https://media.giphy.com/media/11Inr4HyDDb6b6/giphy.gif' alt= '' width='600px'/> */}
            </div>
        </div>
    );
}


const mapStateToProps = (state, ownProps) => {
    console.log('check state:', state)
    return state.auth.payload
}


export default (connect(mapStateToProps, { login })(Travel));

