import React from 'react'
import axios from 'axios';


class Post extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            loading: true,
            posts: []
        };
    }

    componentDidMount() {
        axios.get('/post/'+this.props.match.params.id)
          .then(res => {
            const posts = res.data;
            this.setState((state) => ({
                loading: false,
                posts: posts
            }));  
          })
    }

    render(){
        return(
            <div>
            {this.state.loading        
                ? <h1>Post Loading</h1>
                : <div>
                    <h1>{this.state.posts.title}</h1>
                    <p>{unescape(this.state.posts.article)}</p>
                    <p>{this.state.posts.timestamp}</p> 
                  </div>
                  
            } 
            </div>
        )
    }
    
}
export default Post;