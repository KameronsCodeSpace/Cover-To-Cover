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
            displayPosts:false,
            info: this.props.info
        })
    }

    handlePosts = async() => {
        this.setState({
            displayPosts: true, 
            displayInfo: false, 
            posts: this.props.posts
        })
    }

    render() {
        return(
            <div className='activity-bar'>
               
                <a href='posts' onClick={this.handlePosts}>Posts</a>
            </div>
        )
    }

}
export default ActivityBar;