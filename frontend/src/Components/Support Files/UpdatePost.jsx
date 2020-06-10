import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

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
                <Link className="edit" to=''>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLCHaJ7AGgEGx2eI8AeWjdiaux6BBNyZZaUZHMDx0o7oQBvE-2&usqp=CAU' alt='' width='10px'/>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(UpdatePosts);