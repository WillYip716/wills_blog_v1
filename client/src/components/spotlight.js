import React from 'react'
import {Link} from 'react-router-dom';

function Spotlight(props){

    return(
        <div className="card my-4">
        <h3 className="card-header">Spotlight</h3>
            <div className="card-body">
                <Link to={`/post/5f6265bc26f3e70cd688e106`}>
                    <p>NFL 2020 Week 2</p>
                </Link>
            </div>
        </div>
    )
}

export default Spotlight;
