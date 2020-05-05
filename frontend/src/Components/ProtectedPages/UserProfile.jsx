import React from 'react';
import ProtectedNav from './ProtectedNav'
import User from '../Support Files/User';
import { connect }  from 'react-redux';


const UserProfile = (state) => {
    console.log('state????:', state)

    console.log('avatar', state.avatar)
    return (
        
        <div>
            <ProtectedNav />
            <h1>UserProfile Page</h1>
            <User/>
            <h2>{state.username}</h2>
            {/* <img src= {state.avatar}/> */}
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
    return {
        onsubmit: event =>  dispatch(this.handleFormSubmit(event)),
    }
   
}

export default (connect(mapStateToProps, mapDispatchToProps) (UserProfile));