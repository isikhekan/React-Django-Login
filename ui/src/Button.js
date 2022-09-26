import React, { Component } from 'react'

export default class Button extends Component {

  render() {
    const {buttonText,to,onclick=()=>{}} = this.props
    console.log(onclick)
    return (
        <>
            <a onClick={()=>{
                onclick()
            }} className=' bg-blue-300 border-2 p-3 text-md rounded-md inline-block  w-auto'  href={to} >
                <span className='whitespace-nowrap'>{buttonText}</span>
            </a>
        </>
    )
  }
}