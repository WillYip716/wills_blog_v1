import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


class Pagination extends React.Component {
    //this.props.name

    constructor(props){
        super(props);
        this.state ={
            loading: true,
            title: "",
            article: "",
            timestamp: "",
            published: ""
        };
    }


    render(){
        return (

            <div className="pagenav">
                <div style={{margin:"auto"}}>
                    <a className="prev">{'<'}</a>
                    <Dropdown>
                        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                            1
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">2</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">3</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">4</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <p style={{display:"inline-block"}}>{"/" + "10"}</p>
                    <a className="next">{'>'}</a>
                </div>  
                
            </div>  
    
        )
    }
}


export default Pagination;