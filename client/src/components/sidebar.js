import React from "react";
import SearchBar from './searchbar';
import Spotlight from './spotlight';

function Sidebar(props){

    return(
        <div className="col-md-4">
            <SearchBar/>
            <Spotlight/>
        </div>
    )
}

export default Sidebar;