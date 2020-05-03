import React from 'react';
// import axios from 'axios';
import ProtectedNav from './ProtectedNav'
import { connect }  from 'react-redux';


const UserProfile = (state) => {
    console.log('state????:', state)

    console.log('avatar', state.avatar)
    return (
        
        <div>
            <ProtectedNav />
            <h1>UserProfile Page</h1>
            <h2>{state.username}</h2>
            <img src= {state.avatar}/>
            <div> Region: {state.region}</div>
            <div>Info: {state.info}</div>
            
            
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

export default (connect(mapStateToProps, mapDispatchToProps) (UserProfile));