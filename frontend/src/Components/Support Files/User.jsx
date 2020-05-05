import React from 'react';
import axios from 'axios';

class User extends React.Component {
    constructor() {
        super()
        this.state = {
            imgURL: '',
            imgFile: null
        }
    }

    handleFileInput = (e) => {
        this.setState({
            imgFile: e.target.files[0]
        })
        console.log('check file:', e.target.files[0])
        console.dir(e.target)
    }

    handleFormSubmit = async(e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('avatar', this.state.imgFile)
        try {
            const response = await axios.post('http://localhost:3100/upload', data)
            console.log('submit:', response.data)
            this.setState({
                imgURL: response.data.imgURL
            })
        } catch (error) {
            console.log('error', error)
        }
    }
    render() {
        const {imgURL} = this.state
        return(
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type='file' onChange={this.handleFileInput}/>
                    <input type='submit' value='upload'/>
                </form>
                <img src={imgURL} alt='avatar' width='200px'/>
            </div>
        )
    }
}


export default User;