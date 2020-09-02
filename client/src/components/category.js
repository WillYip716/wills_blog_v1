import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import Moment from 'moment';

class Post extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            loading: true,
            posts: [],
            paginpage: 0
        };
    }

    componentDidMount() {
        axios.get('/categories/'+this.props.match.params.category)
          .then(res => {
            const posts = res.data.posts;
            this.setState((state) => ({
                loading: false,
                posts: posts,
                paginpage: res.data.pages
            }));  
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.category !== prevProps.match.params.category) {
            axios.get('/categories/'+this.props.match.params.category)
            .then(res => {
                const posts = res.data.posts;
              this.setState((state) => ({
                    loading: false,
                    posts: posts,
                    paginpage: res.data.pages
              }));  
          })
        }
    }

    /*render(){
        return(
            <div className="centerColumn">
            {this.state.loading        
                ? <h1>Hello i am loading</h1>
                : <div>
                    {this.state.posts.map((post) => (
                        <Link to={`/post/${post._id}`} key={post._id}>
                            <h1>{post.title}</h1>
                            <p>Posted on: {Moment(post.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</p>
                            <p>{post.description}</p>  
                        </Link>
                    ))}
                </div>     
            }
            
                
            </div>
        )
    }*/

    render(){
        let l = this.state.posts.length;
        Moment.locale('en');


        let items = [];
        for (var i = 0; i <l;i++) {
            items.push(
            <div className="card mb-8" key={this.state.posts[i]._id}>
                <div className="card-body">
                    <h3 class="card-title">{this.state.posts[i].title}</h3>
                    <p className="card-text">{this.state.posts[i].description}</p>
                    <Link className="btn btn-primary" to={`/post/${this.state.posts[i]._id}`}>Read More</Link>
                </div>
                <div className="card-footer text-muted">Posted on: {Moment(this.state.posts[i].timestamp).format('MMMM Do YYYY, h:mm:ss a')}</div>
            </div>
            )
        }
        return(
            <div>

            {this.state.loading        
                ? <h1>Hello i am loading</h1>
                :<div>
                    <h2>{this.props.match.params.category}</h2>
                    {items}
                </div>  
            }
            </div>
        )
    }  
    
}
export default Post;