import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cap: '',
      file: 'image',
    }
  }

  //Handle for files

  handleInput = (e) => {
    this.setState({
      [e.target.name]:
        e.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { cap, file } = this.state;
    const { currentUser } = this.props;

    try {
      const post = await axios.post(`/blog/new`, { file_src: file, caption: cap, p_username: currentUser })
      console.log(post)
    } catch (err) {
      console.log(err)
    }

  }

  render() {
    return (
      <div>
        <p>Create a post</p>
        <form onSubmit={this.handleSubmit}>

          <input id="captionInput" type='text' name='cap' placeholder='Start a discussion' onChange={this.handleInput} />

          {/* input for file */}

          <input id="UploadButton" type='submit' value='Post' />
        </form>
      </div>
    )

  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.payload.username
})

export default connect(mapStateToProps)(Post);