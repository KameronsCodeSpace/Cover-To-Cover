import React, { Component, Fragment } from 'react';
import axios from "axios";
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../Actions/authActions';

import PropTypes from 'prop-types';
import Navbar from '../Support Files/Navbar';
import questionAvatar from '../../img/QuestionAvatar.png';
import staticStoryImg from '../../img/Unknown_location.png';
import Modal from 'react-modal';

//will need props value of current story clicked on
//Show username and avatar of story creater
//display story based on ID

Modal.setAppElement('#root')

class StoryPage extends Component {
    constructor(props) {
        console.log('storypage state????:', props)
        super(props)
        this.state = {
            questionmsg: '',
            username: '',
            useremail: '',
            userregion: '',
            usersuggestion: '',
            userData: [],
            user_avatar: '',
            starter_question: '',
            modalIsOpen: false,
            responseModalIsOpen: false,
            isStoryOwner: false,
            theStoryBook: false,
            questions: [],
            questionOptions: [],
            questionChoice: '',
            questionSelect: '',
            followupResponse: '',
            userQuestionId: '',
            pageNumber: 0,
            lastPage: 2,
            followUpData: []

        }
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    turnPageRight() {
        this.setState({
            theStoryBook: true
        })
    }


    async componentDidMount() {
        const { storyProps, questionSelect } = this.props.location.state
        console.log("PROPS", storyProps);
        console.log("STORY PROPS", storyProps.p_username);
        console.log("Redux props", this.props.username);

        try {
            let followUpCovers = await axios.get('/userquestions/all/' + storyProps.id);
            this.setState({
                followUpData: followUpCovers.data.payload
            });
            console.log("state:", this.state);
        } catch (err) {
            console.log("ERROR:", err);
        }

        if (storyProps.p_username === this.props.username) {
            this.setState({
                isStoryOwner: true
            });
        }

        try {
            let blogs = await axios.get('/users/user/' + storyProps.p_username);
            let firstquestion = await axios.get('/blog/firstquestion/' + storyProps.id);
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

        let questionResponse = await axios.get('/userquestions/all/' + storyProps.id)

        let questionArray = []

        for (let i = 0; i < questionResponse.data.payload.length; i++) {
            questionArray.push(questionResponse.data.payload[i].new_question)
        }

        this.setState({
            // userQuestionId: followUpQuestionId,
            questions: questionArray
        })
        this.populateSelect();
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

    setResponseModalToOpen() {
        this.setState({
            responseModalIsOpen: true
        });
    }

    setModalToClose() {
        this.setState({
            modalIsOpen: false,
            responseModalIsOpen: false

        });
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]:
                e.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { questionmsg, username, useremail, userregion, usersuggestion } = this.state;
        const { storyProps } = this.props.location.state

        try {
            const res = await axios.post(`/userquestions/${storyProps.id}`,
                {
                    storyid: storyProps.id,
                    new_question: questionmsg,
                    user_name: username,
                    user_email: useremail,
                    user_region: userregion,
                    suggested_story: usersuggestion
                })
            console.log('The info', res)
        } catch (err) {
            console.log(err)
        }

        this.setModalToClose();
    }

    handleResponseSubmit = async (event) => {
        event.preventDefault();
        const { followupResponse, questionSelect, questions } = this.state;
        // const { storyProps } = this.props.location.state
        // console.log('working?', questionSelect)
        // let followUpQuestionId = await axios.get('/userquestions/findid/' + questionSelect)
        console.log('Whats in here', questionSelect)
        try {
            const res = await axios.patch(`/userquestions/`,
                {
                    theUserQuestion: questions[questionSelect - 1],
                    followupResponse: followupResponse
                })
            console.log('The info', res)
        } catch (err) {
            console.log(err)
        }

        this.setModalToClose();
    }

    populateSelect = () => {
        const { questions } = this.state
        let questionOpts = [];
        questionOpts.push(<option value={''} key={''}>Choose a followup question</option>)

        for (let i = 0; i < questions.length; i++) {
            questionOpts.push(<option value={i + 1} key={questions[i]}>{questions[i]}</option>);
        }

        this.setState({
            questionOptions: questionOpts,
            questionChoice: `${questionOpts[0].props.value}`,
        })
    }

    turnPageLeft = () => {
        const { pageNumber } = this.state

        let pageChanger = pageNumber - 1

        if (pageChanger < 1) {
            this.setState({
                theStoryBook: false,
                pageNumber: 0
            })
            pageChanger = 0
        } else {
            this.setState({
                theStoryBook: true,
                pageNumber: pageChanger
            })
        }

    }

    turnPageRight = () => {
        const { pageNumber, questions } = this.state

        let pageChanger = pageNumber + 1


        if (pageChanger > questions.length) {
            this.setState({
                theStoryBook: false,
                pageNumber: 0
            })
            pageChanger = 0
        } else {
            this.setState({
                theStoryBook: true,
                pageNumber: pageChanger
            })
        }
    }

    render() {
        const { userData, starter_question, modalIsOpen, responseModalIsOpen, isStoryOwner, theStoryBook, questionOptions, pageNumber, questions } = this.state

        const { storyProps } = this.props.location.state

        const followUpPages = this.state.followUpData.filter(
            element => {

                return element.followup_answer !== null && element.id === pageNumber;
            }
        );

        console.log('Filtered followup questions', followUpPages);

        const userQuestions = (
            <Fragment>
                <div className='chat' onClick={() => this.setResponseModalToOpen()}>

                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope-open-text" class="svg-inline--fa fa-envelope-open-text fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">

                        <g className="fa-group">
                            <path fill="currentColor" d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path>
                        </g>
                    </svg>
                </div>
                <div className="circle">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>

                {/* User Modal */}
                <Modal className="modal-wrapper"
                    isOpen={responseModalIsOpen}
                    onRequestClose={() => this.setModalToClose()}
                    style={
                        {
                            overlay: {
                                backgroundColor: 'rgba(32, 37, 58, 0.50)'
                            },
                            content: {
                                color: 'orange',
                                width: '900px',
                                height: '80%',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)'
                            }
                        }
                    }
                >
                    <h2>Answer a question</h2>
                    <form onSubmit={this.handleResponseSubmit}>

                        <div className="modal-info-form">
                            <div className="modal-input-fields">
                                <input type='text' name='username' className='modal-input' placeholder="Name2" onChange={this.handleInput}></input>
                                <input type='text' name='useremail' className='modal-input' placeholder="Email2" onChange={this.handleInput}></input>
                                <input type='text' name='userregion' className='modal-input' placeholder="Your Region2" onChange={this.handleInput}></input>
                                <input type='text' name='usersuggestion' className='modal-input' placeholder="Simliar Story Link2" onChange={this.handleInput}></input>
                                <select name='questionSelect' onChange={this.handleInput}>
                                    {questionOptions}
                                </select>

                                <button className='modal-btn' onClick={() => this.setModalToClose()}>Close</button>
                            </div>
                            <div className='modal-msg'>
                                <textarea name='followupResponse' placeholder='Respond to a Question' onChange={this.handleInput}></textarea>
                                <button className='modal-btn' type='submit'>Submit</button>
                            </div>
                        </div>
                    </form>
                </Modal>
            </Fragment>
        );

        const vistorQuestions = (
            <Fragment>
                <div className='chat' onClick={() => this.setModalToOpen()}>

                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="question-circle" class="svg-inline--fa fa-question-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">

                        <g className="fa-group">
                            <path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path>
                        </g>
                    </svg>

                </div>
                <div className="circle">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>

                {/* Vistor Modal */}
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
                                width: '900px',
                                height: '80%',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)'
                            }
                        }
                    }
                >
                    <h2>Ask your question</h2>
                    <form onSubmit={this.handleSubmit}>

                        <div className="modal-info-form">
                            <div className="modal-input-fields">
                                <input type='text' name='username' className='modal-input' placeholder="Name" onChange={this.handleInput}></input>
                                <input type='text' name='useremail' className='modal-input' placeholder="Email" onChange={this.handleInput}></input>
                                <input type='text' name='userregion' className='modal-input' placeholder="Your Region" onChange={this.handleInput}></input>
                                <input type='text' name='usersuggestion' className='modal-input' placeholder="Simliar Story Link" onChange={this.handleInput}></input>

                                <button className='modal-btn' onClick={() => this.setModalToClose()}>Close</button>
                            </div>
                            <div className='modal-msg'>
                                <textarea name='questionmsg' placeholder='Question' onChange={this.handleInput}></textarea>
                                <button className='modal-btn' type='submit'>Submit</button>
                            </div>
                        </div>
                    </form>
                </Modal>
            </Fragment>
        );

        const firstPage = (
            <Fragment>
                <h2>{starter_question} - Q 1/{questions.length}</h2>

                <div classname='avatar-username'>
                    <h3>
                        <img className='avatar-picture' onError={this.addDefaultSrc} src={`https://api.adorable.io/avatars/285/` + storyProps.p_username + `.png`} alt='img' />
                        {storyProps.p_username}
                    </h3>
                </div>

                <div className="storyBodyScroll">
                    <p className="storyBody">
                        {storyProps.caption}
                    </p>
                </div>
            </Fragment>
        );

        const followingPages = (
            <Fragment>
                {
                    followUpPages.map((element, i) => {
                        return (
                            <div>
                                <h2>{element.new_question} - Q {element.id + 1}/{questions.length}</h2>

                                <div classname='avatar-username'>
                                    <h3>
                                        <img className='avatar-picture' onError={this.addDefaultSrc} src={`https://api.adorable.io/avatars/285/` + storyProps.p_username + `.png`} alt='img' />
                                        {storyProps.p_username}
                                    </h3>
                                </div>
                                <div className="storyBodyScroll">
                                    <p className="storyBody">
                                        {element.followup_answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })
                }
            </Fragment>
        );




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

                        {isStoryOwner ? userQuestions : vistorQuestions}

                    </div>



                    <div className='story-card-right'>

                        {theStoryBook ? followingPages : firstPage}

                        <nav>
                            <div className='story-navigation'>
                                <h1>{storyProps.story_title}</h1>
                                <a onClick={this.turnPageLeft}><i className='story-back'>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-left" class="svg-inline--fa fa-arrow-circle-left fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"></path></svg>
                                </i></a>
                                <a onClick={this.turnPageRight}><i className='story-next'>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-right" class="svg-inline--fa fa-arrow-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg>
                                </i></a>
                                <Link to={{
                                    pathname: '/comments',
                                    state: {
                                        storyProps: storyProps
                                    }
                                }}

                                ><i className='story-comments'>
                                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment-alt" class="svg-inline--fa fa-comment-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"></path></svg>
                                    </i>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </section>
            </div>
        );
    }
}

// export default StoryPage;

const mapStateToProps = (state) => {
    // console.log('check state:', state.auth.payload.username)
    return state.auth.payload
}


export default withRouter(connect(
    mapStateToProps
)(StoryPage));

{/* <div className='inner-pages'>
<div className='blog-container'>
    <img className='avatar-picture' onError={this.addDefaultSrc}  src={userData.avatar} alt='img' />
    <h1>{storyProps.p_username}</h1>
    <p>{storyProps.caption}</p>
</div>
</div> */}