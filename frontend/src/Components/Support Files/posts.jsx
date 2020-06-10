import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Dropdown from '../Support Files/Dropdown';
import Navbar from '../Support Files/Navbar'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cap: '',
      image: null ,
      questions: [],
      questOptions:[],
      questchoice:''
      // file: null,
    }
  }

  async componentDidMount () {
    let questResponse = await axios.get('/questions')

    let questArr = []

    for (let i = 0; i < questResponse.data.payload.length; i++) {
        questArr.push(questResponse.data.payload[i].starter)
    }

    this.setState({
      questions: questArr
    })
    this.populateSelect();
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
      const res = await axios.post('/upstream', data)
      const post = await axios.post(`/blog/new`, { file_src: res.data.fileURL, caption: cap, p_username: currentUser })
      console.log(res.data.fileURL)
      // console.log(post)
    } catch (err) {
      console.log(err)
    }
  }

  populateSelect = () => {
    const { questions } = this.state 
    let questOpts = [];
    questOpts.push(<option value={''} key={''}>Choose starter question</option>)

    for (let i = 0; i < questions.length; i++) {
      questOpts.push(<option value={i + 1} key={questions[i]}>{questions[i]}</option>);
    }

    this.setState({
      questOptions: questOpts,
      questchoice:`${questOpts[0].props.value}` 
    })
  }
  render() {
    let {questOptions} = this.state;
    

    const items = [
      {
        id: 1,
        value: 'Can you tell me about a person who has been kindest to you in your life?',
      },
      {
        id: 2,
        value: 'What are some of the most important lessons you’ve learned in life?',
      },
      {
        id: 3,
        value: 'For future generations of your family listening to this years from now: is there any wisdom you’d want to pass on to them? What would you want them to know?',
      },
      {
        id: 4,
        value: 'Do you remember any songs that you used to sing to her/him? Can you sing them now?',
      },
      {
        id: 5,
        value: 'Can you describe the moment when you saw your child for the first time?',
      },
    ];

    return (
      <div className='user-post-form'>
         <Navbar />
        <h1>Create a Story</h1>
        <br />
        {/* <div className='dropdown-container'>
          <Dropdown title="Select a Question" items={items} multiSelect />
        </div> */}
        <form onSubmit={this.handleSubmit}>
          <input placeholder='Title'></input>
          <br />
          <br />
          <select name='questionOptions' onChange={this.handleInput}>
          {questOptions}
          </select>
          <br />
          <textarea id="captionInput" name='cap' placeholder='Start a discussion' onChange={this.handleInput} />
          <br />
          <input type='file' onChange={this.handleFileInput} />
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