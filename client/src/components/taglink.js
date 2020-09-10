import React from 'react';
import {Link} from 'react-router-dom';


function TagLinks(props){
    const listItems = props.tags.map((tag) =>    
        <Link to={`/search?keyword=`+tag} key={tag} className="taglinks">
            {tag}
        </Link>
    );
    
    return(
        <div>
            <p style={{textAlign:"center",fontWeight:"bold"}}>Tags</p>
            {listItems}
        </div>
    )
}

export default TagLinks;