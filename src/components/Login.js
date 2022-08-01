/* eslint-disable no-unused-expressions */
import React from 'react';
import fire from '../config/Firebase'

const initialState = {
  email: '',
  password: '',
  passError: ''
}

export default class Login extends React.Component {
  state = initialState;
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  

  handleChange(e) {
    this.setState({ 
            [e.target.name]: e.target.value
        });
    }

    validate = () => {
      let passError = ""

      if(this.state.password.length < 6 || this.state.password.length > 100) {
        passError = 'invalid password!'
      } 
      if (passError) {
        this.setState({passError});
        return false;
      }

      // return true
    }

    handleSubmit(e) {
      e.preventDefault()
    }

  login(e) {
    e.preventDefault();

    
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }
    

  signup(e){
    e.preventDefault();
    
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    })
    .then((u)=>{console.log(u)})
    
    .catch((error) => {
        console.log(error);
      }) 

      const isValid = this.validate()

      if(isValid) {
        console.log(this.state)
        this.setState(initialState)
        
      }
  }
  render() {
    return (
       <div className="loginPage">
            <form 
                className="formStyle"
                onSubmit={this.handleSubmit}
                >
                  <input 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        type="email" 
                        className="form-control"  
                        placeholder="Email"
                        name="email"
                    />
                    <input 
                          value={this.state.password} 
                          onChange={this.handleChange} 
                          type="password" 
                          className="form-control" 
                          placeholder="Password"
                          name="password" 
                    />
                          <div className="errorMessage">
                              {this.state.passError}
                          </div> 

                        <div className="btn-container">
                          <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
                          <button type="submit" onClick={this.signup} className="btn btn-success">SignUp</button>
                        </div> 
                         
                </form>             
        </div>
    );
  }
}