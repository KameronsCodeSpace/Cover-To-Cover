import React from 'react';
// import axios from 'axios';
import Navbar from '../Support Files/Navbar'
import { connect } from 'react-redux';
import Post from '../Support Files/posts'


const UserProfile = (state) => {
    console.log('state????:', state)

    console.log('avatar', state.avatar)
    return (

        <div>
            <Navbar />
            
            <div className="inner-pages">
                 <Post />
                 <br></br>
                <h1>UserProfile Page</h1>
                <h2>{state.username}</h2>
                <img src={state.avatar} />
                <div> Region: {state.region}</div>
                <div>Info: {state.info}</div>


            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log('check state:', state)
    // profile: state
    return state.auth.payload
}

const mapDispatchToProps = (dispatch) => {

}

export default (connect(mapStateToProps, mapDispatchToProps)(UserProfile));