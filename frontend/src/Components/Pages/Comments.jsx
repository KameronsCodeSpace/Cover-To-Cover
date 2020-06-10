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
    
    render() {
        const { postComments, comment } = this.state
        return(
            <div>
                <Navbar/>
                   <div>
                       {postComments.map(statement => {
                           console.log(statement)
                           return (
                               <div>
                                    <h3>{statement.commentors_name}</h3>
                                    <ol>
                                        <li>{statement.comment}</li>
                                    </ol>
                               </div>
                                
                           )
                       })}
                   </div>
                   <form onSubmit={this.handleForm}>
                       <textarea value={comment} 
                            onChange={this.handleComment}>
                           
                       </textarea>
                       <input type='submit' value='send'/>
                   </form>
            </div>
        )
    }
}

export default Comments;
