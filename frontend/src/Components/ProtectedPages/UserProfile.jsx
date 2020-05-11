import React from 'react';
// import User from '../Support Files/User';
import Navbar from '../Support Files/Navbar'
import { connect } from 'react-redux';
import axios from 'axios';
import Post from '../Support Files/posts';
import { login } from '../../Actions/authActions';
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
        //    displayPosts: false
        }
    }

    //getting all posts from the user
  async componentDidMount() {
    const id = this.props.id
    console.log('user', id)
   try {
      let url = `http://localhost:3100/users/${id}`
      const userPost = await axios.get(url)
      
      console.log('user post', userPost.data.payload)
    
      this.setState({
        feeds: userPost.data.payload,
        // displayPosts: true
      })
   
    } catch (error) {
      console.log('ERROR', error)
    }
  }

    handleFileInput = (e) => {

        this.setState({
            imgFile: e.target.files[0]
        })
        console.log('check file:', e.target.files[0])
        // console.dir(e.target)
    }

   handleFormSubmit = async(e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('avatar', this.state.imgFile)
        data.append('id', this.props.id)

        
        console.log('data!:', this.state.imgFile )
        try {
            const response = await axios.post('http://localhost:3100/upload', data)
            console.log('submit:', response.data)
            this.props.login({
                username: this.props.username,
                password: window.localStorage.getItem('password')
            })
            console.log('change', response)
                this.setState({
                    avatar: response.data.imgURL,
                })
            } catch (error) {
            console.log('error', error)
        }
    }

 
    render() {
        const {avatar, feeds} = this.state
        return (
            <div className='user-profile'>
                <Navbar/>
                <div className="inner-pages">
                    {/* <h1>UserProfile Page</h1> */}
                    <h2>{this.props.username}</h2>
                    <form onSubmit={this.handleFormSubmit}>
                        <input type='file' 
                            onChange={this.handleFileInput} 
                            style={{display:'none'}}
                            ref= {fileInput => this.fileInput = fileInput}
                        />
                        <button onClick= {() => this.fileInput.click()}>Choose picture</button>
                        <input type='submit' value='upload'/>
                    </form>

                    <img src={avatar || this.props.avatar} alt='' width='200px'/>
                    {/* <ActivityBar props={this.props}/> */}
                    <div className='region'>Region:{this.props.region}</div>
                    <div>Info: {this.props.info}
                        <Info/>
                    </div>
                        <br></br>
                    <div >
                        {feeds.map((feed,i) => {

                            return(
                                <div key={i}>
                                    <img src= {feed.avatar} width='100px'/>
                                    <p>{feed.p_username}</p>
                                    <div> Post:{feed.caption} </div>
                                    <p>Comment: {feed.comment}</p>
                                </div>
                            )
                        })} 
                    </div>
                    <br></br>
                    <Post/>
                </div>
                
            </div>
        );
    }
    
}

const mapStateToProps = (state, ownProps) => {
    console.log('check state:', state)
return state.auth.payload
}

// const mapDispatchToProps = (avatar, dispatch) => {
    
// }

export default (connect(mapStateToProps, {login})(UserProfile));