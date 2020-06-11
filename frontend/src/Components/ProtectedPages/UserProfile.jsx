import React from 'react';
// import User from '../Support Files/User';
import { Link } from 'react-router-dom'
import Navbar from '../Support Files/Navbar'
import { connect } from 'react-redux';
import { Button } from '../Support Files/Button'
import axios from 'axios';
// import Post from '../Support Files/posts';
import { login } from '../../Actions/authActions';
import questionAvatar from '../../img/QuestionAvatar.png'
import staticStoryImg from '../../img/Unknown_location.png';
import Modal from 'react-modal'

Modal.setAppElement('#root')

class UserProfile extends React.Component {
    constructor(props) {
        console.log('props????:', props)
        super(props)
        this.state = {
            avatar: '',
            imgFile: null,
            newAvatar: false,
            feeds: [],
            click: false,
            modalIsOpen: false,
            storytitle: '',
            question: '',
            pictureurl: '',
            story: '',
            questions: [],
            questionOptions: [],
            questionSelect: '',
            questionChoice: '',
            questionId: ''
        }
        console.log('state????:', this.state)

    }

    //getting all posts from the user
    async componentDidMount() {
        const id = this.props.id
        try {
            let url = `http://localhost:3100/users/${id}`
            const userPost = await axios.get(url)
            this.setState({
                feeds: userPost.data.payload,
                // displayPosts: true
            })

        } catch (error) {
            console.log('ERROR', error)
        }

        let questionResponse = await axios.get('/questions')

        let questionArray = []

        for (let i = 0; i < questionResponse.data.payload.length; i++) {
            questionArray.push(questionResponse.data.payload[i].starter)
        }

        this.setState({
            questions: questionArray
        })
        this.populateSelect();

    }

    addDefaultSrc(ev) {
        ev.target.src = questionAvatar
    }

    addDefaultStoryImg(ev) {
        ev.target.src = staticStoryImg
    }

    handleFileInput = (e) => {
        this.setState({
            imgFile: e.target.files[0]
        })
    }

    // async componentDidUpdate() {
    //     const id = this.props.id

    //     try {
    //         let url = `http://localhost:3100/users/${id}`
    //         const userPost = await axios.get(url)
    //         this.setState({
    //             feeds: userPost.data.payload,
    //             // displayPosts: true
    //         })

    //     } catch (error) {
    //         console.log('ERROR', error)
    //     }
    // }

    // handleFormSubmit = async (e) => {
    //     e.preventDefault()
    //     const data = new FormData()
    //     data.append('avatar', this.state.imgFile)
    //     data.append('id', this.props.id)

    //     try {
    //         const response = await axios.post('http://localhost:3100/upload', data)
    //         this.props.login({
    //             username: this.props.username,
    //             password: window.localStorage.getItem('password')
    //         })
    //         this.setState({
    //             avatar: response.data.imgURL,
    //         })
    //     } catch (error) {
    //         console.log('error', error)
    //     }
    // }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { storytitle, questionSelect, pictureurl, story } = this.state;
        // const { storyProps } = this.props.location.state
        let username = this.props.username
        // console.log('working?', storyProps)
        console.log('working2?', this.props.username)

        try {
            const res = await axios.post(`/blog/new/`,
                {
                    storyteller: username,
                    newtitle: storytitle,
                    firstquestion: questionSelect,
                    newpicture: pictureurl,
                    storybody: story
                })
            console.log('The info', res)
        } catch (err) {
            console.log(err)
        }

