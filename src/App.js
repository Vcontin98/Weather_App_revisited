import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import Login from './components/Login'
import fire from './config/Firebase'


class App extends Component {
  
  constructor() {
    super();
    this.state = ({
      user: null
    });
    this.authListener = this.authListener.bind(this);
  }
  componentDidMount() {
    this.authListener();
  }

  
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }


  render() {
  
    return (
        <div className="App">
        {this.state.user ? (<Main />) : (<Login />)}
      </div>
    )
}
}

 export default App;