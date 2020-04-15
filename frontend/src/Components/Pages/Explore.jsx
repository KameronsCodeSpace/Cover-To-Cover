import React from 'react';

function Explore() {
    return (
        <div>
           
            <div id="results"></div>
            
        </div>
    );
}

export default Explore;

 {/* <div id="search-container" className="container">
            <div id="search" className="card card-body bg-light mb-2">
                <h4>Search Bar</h4>
                <form id="search-form">
                    <div className="form-group">
                        <input type="text" id="search-input"
                        className="form-control mb-3" placeholder="Search Term..." />
                    </div>
                    <div className="form-check form-check-inline">
                        Sort By:
                        <input className="form-check-input m1-2"
                        type="radio" name="sortby" value="relevance" checked />
                    <label className="form-check-label">
                        Relevance
                    </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio"
                        name="sortby" value="new" />
                        <label className="form-check-label">
                            Latest
                        </label>
                    </div>
                    <h5 className="mt-2">Limit: </h5>
                    <div className="form-group">
                        <select name="limit" id="limit"
                        className="form-control">
                            <option calue="5">5</option>
                            <option calue="10">10</option>
                            <option calue="25" selected>25</option>
                            <option calue="50">50</option>
                            <option calue="100">100</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-dark
                    btn-block mt-4">Search</button>
                </form>
            </div>
        </div> */}