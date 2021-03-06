import React from "react";
import {Route} from 'react-router-dom';
import Home from './components/home';
import Post from './components/post';
import Category from './components/category';
import NavbarComp from './components/navbar';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import SearchPage from './components/searchpage';


function App() {
  return (
    <div style={{backgroundColor:"#EEEEEE"}}>
      <NavbarComp/>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Route path="/" exact component={Home} />
            <Route path="/post/:id" exact component={Post} />
            <Route path="/category/:category" exact component={Category} />
            <Route path="/search" exact component={SearchPage} />
          </div>
          <Sidebar/>
        </div>
      </div>
      <Footer/>
    </div>
  );
    
}


export default App;