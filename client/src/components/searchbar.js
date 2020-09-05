import React from 'react'

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
        this.props.history.push('/search?keyword='+this.state.value);
        event.preventDefault();
    }


    render(){
        
        return(
            <form onSubmit={this.handleSubmit}>
                
                <input type="text" value={this.state.value} onChange={this.handleChange} />        
                
                <input type="submit" value="Search" />
            </form>
        )
    }  
    
}

export default SearchBar;