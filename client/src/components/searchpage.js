import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Moment from 'moment';
import Pagination from './pagination';
const queryString = require('query-string');



class SearchPage extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            loading: true,
            posts: [],
            paginpage: 0,
            currentPage: 1,
            keyW: ""
        };
    }

    

    componentDidMount() {
        var params = queryString.parse(this.props.location.search);
        var queryVar = "";
        var stateCurrent = 0;
        var stateKey = "";
        if(params.keyword){
            if(params.page){
                queryVar = "?keyword="+params.keyword + "&page=" + params.page;
                stateKey=params.keyword;
                stateCurrent=params.page;
            }
            else{
                queryVar = "?keyword="+params.keyword;
                stateKey=params.keyword;
                stateCurrent=1;
            }
        }
        if(queryVar){
            axios.get('/search'+queryVar)
            .then(res => {
                const posts = res.data.posts;
                this.setState((state) => ({
                    loading: false,
                    posts: posts,
                    paginpage: parseInt(res.data.pages),
                    currentPage: stateCurrent,
                    keyW: stateKey
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
                    <h3 className="card-title">{this.state.posts[i].title}</h3>
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
            {parseInt(this.state.paginpage)>1 ? 
                <Pagination pages={this.state.paginpage} category={"/search?keyword="+this.state.keyW+"&"} page={parseInt(this.state.currentPage)}/> 
                : ""
            }
            </div>
        )
    }    
}
    
export default SearchPage;