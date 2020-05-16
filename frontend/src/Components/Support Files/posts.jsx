import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cap: '',
      image: null
      // file: null,
    }
  }
  //Handle for files
  handleInput = (e) => {
    this.setState({
      [e.target.name]:
        e.target.value
    })
  }
  handleFileInput = async (e) => {
    this.setState({
      image: e.target.files[0],
    })
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { cap } = this.state;
    const { currentUser } = this.props;
    // console.log('User', currentUser)
    const data = new FormData();
    data.append('image', this.state.image);
    try {
      const res = await axios.post ('/upstream', data) 
      const post = await axios.post(`/blog/new`, { file_src: res.data.fileURL, caption: cap, p_username: currentUser })
      console.log(res.data.fileURL)
      // console.log(post)
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <div className='user-post-form'>
        <p>Create a post</p>
        <form onSubmit={this.handleSubmit}>
          <textarea id="captionInput" name='cap' placeholder='Start a discussion' onChange={this.handleInput} />
          <br />
          <input type='file'  onChange={this.handleFileInput} />
          <br />
          <input id="UploadButton" type='submit' value='Post' />
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.auth.payload.username
})
export default connect(mapStateToProps)(Post);