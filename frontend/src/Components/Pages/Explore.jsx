import React from "react";
import axios from "axios";

import Navbar from '../Support Files/Navbar'
import staticPostImg from '../../img/theTower.jpeg';

class Explore extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            searchBar: ''
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

    searchChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const filteredData = this.state.data.filter(
            (element) => {
                return element.caption.toLowerCase().indexOf(this.state.
                        searchBar.toLowerCase()) !== -1;
            }
        )

        console.log("render method data:", filteredData);
        return (
            <div>
                <Navbar />
                <div className="inner-pages">
                    <input type="text"
                        name="searchBar"
                        id="searchBar"
                        placeholder="Search"
                        onChange={this.searchChange}
                    />
                    <div className='blog-post'>

                        {
                            filteredData.map(element => {
                                return (
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
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default Explore;