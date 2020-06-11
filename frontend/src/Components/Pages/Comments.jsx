import React from 'react';
import axios from "axios";

import Navbar from '../Support Files/Navbar';

class Comments extends React.Component { 
   
    constructor(props) {
         console.log('pppp', props)
        super(props)
        this.state = {
            postComments: [],
            comment: '', 
            c_post_id: 0,
            commentors_name:''
        }
    }

    async componentDidMount() {
        console.log('props!!!!', this.props.location.state.storyProps.id)
        const { storyProps }  = this.props.location.state 

        try {
          const url = `/comments/blog/` 
          const comments = await axios.get(url + storyProps.id)
          console.log('comments', comments.data.payload)
            this.setState({
                postComments:  comments.data.payload
            })  
        } catch (error) {
            console.log('error', error)
        }
    }

    handleComment = (e) => {
        console.log('text', e.target.value)
        this.setState({
            comment: e.target.value
        })
    }

    handleForm = async(e) => {
        e.preventDefault()
        try {
            const { comment, commentors_name, c_post_id } = this.state
            const url = `/comments/new`
            const body = {
                comment: comment,
                commentors_name: commentors_name,
                c_post_id: c_post_id
            }
            await axios.post(url, body)
                this.setState({
                   comment: comment,
                   commentors_name: commentors_name,
                    c_post_id: c_post_id
                })
        } catch (error) {
            console.log('error', error)
        }
    }
    
    handleCommentor = (e) => {
        console.log('commentor', e.target.value)
        this.setState({
            commentors_name: e.target.value
        })
    }

    handlePostId = (e) => {
        console.log('post id', e.target.value)
        this.setState({
            c_post_id: e.target.value
        })
    }



    render() {
        const { postComments, comment, commentors_name, c_post_id } = this.state
        return(
            <div className='comments-container'>
                <Navbar/>
                   <div className='comments'>
                       {postComments.map(statement => {
                           
                           return (
                               <div className = 'statement'>
                                    <h3>{statement.commentors_name}</h3>
                                    <ol>
                                        <li>{statement.comment}</li>
                                    </ol>
                               </div>
                                
                           )
                       })}
                   </div>
                   <br></br>

                   <form onSubmit={this.handleForm} className='comment-form'>
                        <label>comment author's name :</label>
                        <br></br>
                        <input
                            className='commentors-name' 
                            type='text' 
                            placeholder='Enter commentors name'
                            onChange={this.handleCommentor}
                            value={commentors_name}
                        />
                        
                       <br></br>
                       <label>post# :</label>
                            <br></br> 
                        <input
                            className='post-id' 
                            type='number' 
                            onChange={this.handlePostId}
                            value={c_post_id}
                        />
                        <br></br>
                       
                        <label>Comment : </label>
                             <br></br>
                        <textarea value={comment} 
                            onChange={this.handleComment}> 
                        </textarea>
                       
                       <br></br>
                       <input type='submit' value='send'/>
                   </form>
                   {/* <div>
                       <h3>{commentors_name}</h3>
                       <div>{comment}</div>
                   </div> */}
            </div>
        )
    }
}

export default Comments;
