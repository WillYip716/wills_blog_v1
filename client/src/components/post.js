import React from 'react'
import axios from 'axios';
import Moment from 'moment';

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
            <div class='centerColumn'>
            {this.state.loading        
                ? <h1>Post Loading</h1>
                : <div>
                    <h1 style={{textAlign:"center"}}>{this.state.posts.title}</h1>
                    <p style={{textAlign:"center"}}>Posted on: {Moment(this.state.posts.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    <p>{unescape(this.state.posts.article)}</p>
                  </div>
                  
            } 
            </div>
        )
    }
    
}
export default Post;