import React from 'react';
import axios from "axios";

import Navbar from '../Support Files/Navbar'

//will need props value of current story clicked on
//Show username and avatar of story creater
//display story based on ID

class StoryPage extends React.Component {
    constructor() {
        super();
        this.state = {
            userData: []
        }
    }

    async componentDidMount() {
        const { storyProps } = this.props.location.state
        console.log("PROPS", storyProps.p_username);

        try {
            let blogs = await axios.get('/users/user/' + storyProps.p_username);
            this.setState({
                userData: blogs.data.payload
            });
            console.log("state:", this.state);
        } catch (err) {
            console.log("ERROR:", err);
        }
    }

    render() {
        const { userData } = this.state
        const { storyProps } = this.props.location.state

        console.log('My story props', storyProps)
        console.log('My user state', userData.avatar)

        return (
            <div>
                <Navbar />
                <div className='inner-pages'>
                    <div className='blog-container'>
                        <img className='avatar-picture' src={userData.avatar} alt='img' />
                        <h1>{storyProps.p_username}</h1>
                        <p>{storyProps.caption}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default StoryPage;