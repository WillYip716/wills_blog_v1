import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


class Pagination extends React.Component {


    render(){
        var items= [];
        var urlHolder;
        for (var i = 1; i <= this.props.pages;i++) {
            if(i !== this.props.page){
                urlHolder = this.props.category + "page=" + i;
            }
            else{
                urlHolder = "";
            }
            items.push(
                <Dropdown.Item key={"pageNUm"+this.props.page} href={urlHolder}>{i}</Dropdown.Item>
            )
        }



        return (

            <div className="pagenav">
                    {this.props.page === 1 ? 
                         ""
                        : <a className="pagenavcomp" href={this.props.category + "page=" + (this.props.page-1)}>{'<'}</a>
                    }
                    <Dropdown className="pagenavcomp">
                        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                            {this.props.page}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {items}
                        </Dropdown.Menu>
                    </Dropdown>
                    <p className="pagenavcomp">{"/ "+this.props.pages}</p>
                    {this.props.page === this.props.pages ? 
                         ""
                        : <a className="pagenavcomp" href={this.props.category + "page=" + (this.props.page+1)}>{'>'}</a> 
                    }
            </div>  
    
        )
    }
}


export default Pagination;