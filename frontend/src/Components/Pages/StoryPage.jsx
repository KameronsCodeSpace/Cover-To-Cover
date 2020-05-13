import React from 'react';

import Navbar from '../Support Files/Navbar'

//will need props value of current story clicked on
//Show username and avatar of story creater
//display story based on ID

class StoryPage extends React.Component {

    render() {
        const { storyProps } = this.props.location.state

        console.log('My story props', storyProps)
        return (
            <div>
                <Navbar />
                <div className="inner-pages">
                    <h1>{storyProps.p_username}</h1>
                    <p>{storyProps.caption}</p>
                </div>
            </div>
        );
    }
}

export default StoryPage;