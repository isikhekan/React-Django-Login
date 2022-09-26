import React, { Component } from 'react'
import Button from './Button'
import { cookies } from './Login'
import { userLogout } from './apiUrls/userApi'

export default class Navbar extends Component {
    state = {
        isLogged:cookies.get('userDetails')
    }

  logout =()=>{
    fetch(userLogout)
    .then(response=>{
        console.log(response)
        response.json()
    })
    .then(result=>{
        document.cookie ='userDetails =; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        this.setState(
            {
                ...this.state,
                isLogged:cookies.get('userDetails')
            }
        )
        window.location.href= 'http://localhost:3000/'
    })
  }
  render() {
    return (
        <div className='navbar'>
            {
                this.state.isLogged ?    
                <div>
                    <Button buttonText='Home' to='/'/>    
                    <Button onclick={this.logout} buttonText='Log out' to='#'/>
                    <Button buttonText='Profile' to='/company/profile'/>
                    <Button buttonText='User' to='/company/users'/>

                </div>
                : 

               <div>
                    <Button buttonText='Home' to='/'/>
                    <Button buttonText = 'Login' to='/login'/>
                    <Button buttonText='Sign in' to='/register'/>
                </div>
            }
        </div>
    ) 
  }
}
