import React from 'react';
import axios from 'axios';

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cap: '',
      file: 'image',
      username:'Tester1'      
    }
  }

  //Handle for files

  handleInput = (e) => {
    this.setState ({ 
      [e.target.name]: 
      e.target.value })
    }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { cap , file , username} = this.state;
    try {
      const post = await axios.post(`/blog/new`, { file_src: file, caption: cap, p_username: username })
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

          <input id="captionInput" type='text' name='cap' placeholder = 'Start a discussion' onChange={this.handleInput} />

          {/* input for file */}

          <input id="UploadButton"  type='submit' value='Post'/>
        </form>
      </div>
    )

  }
}

export default Post;