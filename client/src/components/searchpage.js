import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Moment from 'moment';
const queryString = require('query-string');



class SearchPage extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            loading: true,
            posts: [],
            paginpage: 0
        };
    }

    

    componentDidMount() {
        var params = queryString.parse(this.props.location.search);
        var queryVar = "";
        if(params.keyword){
            if(params.page){
                queryVar = "?keyword="+params.keyword + "&page=" + params.page;
            }
            else{
                queryVar = "?keyword="+params.keyword;
            }
        }
        if(queryVar){
            axios.get('/search'+queryVar)
            .then(res => {
                const posts = res.data.posts;
                this.setState((state) => ({
                    loading: false,
                    posts: posts,
                    paginpage: parseInt(res.data.pages)
                }));  
            })
        }  
    }

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
    
export default SearchPage;