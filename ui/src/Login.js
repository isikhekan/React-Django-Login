import React, { Component } from 'react'
import {userAuthenticate} from './apiUrls/userApi'
import Cookies from 'universal-cookie';
export const cookies = new Cookies();
export default class Login extends Component {
  state = {
    username: '',
    password: '',
    allUserDatas:{},
    isLogged:cookies.get('userDetails')
  }
  changeValue = (e)=>{
    this.setState({
        ...this.state,
        [e.target.id] : e.target.value
    })
  }
  componentDidUpdate(){
    this.state.isLogged ? 
    window.location.href = 'http://localhost:3000/'
    :
    console.log("didn't update")
  }
  authenticateUser = ()=>{
    fetch(userAuthenticate,{
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
        cookies.set('userDetails',result,{path:'/',expires:new Date(Date.now()+111111)});
        this.setState(
          {
            ...this.state,
            isLogged:cookies.get('userDetails')
          }
        )


    },(error)=>{
        console.log(error,'this is error')
    })
  }
  
  render() {
    console.log(this.authenticateUser)
    return (
      <div>
        <div>
          <input id='username' onChange={this.changeValue} className='bg-gray-700' placeholder='username' type="text" />
          <input id='password' onChange={this.changeValue}  placeholder='password' type="password" />
          <button onClick={this.authenticateUser} type='submit'>
            login
          </button> 
        </div>
      </div>
    )
  }
}
