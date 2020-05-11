import React from 'react';
import axios from 'axios';

class Info extends React.Component{
    constructor(){
        super()
        this.state = {
            updatedInfo:'',
           click: false
        }
    }

     handleClick = (e) => {
        this.setState({
            click: true
        })
    }

      handleTextArea = (e) => {
        this.setState({
            updateInfo: e.target.value
        })
    }

    handleForm = async(e) => {
        e.preventDefault()
        const id = this.props.id
        console.log('id', id)
        // const data = {
        //     updatedInfo: this.state.
        // }
        try {
            const updateUrl = `http://localhost:3100/users/${id}`
            const editInfo = await axios.patch(updateUrl, [this.state.updatedInfo])
            console.log('edit info', editInfo)
            this.setState({
                updateInfo: editInfo
            })
        } catch (error) {
            
        }
    }

    render() {
        return(
            <div>
                <a onClick={this.handleClick}>Edit
                   
                </a>
            </div>
        )
    }
}

export default Info