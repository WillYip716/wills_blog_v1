import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
    
    return(
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/category/sports'>Sports</Link>
            </li>
            <li>
                <Link to='/category/lifestyle'>Lifestyle</Link>
            </li>
            <li>
                <Link to='/category/economics'>Economics</Link>
            </li>
        </ul>
    )   
}

export default Navbar;