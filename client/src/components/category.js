import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Moment from 'moment';
import Pagination from './pagination';
const queryString = require('query-string');

class Post extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            loading: true,
            posts: [],
            paginpage: 0,
            currentPage: 1
        };
    }

    componentDidMount() {
        var params = queryString.parse(this.props.location.search);
        var queryVar = "";
        var stateCurrent = 1;
        if(params.page){
            queryVar = "?page="+params.page;
            stateCurrent=params.page;
        }
        axios.get('/categories/'+this.props.match.params.category + queryVar )
        .then(res => {
            const posts = res.data.posts;
            this.setState((state) => ({
                loading: false,
                posts: posts,
                paginpage: res.data.pages,
                currentPage: stateCurrent
            }));  
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.category !== prevProps.match.params.category) {
            var params = queryString.parse(this.props.location.search);
            var queryVar = "";
            var stateCurrent = 1;
            if(params.page){
                queryVar = "?page="+params.page;
                stateCurrent=params.page;
            }
            axios.get('/categories/'+this.props.match.params.category + queryVar )
            .then(res => {
                const posts = res.data.posts;
                this.setState((state) => ({
                    loading: false,
                    posts: posts,
                    paginpage: res.data.pages,
                    currentPage: stateCurrent
                }));  
            })
        }
    }


    render(){
        let l = this.state.posts.length;
        Moment.locale('en');

        let items = [];
        if(l){
            for (var i = 0; i <l;i++) {
                items.push(
                <div className="card mb-8" key={this.state.posts[i]._id}>
                    <Link to={`/post/${this.state.posts[i]._id}`}>
                        <img
                            className="card-img-top"
                            src={(this.state.posts[i].imageUrl)?require('../static/'+this.state.posts[i].imageUrl):require('../static/backup.png')}
                            alt="slide"
                        />
                    </Link>
                    <div className="card-body">
                        <h3 className="card-title">{unescape(this.state.posts[i].title)}</h3>
                        <p className="card-text">{unescape(this.state.posts[i].description)}</p>
                        <Link className="btn btn-primary" to={`/post/${this.state.posts[i]._id}`}>Read More</Link>
                    </div>
                    <div className="card-footer text-muted">Posted on: {Moment(this.state.posts[i].timestamp).format('MMMM Do YYYY, h:mm:ss a')}</div>
                </div>
                )
            }
        }
        else{
            items.push(<h1>This category does not exists...yet</h1>);
        }
        
        return(
            <div>

            {this.state.loading        
                ? <h1>Hello i am loading</h1>
                :<div>
                    <h1 style={{textAlign:"center"}}>{this.props.match.params.category.toUpperCase()}</h1>
                    <hr/>
                    {items}
                    {parseInt(this.state.paginpage)>1 ? 
                        <Pagination pages={parseInt(this.state.paginpage)} category={"/category/" + this.props.match.params.category +"?"} page={parseInt(this.state.currentPage)}/> 
                        : ""
                    }
                </div>  
            }
            </div>
        )
    }  
    
}
export default Post;