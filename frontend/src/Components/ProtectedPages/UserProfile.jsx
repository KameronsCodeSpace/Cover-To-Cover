import React from 'react';
// import User from '../Support Files/User';
import Navbar from '../Support Files/Navbar'
import { connect } from 'react-redux';
import axios from 'axios';

class UserProfile extends React.Component {
    constructor(props) {
        console.log('state????:', props)
        super(props)
        this.state = {
            avatar: '',
           imgFile: null,
           newAvatar: false
        }
    }

    // async componentDidUpdate (prevProps) {
    //     if (this.props.avatar !== prevProps.avatar) {
    //        this.handleFormSubmit(this.state.im)
    //     }
    // }

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
        
        console.log('data!:', this.state.imgFile )
        try {
            const response = await axios.post('http://localhost:3100/upload', data)
            console.log('submit:', response.data)
            // if (this.props.state.avatar === null) {
                this.setState({
                    avatar: response.data.imgURL,
                })
            // } 
            
            // this.setAvatar(response.data.imgURL)
        } catch (error) {
            console.log('error', error)
        }
    
    }

 
    render() {
        const {avatar} = this.state
        return (
            <div>
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
                    <img src={avatar} alt='avatar' width='200px'/>
                    <div> Region:{this.props.region}</div>
                    <div>Info: {this.props.info}</div>
                </div>
            </div>
        );
    }
    
}

const mapStateToProps = (state, ownProps) => {
    console.log('check state:', state)
    console.log('own')
    
    return state.auth.payload
}

const mapDispatchToProps = (dispatch) => {
    // return  this.state.avatar 

   
}

export default (connect(mapStateToProps, mapDispatchToProps)(UserProfile));