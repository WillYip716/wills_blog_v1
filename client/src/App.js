import React from "react";
import {Route} from 'react-router-dom';
import Home from './components/home';
import Post from './components/post';

function App() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/post/:id" exact component={Post} />
    </div>
  );
    
}


export default App;