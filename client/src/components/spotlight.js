import React from 'react'
import {Link} from 'react-router-dom';

function Spotlight(props){

    let postCodes = ["5fa0e73f9c47bd31fb4ccb39","5f7530007c8b830f7a8306a2","5f767464bdbaed1359ca664c"];
    let postTitle = ["Whiplash: Carl Tanner","I Care About Not Caring!","Burning: A Rich Mystique"];
    let items = [];
    for (var i = 0; i <postCodes.length;i++) {
        items.push(
            <Link key={postCodes[i]} to={`/post/` + postCodes[i]}>
                <p>{unescape(postTitle[i])}</p>
            </Link>
        )
    }
    return(
        <div className="card my-4">
        <h3 className="card-header">Spotlight</h3>
            <div className="card-body">
                {items}
            </div>
        </div>
    )
}

export default Spotlight;
