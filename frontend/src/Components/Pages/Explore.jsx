import React from "react";
import axios from "axios";

import Navbar from '../Support Files/Navbar'
import staticPostImg from '../../img/theTower.jpeg';

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
            <div>
                <Navbar />

                {

                    data.map(element => {
                        return (
                            <div className='blog-post'>
                                <div className="blog-box">
                                    <div className="blog-img">
                                        <img src={staticPostImg} alt='img' />
                                    </div>
                                    <div className="blog-content">
                                        {/* <p>{element.id}</p> */}
                                        <h3>{element.p_username}</h3>
                                        <p>{element.caption}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
export default Explore;