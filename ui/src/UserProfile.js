import React, { Component } from 'react'
import { cookies } from './Login'
import Button from './Button'

export default class UserProfile extends Component {
    state = {
        userDetails : cookies.get('userDetails'),
    }
    componentDidMount(){
        this.setState(
            {
                userDetails:cookies.get('userDetails')
            }
        )
    }
  render() {
    const {userDetails} = this.state
    return (
        <div>
            {
                userDetails ? 
                <p> Welcome to your profile {userDetails.CompanyName}</p>
                :
                <p>there is no user <Button buttonText='Login Page' to='/login'/></p>
            }
        </div>
        
    )
    }
}
