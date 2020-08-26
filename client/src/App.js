import React from "react";
import {Route} from 'react-router-dom';
import Home from './components/home';
import Post from './components/post';
import Category from './components/category';
import NavbarComp from './components/navbar'

function App() {
  return (
    <div>
      <NavbarComp/>
      <Route path="/" exact component={Home} />
      <Route path="/post/:id" exact component={Post} />
      <Route path="/category/:category" exact component={Category} />
    </div>
  );
    
}


export default App;