        this.setModalToClose()
    }

    handleClick = () => {
        console.log('click')
        this.setState({
            click: true
        })
    }

    setModalToClose() {
        this.setState({
            modalIsOpen: false
        });
    }

    setModalToOpen() {
        this.setState({
            modalIsOpen: true
        });
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]:
                e.target.value
        })
    }

    populateSelect = () => {
        const { questions } = this.state
        let questionOpts = [];
        questionOpts.push(<option value={''} key={''}>Choose a starter question</option>)

        for (let i = 0; i < questions.length; i++) {
            questionOpts.push(<option value={i + 1} key={questions[i]}>{questions[i]}</option>);
        }

        this.setState({
            questionOptions: questionOpts,
            questionChoice: `${questionOpts[0].props.value}`,
        })
    }

    render() {
        const { avatar, feeds, modalIsOpen, questionOptions } = this.state
        console.log('feeds', feeds)

        return (
            <div>
                <Navbar />
                {/* <h1>UserProfile Page</h1> */}
                <div className='user-wrapper'>
                    <div className='user-box'>
                        <div className='user-box-img'>
                            <img className='user-picture' onError={this.addDefaultSrc} src={avatar || this.props.avatar} alt='img' />

                        </div>
                        <div className='user-box-bio'>
                            <h1>{this.props.username}</h1>
                            <p>Region: {this.props.region}</p>
                            {/* <p>Growing up in the town of Nibelheim after her mother died early in her life, Tifa Lockhart worked as a tour guide before the villain Sephiroth discovered his "mother" hidden in the town and went berserk, bringing the town to ashes, resulting in Tifa's father getting slain as well. After recovering from her injuries, Tifa became a member of AVALANCHE, an anti-Shinra resistance group, as well as the owner and tender of her own bar in Midgar, 7th Heaven. Since then, Tifa has become good friends with Cloud and his party, and has aided them on his missions often.</p> */}
                            {this.props.info}
                            <form onSubmit={this.handleFormSubmit}>
                                <input type='file'
                                    onChange={this.handleFileInput}
                                    style={{ display: 'none' }}
                                    ref={fileInput => this.fileInput = fileInput}
                                />
                                <Button onClick={() => this.fileInput.click()}
                                    buttonStyle="btn--sight--solid"
                                    buttonSize="btn--medium"
                                >Choose Picture
                                </Button>
                                <input
                                    className='upload-btn'
                                    type='submit'
                                    value='Upload'
                                    style={{ color: 'blue' }}
                                    size={{}}
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <br></br>
                <h1>Your Stories</h1>
                <div className='masonry-holder'>

                    {/* {console.log('Checking Info', feeds)} */}
                    {feeds.map((feed, i) => {
                        return (
                            <div key={i} className="masonry-blocks">
                                <img onError={this.addDefaultStoryImg} src={feed.file_src + `${i}`} alt='img' />
                                <Link to={{
                                    pathname: '/storypage',
                                    state: {
                                        storyProps: feed
                                    }
                                }}>
                                    <h3>{feed.story_title}</h3>
                                    <div className="block-content">
                                        <p>{feed.caption}</p>
                                    </div>
                                </Link>

                            </div>
                        )
                    })}
                    <div className="masonry-blocks-add">
                        {/* <Link className='nav-link' to='/newstory'> */}

                        <img onClick={() => this.setModalToOpen()} src="https://www.ucdavis.edu/sites/default/files/images/focal_link/add-blue_2.png" alt='img' />
                        {/* </Link> */}

                    </div>
                </div>
                {/* <br></br>
                <div className='user-posts'>
                <Post />
            </div> */}

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
                    <form onSubmit={this.handleSubmit}>

                        <div className="modal-info-form">
                            <div className="modal-input-fields">
                                <input type='text' name='storytitle' className='modal-input' placeholder="Title" onChange={this.handleInput}></input>
                                {/* <input type='text' name='question' className='modal-input' placeholder="First Question" onChange={this.handleInput}></input> */}
                                <input type='text' name='pictureurl' className='modal-input' placeholder="URL Image" onChange={this.handleInput}></input>
                                <select name='questionSelect' onChange={this.handleInput}>
                                    {questionOptions}
                                </select>

                                <button className='modal-btn' onClick={() => this.setModalToClose()}>Close</button>
                            </div>
                            <div className='modal-msg'>
                                <textarea name='story' placeholder='Tell Your Story' onChange={this.handleInput}></textarea>
                                <button className='modal-btn' type='submit'>Submit</button>
                            </div>
                        </div>
                    </form>
                </Modal>
            </div>
        );

    }

}

const mapStateToProps = (state, ownProps) => {
    console.log('check state:', state.auth.user.payload.username)
    return state.auth.payload
}


export default (connect(mapStateToProps, { login })(UserProfile));

// <div className='user-header'>
//                     <ul>
//                         <li className='user-center'>
//                         </li>
//                         <li className='user-left'>
//                             <form onSubmit={this.handleFormSubmit}>
//                                 <input type='file'
//                                     onChange={this.handleFileInput}
//                                     style={{ display: 'none' }}
//                                     ref={fileInput => this.fileInput = fileInput}
//                                 />
//                                 <button onClick={() => this.fileInput.click()}>Choose picture</button>
//                                 <input type='submit' value='Upload' />
//                             </form>
//                         </li>

//                         <li className='user-right'>
//                             <div className='region'>Region:{this.props.region}</div>
//                         </li>

//                         <li>
//                             <h2>{this.props.username}</h2>
//                             <img className='avatar-picture' onError={this.addDefaultSrc} src={avatar || this.props.avatar} alt='img' />
//                         </li>

//                         {/* <li><img className='avatar-picture' src={avatar || this.props.avatar} alt='' /></li> */}


//                         {/* <ActivityBar props={this.props}/> */}
//                     </ul>
//                 </div>
//                 <br />
//                 <div className='user-info'>
//                     <p>Growing up in the town of Nibelheim after her mother died early in her life, Tifa Lockhart worked as a tour guide before the villain Sephiroth discovered his "mother" hidden in the town and went berserk, bringing the town to ashes, resulting in Tifa's father getting slain as well. After recovering from her injuries, Tifa became a member of AVALANCHE, an anti-Shinra resistance group, as well as the owner and tender of her own bar in Midgar, 7th Heaven. Since then, Tifa has become good friends with Cloud and his party, and has aided them on his missions often.</p>
//                     {/* {this.props.info} */}
//                     {/* <Info /> */}
//                 </div>