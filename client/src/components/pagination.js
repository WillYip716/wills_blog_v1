import React from 'react';


class Pagination extends React.Component {
    //this.props.name

    render(){
        return (

            <div >  
                <a className="prev">{'<'}</a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
                <a className="next">{'>'}</a>
            </div>  
    
        )
    }
}


export default Pagination;