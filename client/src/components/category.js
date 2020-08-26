import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'


class Post extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            loading: true,
            posts: []
        };
    }

    componentDidMount() {
        axios.get('/categories/'+this.props.match.params.category)
          .then(res => {
            const posts = res.data;
            this.setState((state) => ({
                loading: false,
                posts: posts
            }));  
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.category !== prevProps.match.params.category) {
            axios.get('/categories/'+this.props.match.params.category)
            .then(res => {
              const posts = res.data;
              this.setState((state) => ({
                  loading: false,
                  posts: posts
              }));  
          })
        }
    }

    render(){
        return(
            <div>
            {this.state.loading        
                ? <h1>Hello i am loading</h1>
                : <div>
                    {this.state.posts.map((post) => (
                        <Link to={`/post/${post._id}`} key={post._id}>
                            <h1>{post.title}</h1>
                            <p>{post.description}</p>
                            <p>{post.timestamp}</p>
                        </Link>
                    ))}
                </div>     
            }
            
                
            </div>
        )
    }
    
}
export default Post;