import React from 'react';
import { connect } from 'react-redux';

class ActivityBar extends React.Component {
    constructor(props) {
        console.log('props', props)
        super(props)
        this.state = {
            displayPosts: false,
            displayInfo: false,
            posts: ''
        }
    }

    handleInfo = (e) => {
        this.setState({
            displayInfo: true,
            displayPosts:false
        })
    }

    handlePosts = async() => {
        this.setState({
            displayPosts: true, 
            displayInfo: false, 
            posts: this.props.info
        })
    }

    render() {
        return(
            <div className='activity-bar'>
                <a href='About' onClick={this.handleInfo}>Info</a>
                <a href='posts' onClick={this.handlePosts}>Posts</a>
            </div>
        )
    }

}
export default ActivityBar;