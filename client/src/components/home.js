import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../static/1.jpeg";
import img2 from "../static/2.jpeg";
import img3 from "../static/3.jpeg";
import Moment from 'moment';


class Home extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            loading: true,
            posts: []
        };
    }

    componentDidMount() {
        axios.get('/posts')
          .then(res => {
            const posts = res.data;
            this.setState((state) => ({
                loading: false,
                posts: posts
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
            <Carousel.Item key={this.state.posts[i]._id}>
                <img
                    className="d-block w-100"
                    src={images[i]}
                    alt="slide"
                />
                <Carousel.Caption>
                <Link to={`/post/${this.state.posts[i]._id}`} >
                    <h1>{this.state.posts[i].title}</h1>
                    <p>{this.state.posts[i].description}</p>
                    <p>{Moment(this.state.posts[i].timestamp).format('MMMM Do YYYY, h:mm:ss a')}</p>
                </Link>
                </Carousel.Caption>
            </Carousel.Item>
            )
        }
        return(
            <div>

            {this.state.loading        
                ? <h1>Hello i am loading</h1>
                :<Carousel>
                    {items}
                </Carousel>
            }
            </div>
        )
    }  
}

export default Home;