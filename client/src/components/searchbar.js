import React from 'react'
import { Redirect} from "react-router";

class SearchBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: '',redirect:false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {    
        this.setState({value: event.target.value});  
    }
    
    handleSubmit(event) {
        this.setState({redirect: true});
    }


    render(){
        if (this.state.redirect === true) {
            return <Redirect to={'/search?keyword='+this.state.value} />
        }

        
        return(
            <form onSubmit={this.handleSubmit}>
                
                <input type="text" value={this.state.value} onChange={this.handleChange} />        
                
                <input type="submit" value="Go" />
            </form>
        )
    }  
    
}

export default SearchBar;