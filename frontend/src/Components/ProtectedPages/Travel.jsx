import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../Actions/authActions';
import Navbar from '../Support Files/Navbar'
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

function Travel() {
    // mapboxgl.accessToken = 'pk.eyJ1IjoiamFlYjEwIiwiYSI6ImNrYWJleHZ0MTFicW8ycnFrY2RzdGcyM3EifQ.0b4pmg6kf_SSErXD4FTroQ';
    // const map = new mapboxgl.Map({
    //     container: 'global',
    //     style: 'mapbox://styles/mapbox/streets-v11'
    // });
    return (
        <div className='global'>
            <Navbar />
            <div className="inner-pages">
                <h1>Travel Page</h1>
                <img src='https://media.giphy.com/media/11Inr4HyDDb6b6/giphy.gif' width='600px'/>
            </div>
        </div>
    );
}


const mapStateToProps = (state, ownProps) => {
    console.log('check state:', state)
    return state.auth.payload
}


export default (connect(mapStateToProps, { login })(Travel));

