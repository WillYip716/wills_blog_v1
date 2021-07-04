import React from 'react'
import axios from 'axios';
import Moment from 'moment';
import TagLink from './taglink';


class Post extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            loading: true,
            posts: []
        };
    }

    tryRequire = (path) => {
        try {
            return require(`${path}`);
        } catch (err) {
            return null;
        }
    };

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

    componentDidUpdate(prevProps){
        if (this.props.match.params.id !== prevProps.match.params.id){
            axios.get('/post/'+this.props.match.params.id)
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
            <div className='centerColumn'>
            {this.state.loading        
                ? <h1>Post Loading</h1>
                : <div>
                    <h1 style={{textAlign:"center"}}>{unescape(this.state.posts.title)}</h1>
                    <hr/>
                    <img
                        className="card-img-top"
                        src={(this.tryRequire('../static/'+this.state.posts.imageUrl))?require('../static/'+this.state.posts.imageUrl):require('../static/backup.png')}
                        alt="slide"
                    />
                    <h5 style={{textAlign:"center", marginTop:"1rem"}}>{unescape(this.state.posts.description)}</h5>
                    <p style={{textAlign:"center"}}>Posted on: {Moment(this.state.posts.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    <hr/>
                    <p className="article">{unescape(this.state.posts.article)}</p>
                    <hr/>
                    <TagLink tags={this.state.posts.tags}/>
                  </div>
                  
            }                
            </div>
        )
    }
    
}
export default Post;