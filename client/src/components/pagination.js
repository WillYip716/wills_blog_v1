import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


class Pagination extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            pages: this.props.pages,
            page: this.props.page,
            category: this.props.category,
        };
    }

    render(){
        var items= [];
        var urlHolder;
        for (var i = 1; i <= this.state.pages;i++) {
            if(i !== this.state.page){
                urlHolder = this.state.category + "page=" + i;
            }
            else{
                urlHolder = "";
            }
            items.push(
                <Dropdown.Item key={"pageNUm"+this.state.page} href={urlHolder}>{i}</Dropdown.Item>
            )
        }



        return (

            <div className="pagenav">
                    {this.state.page === 1 ? 
                         ""
                        : <a className="pagenavcomp" href={this.state.category + "page=" + (this.state.page-1)}>{'<'}</a>
                    }
                    <Dropdown className="pagenavcomp">
                        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                            {this.state.page}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {items}
                        </Dropdown.Menu>
                    </Dropdown>
                    <p className="pagenavcomp">{"/ "+this.state.pages}</p>
                    {this.state.page === this.state.pages ? 
                         ""
                        : <a className="pagenavcomp" href={this.state.category + "page=" + (this.state.page+1)}>{'>'}</a> 
                    }
            </div>  
    
        )
    }
}


export default Pagination;