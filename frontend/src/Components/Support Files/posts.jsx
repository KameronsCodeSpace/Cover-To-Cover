import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cap: '',
      file: 'image'
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
      file: e.target.files[0],
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { cap, file } = this.state;
    const { currentUser } = this.props;
    console.log('User', currentUser)

    const data = new FormData();
    data.append('image', this.state.file);

    try {
      const post = await axios.post(`/blog/new`, { file_src: file, caption: cap, p_username: currentUser })
      console.log(post)
    } catch (err) {
      console.log(err)
    }

  }


  render() {
    return (
      <div className='user-post-form'>
        <p>Create a post</p>
        <form onSubmit={this.handleSubmit}>

          {/* <input id="captionInput" className='large-form' type='text' name='cap' placeholder = 'Start a discussion' onChange={this.handleInput} /> */}

          {/* input for file */}
          <textarea id="captionInput" name='cap' placeholder='Start a discussion' onChange={this.handleInput} />
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