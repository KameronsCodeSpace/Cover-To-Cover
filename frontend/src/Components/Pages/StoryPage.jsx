import React from 'react';
import axios from "axios";

import Navbar from '../Support Files/Navbar'
import questionAvatar from '../../img/QuestionAvatar.png'
import staticStoryImg from '../../img/Unknown_location.png';
import Modal from 'react-modal'

//will need props value of current story clicked on
//Show username and avatar of story creater
//display story based on ID

Modal.setAppElement('#root')

class StoryPage extends React.Component {
    constructor(props) {
        console.log('storypage state????:', props)
        super(props)
        this.state = {
            userData: [],
            user_avatar: '',
            starter_question: '',
            modalIsOpen: false
        }
    }

    async componentDidMount() {
        const { storyProps } = this.props.location.state
        console.log("PROPS", storyProps);
        console.log("STORY PROPS", storyProps.id);

        try {
            let blogs = await axios.get('/users/user/' + storyProps.p_username);
            let firstquestion = await axios.get('/starterquestion/' + storyProps.id);
            console.log('The First Ever question', firstquestion.data.payload.starter)

            this.setState({
                userData: blogs.data.payload,
                user_avatar: storyProps.avatar,
                starter_question: firstquestion.data.payload.starter
            });
            console.log("state:", this.state);
        } catch (err) {
            console.log("ERROR:", err);
        }

        // try {
        //     let firstquestion = await axios.get('/starterquestion/' + storyProps.id);
        //     this.setState({
        //         starter_question: firstquestion
        //     });
        //     console.log("QUESTION state:", this.state);
        // } catch (err) {
        //     console.log("ERROR:", err);
        // }

    }

    addDefaultSrc(ev) {
        const { storyProps } = this.props.location.state
        ev.target.src = `https://api.adorable.io/avatars/285/${storyProps.p_username}.png`
    }

    addDefaultAvatar(ev) {
        ev.target.src = questionAvatar
    }

    addDefaultStoryImg(ev) {
        ev.target.src = staticStoryImg
    }

    setModalToOpen() {
        this.setState({
            modalIsOpen: true
        });
    }

    setModalToClose() {
        this.setState({
            modalIsOpen: false
        });
    }

    render() {
        const { userData, starter_question, modalIsOpen } = this.state
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
                        <img onError={this.addDefaultStoryImg} src={storyProps.file_src + `1`} className='clip' alt='img' />
                        <div className='chat' onClick={() => this.setModalToOpen()}>
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
                        </div>

                        <Modal className="modal-wrapper"
                            isOpen={modalIsOpen}
                            onRequestClose={() => this.setModalToClose()}
                            style={
                                {
                                    overlay: {
                                        backgroundColor: 'rgba(32, 37, 58, 0.50)'
                                    },
                                    content: {
                                        color: 'orange',
                                        width: '550px',
                                        height: '70%',
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)'
                                    }
                                }
                            }
                        >
                            <h2>Ask your question</h2>

                            <div className="modal-info-form">
                                <div className="modal-input-fields">
                                    <input type='text' className='modal-input' placeholder="Name"></input>
                                    <input type='text' className='modal-input' placeholder="Email"></input>
                                    <input type='text' className='modal-input' placeholder="Your Region"></input>
                                    <input type='text' className='modal-input' placeholder="Simliar Story Link"></input>

                                    <button className='modal-btn' onClick={() => this.setModalToClose()}>Close</button>
                                </div>
                                <div className='modal-msg'>
                                    <textarea placeholder='Question'></textarea>
                                    <button className='modal-btn' onClick={() => this.setModalToClose()}>Submit</button>
                                </div>
                            </div>
                        </Modal>
                    </div>



                    <div className='story-card-right'>
                        <h2>{starter_question} - Q 1/10</h2>
                        <div classname='avatar-username'>
                            <h3>
                                <img className='avatar-picture' onError={this.addDefaultSrc} src={`https://api.adorable.io/avatars/285/` + storyProps.p_username + `.png`} alt='img' />
                                {storyProps.p_username}
                            </h3>
                        </div>
                        <p>{storyProps.caption}</p>
                        <nav>
                            <div className='story-navigation'>
                                <h1>{storyProps.story_title}</h1>
                                <a href='#'><i className='story-back'>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-left" class="svg-inline--fa fa-arrow-circle-left fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"></path></svg>
                                </i></a>
                                <a href='#'><i className='story-next'>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-right" class="svg-inline--fa fa-arrow-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg>
                                </i></a>
                                <a href='#'><i className='story-comments'>
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment-alt" class="svg-inline--fa fa-comment-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"></path></svg>
                                </i></a>
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