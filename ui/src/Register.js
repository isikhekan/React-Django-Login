import React, { Component } from 'react'
import {userRegister} from './apiUrls/userApi'
export default class Login extends Component {
  state = {
    username: '',
    password: '',
    repassword:'',
    email:'',
  }
  changeValue = (e)=>{
    this.setState({
        ...this.state,
        [e.target.id] : e.target.value
    })
  }


  registerUser = ()=>{
    fetch(userRegister,{
        method:'POST',
        headers:
        {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(this.state)
    })
    .then((response) => {
      console.log(response)
      return response.json()
  
    })
    .then(result=>{
        console.log(result,'this is result')
    },(error)=>{
        console.log(error,'this is error')
    })
  }
  render() {
    return (
      <div>
            <input id='username' onChange={this.changeValue} className='bg-gray-700' placeholder='username' type="text" />
            <input id='password' onChange={this.changeValue}  placeholder='password' type="password" />
            <input id='repassword' onChange={this.changeValue}  placeholder='password again' type="password" />
            <input id='email' onChange={this.changeValue}  placeholder='email'type="email" />
            <button onClick={this.registerUser} type='submit'>
                login
            </button>
      </div>
    )
  }
}
