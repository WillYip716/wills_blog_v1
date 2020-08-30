import React from "react";
import {Route} from 'react-router-dom';
import Home from './components/home';
import Post from './components/post';
import Category from './components/category';
import NavbarComp from './components/navbar'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <NavbarComp/>
      <Route path="/" exact component={Home} />
      <Route path="/post/:id" exact component={Post} />
      <Route path="/category/:category" exact component={Category} />
      <Footer/>
    </div>
  );
    
}


export default App;