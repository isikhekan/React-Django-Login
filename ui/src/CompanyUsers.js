import React, { Component } from 'react'
import { companyUsersAPI } from './apiUrls/userApi'
import { cookies } from './Login'
export default class CompanyUsers extends Component {
  state = {
    users : []
  }
  getCompanyUsers = ()=>{
    
    fetch(companyUsersAPI + cookies.get('userDetails').CompanyOwnerId + '/users')
    .then(response=>
        {
            return response.json()
        })
    .then(data=>{
        this.setState(
            {
                users:data,
            }
        )
    })
  }
  componentDidMount(){
    this.getCompanyUsers()
  }

  
  render(){
    const {users} = this.state
    return(
        <div>
            {
                users.map((user,idx)=>{
                    return <p key={idx}>{user.username}</p>
                })
            }
        </div>
    )

  }
  
}
