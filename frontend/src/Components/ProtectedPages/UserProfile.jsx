import React from 'react';
// import User from '../Support Files/User';
import Navbar from '../Support Files/Navbar'
import { connect } from 'react-redux';
import axios from 'axios';
import Post from '../Support Files/posts';
import { login } from '../../Actions/authActions';
import staticPostImg from '../../img/Unknown_location.png';
import questionAvatar from '../../img/QuestionAvatar.png'

import Info from '../Support Files/Info';
// import ActivityBar from '../Support Files/ActivityBar';

class UserProfile extends React.Component {
    constructor(props) {
        console.log('state????:', props)
        super(props)
        this.state = {
            avatar: '',
            imgFile: null,
            newAvatar: false,
            feeds: [],
            click: false
        }
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
    }

    addDefaultSrc(ev) {
        ev.target.src = questionAvatar
    }

    handleFileInput = (e) => {
        this.setState({
            imgFile: e.target.files[0]
        })
    }

    handleFormSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('avatar', this.state.imgFile)
        data.append('id', this.props.id)

        try {
            const response = await axios.post('http://localhost:3100/upload', data)
            this.props.login({
                username: this.props.username,
                password: window.localStorage.getItem('password')
            })
            this.setState({
                avatar: response.data.imgURL,
            })
        } catch (error) {
            console.log('error', error)
        }
    }

    handleClick = () => {
         console.log('click')
        this.setState({
            click: true
        })
    }

    render() {
        const { avatar, feeds } = this.state
        return (
            <div className='user-profile'>
                <Navbar />
                <div className="inner-pages">
                    {/* <h1>UserProfile Page</h1> */}
                    <div className='user-header'>
                        <ul>
                        <li className='user-center'>
                            </li>
                            <li className='user-left'>
                                <form onSubmit={this.handleFormSubmit}>
                                    <input type='file'
                                        onChange={this.handleFileInput}
                                        style={{ display: 'none' }}
                                        ref={fileInput => this.fileInput = fileInput}
                                    />
                                    <button onClick={() => this.fileInput.click()}>Choose picture</button>
                                    <input type='submit' value='Upload' />
                                </form>
                            </li>

                            <li className='user-right'>
                                <div className='region'>Region:{this.props.region}</div>
                            </li>

                            <li>
                            <h2>{this.props.username}</h2>
                                <img className='avatar-picture' onError={this.addDefaultSrc} src={avatar || this.props.avatar} alt='img' />
                            </li>

                            {/* <li><img className='avatar-picture' src={avatar || this.props.avatar} alt='' /></li> */}


                            {/* <ActivityBar props={this.props}/> */}
                        </ul>
                    </div>
                    <br />
                    <div className='user-info'>
                        {/* <p>Growing up in the town of Nibelheim after her mother died early in her life, Tifa Lockhart worked as a tour guide before the villain Sephiroth discovered his "mother" hidden in the town and went berserk, bringing the town to ashes, resulting in Tifa's father getting slain as well. After recovering from her injuries, Tifa became a member of AVALANCHE, an anti-Shinra resistance group, as well as the owner and tender of her own bar in Midgar, 7th Heaven. Since then, Tifa has become good friends with Cloud and his party, and has aided them on his missions often.</p> */}
                        {/* {this.props.info} */}
                        <Info />
                    </div>
                    <br></br>
                    <div className='blog-post'>

                        {feeds.map((feed, i) => {

                            return (

                                <div key={i} className="blog-box">
                                    <div className="blog-img">
                                        <img src={staticPostImg} alt='img' />
                                    </div>
                                    <div className="blog-content">
                                        {/* <p>{element.id}</p> */}
                                        <h3>{feed.p_username}</h3>
                                        <p>{feed.caption}</p>
                                    </div>
                                </div>
                            )
                            })}
                        <br></br>
                        <div className='user-posts'>
                            <Post />
                        </div>

                    </div>

                </div>
            </div>
        );
        
    }

}

const mapStateToProps = (state, ownProps) => {
    console.log('check state:', state)
    return state.auth.payload
}


export default (connect(mapStateToProps, { login })(UserProfile));