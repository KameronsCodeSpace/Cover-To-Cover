import React from 'react';
import axios from 'axios';


class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null,
    }
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleFileInput = async (event) => {
    this.setState({
      image: event.target.files[0],
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('image', this.state.image);
    try {
      const res = await axios.post('/upload', data);
      const post = axios.post(`/blog`, { })
    } catch (err) {
      console.log(err)
    }

  }



export default Item;