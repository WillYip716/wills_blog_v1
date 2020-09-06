import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import img1 from "../static/1.jpeg";
import img2 from "../static/2.jpeg";
import img3 from "../static/3.jpeg";
import Moment from 'moment';
import Pagination from './pagination';


class Home extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            loading: true,
            posts: [],
            paginpage: 0
        };
    }

    componentDidMount() {
        var queryVar="";
        if(this.props.match.params.page){
            queryVar = "page=" + this.props.match.params.page;
        }
        axios.get('/posts'+queryVar)
          .then(res => {
            const posts = res.data.posts;
            this.setState((state) => ({
                loading: false,
                posts: posts,
                paginpage: parseInt(res.data.pages)
            }));  
          })
    }

    render(){
        let l = this.state.posts.length;
        Moment.locale('en');

        if(l > 3){
            l = 3;
        }

        const images = [img1,img2,img3];

        let items = [];
        for (var i = 0; i <l;i++) {
            items.push(
            <div className="card mb-8" key={this.state.posts[i]._id}>
                <img
                    className="card-img-top"
                    src={images[i]}
                    alt="slide"
                />
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
                    <h2>Latest Posts</h2>
                    {items}
                </div>  
            }
                <Pagination pages={this.state.paginpage} category={"/"} page={this.props.match.params.page ? parseInt(this.props.match.params.category): 1}/>
            </div>
        )
    }  
}

export default Home;