import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';


class UpdatePosts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            click: false,
        }
    }

    handleClick = () => {
       console.log('click')
       this.setState({
           click: true
       }) 
    }

    render() {
        return(
            <div>
        
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(UpdatePosts);