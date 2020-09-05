import React from "react";
import SearchBar from './searchbar';

function Sidebar(){

    return(
        <div className="col-md-4">
            <div className="card my-4">
                <h3 className="card-header">Search</h3>
                <div className="card-body">
                    <SearchBar/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;