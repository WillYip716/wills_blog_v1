import React from 'react'
import { withRouter } from "react-router";

class SearchBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {    
        this.setState({value: event.target.value});  
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.history.push('/search?keyword='+this.state.value);
        this.setState({value: ""});  
    }

    render(){
        
        return(
            <form onSubmit={this.handleSubmit}>
                
                <input type="text" value={this.state.value} onChange={this.handleChange} />        
                
                <input type="submit" value="Go" />
            </form>
        )
    }  
    
}

export default withRouter(SearchBar);
