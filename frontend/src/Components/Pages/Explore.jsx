import React from "react";
import axios from "axios";

import Navbar from '../Support Files/Navbar'

class Explore extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        try {
            let blogs = await axios.get('/blog/all');
            this.setState({
                data: blogs.data.payload
            });
            console.log("state:", this.state);
        } catch (err) {
            console.log("ERROR:", err);
        }


    }

    render() {
        const { data } = this.state;
        console.log("render method data:", data);
        return (
            <div id="stories_explore">
                <Navbar />

                {

                    data.map(element => {
                        return (
                            <div className='blog'>
                                <p>{element.id}</p>
                                <p>{element.p_username}</p>
                                <p>{element.caption}</p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
export default Explore;