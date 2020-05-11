import React from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';

class User extends React.Component {
    constructor(props) {
        console.log('props:', props)
        super(props)
        this.state = {
            imgURL: '',
           imgFile: null,
           newAvatar: false
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
        
        console.log('data!:', this.state.imgFile )
        try {
            const response = await axios.post('http://localhost:3100/upload', data)
            console.log('submit:', response.data)
            if (this.props.state.avatar === null) {
                this.setState({
                    imgURL: response.data.imgURL,
                })
            } 
            
            // this.setAvatar(response.data.imgURL)
        } catch (error) {
            console.log('error', error)
        }
    
    }

//    setAvatar = (imgURL) => {
//        console.log('try:', this.props.state.avatar)
//         if(this.props.state.avatar ==='null') {
//             this.props.state.avatar += imgURL
//         } else {
//             return imgURL
//         }
//     }

    render() {
        const {imgURL} = this.state
        return(
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type='file' 
                    onChange={this.handleFileInput} 
                    style={{display:'none'}}
                    ref= {fileInput => this.fileInput = fileInput}
                    />
                    <button onClick= {() => this.fileInput.click()}>Choose picture</button>
                    <input type='submit' value='upload'/>
                </form>
                
                <img src={imgURL} alt='avatar' width='200px'/>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     console.log('check state:', state)
//     return {

//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
        
//     }
   
// }

// export default (connect(mapStateToProps, mapDispatchToProps)(UserAvatar));

export default User;