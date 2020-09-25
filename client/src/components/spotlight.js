import React from 'react'
import {Link} from 'react-router-dom';

function Spotlight(props){

    return(
        <div className="card my-4">
        <h3 className="card-header">Spotlight</h3>
            <div className="card-body">
                <Link to={`/post/5f6cfdaa38fcc21304ee6899`}>
                    <p>NFL 2020 Week 3 Picks</p>
                </Link>
                <Link to={`/post/5f6a93514ee5804930706b4d`}>
                    <p>Magic Minshew</p>
                </Link>
            </div>
        </div>
    )
}

export default Spotlight;
