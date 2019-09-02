import React, { Component} from 'react';
import { Provider } from 'react-redux';
// import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

class App extends Component {
  render() {
    return (   
        <div className="App">
          <PostForm />
          <hr />
          <Posts />
        </div>
    );
  }
}

export default App;

