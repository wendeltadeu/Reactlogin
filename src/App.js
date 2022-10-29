import React from "react";
import './App.css';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      username: '',
      password: ''
    }
  }
  
  alterarUsername = e => {
    this.setState({username: e.target.value})
  }

  alterarPassword = e => {
    this.setState({password: e.target.value})
  }

  submeterForm = e => {
    console.log("Username: " + this.state.username)
    console.log("Password: " + this.state.password)
    e.preventDefault()
  }

  render(){
    return(
      <form onSubmit={this.submeterForm}>
        <input type="text" value={this.state.username} onChange={this.alterarUsername} placeholder="username" />
        <br />
        <input type="password" value={this.state.password} onChange={this.alterarPassword} placeholder="password"/>
        <br />
        <input type="submit" value="Login" />
      </form>
    )
  }

}

export default App;
