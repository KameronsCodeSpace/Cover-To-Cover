
import React from "react";
import axios from "axios";

class Explore extends React.Component {
    constructor() {
        super();
        this.state = {
            data:[]
        }
    }

    async componentDidMount() {
        try {
            let blogs = await axios.get(`http://localhost:3100/blog/all`);
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
                {
                data.map(element => {
                    return (
                        <div className='blog'>
                            <p>{data.payload.p_username}</p>
                            <p>{data.payload.caption}</p>
                        </div>
                    );
                })
            }
            </div>
        );
    }
}
export default Explore;