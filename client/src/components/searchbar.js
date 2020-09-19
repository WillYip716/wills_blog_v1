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
            <div className="card my-4">
                <h3 className="card-header">Search</h3>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}> 
                        <input style={{width:"80%"}} type="text" value={this.state.value} onChange={this.handleChange} placeholder="basketball,movies..."/>        
                        <input style={{width:"20%"}} type="submit" value="Go" />
                    </form>
                </div>
            </div>
        )
    }  
    
}

export default withRouter(SearchBar);
