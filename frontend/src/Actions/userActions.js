import { UPLOAD_AVATAR} from './types';

export const  UPLOAD_AVATAR = () => (dispatch)  =>{
  dispatch({
        type: UPLOAD_AVATAR,
    })

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