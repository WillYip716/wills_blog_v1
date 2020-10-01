import React from 'react'
import {Link} from 'react-router-dom';

function Spotlight(props){

    return(
        <div className="card my-4">
        <h3 className="card-header">Spotlight</h3>
            <div className="card-body">
                <Link to={`/post/5f7530007c8b830f7a8306a2`}>
                    <p>I Care About Not Caring!</p>
                </Link>
                <Link to={`/post/5f73b08c57b32910291fdbc4`}>
                    <p>NFL 2020 Week 4 Picks</p>
                </Link>
            </div>
        </div>
    )
}

export default Spotlight;
