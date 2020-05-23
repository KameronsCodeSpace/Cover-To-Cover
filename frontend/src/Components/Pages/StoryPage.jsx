import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'


import Navbar from '../Support Files/Navbar'
import questionAvatar from '../../img/QuestionAvatar.png'
import staticStoryImg from '../../img/Unknown_location.png';

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

    addDefaultAvatar(ev) {
        ev.target.src = questionAvatar
    }

    addDefaultStoryImg(ev) {
        ev.target.src = staticStoryImg
    }

    render() {
        const { userData } = this.state
        const { storyProps } = this.props.location.state

        console.log('My story props', storyProps)
        console.log('My user state', userData.avatar)

        return (
            <div>
                <Navbar />
                <section className='story-card'>
                    <div className='story-card-left'>

                        <svg width='0' height='0'>
                            <clipPath id='clip-polygon'>
                                <polygon points='500 500, 500 -500, -500 500, -500 250'>

                                </polygon>
                            </clipPath>
                        </svg>
                        <img onError={this.addDefaultStoryImg} src={storyProps.file_src} className='clip' alt='img' />

                        <Link className='chat' to='/explore'>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="comment-dots"
                                class="svg-inline--fa fa-comment-dots fa-w-16"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">

                                <g className="fa-group">
                                    <path
                                        fill="currentColor"
                                        d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                                    >
                                    </path>
                                </g>
                            </svg>
                        </Link>
                    </div>
                    <div className='story-card-right'>
                        <h2>Some Question</h2>
                        <h2>{storyProps.p_username}</h2>
                        <p>{storyProps.caption}</p>
                        <nav>
                            <div className='story-navigation'>
                                <h1>Story Title</h1>
                                <a href='#'><i className='story-back'>Back</i></a>
                                <a href='#'><i className='story-next'>Forward</i></a>
                                <a href='#'><i className='story-comments'>Comments</i></a>
                            </div>
                        </nav>
                    </div>
                </section>
            </div>
        );
    }
}

export default StoryPage;


{/* <div className='inner-pages'>
<div className='blog-container'>
    <img className='avatar-picture' onError={this.addDefaultSrc}  src={userData.avatar} alt='img' />
    <h1>{storyProps.p_username}</h1>
    <p>{storyProps.caption}</p>
</div>
</div> */}