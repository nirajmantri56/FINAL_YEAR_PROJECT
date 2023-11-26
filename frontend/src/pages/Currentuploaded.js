import axios from 'axios'
import React, { useEffect } from 'react'

export default function Currentuploaded() {
  const myproject = async() =>{
    try {
      const email = localStorage.getItem('email');
      const response = await axios.get(`http://localhost:8080/uploaded-by/${email}`)
      console.log('dataa', response.data)
    } catch (error) {
      console.log('error', error)
    }
  }
  useEffect(()=>{
   myproject()
  },[])
  return (
    <div>
       <li >hello</li>
      <li >hello</li>
      <li >hello</li>
      <li >hello</li>
      <li >hello</li>
      <li >hello</li>
      <li >hello</li>
      <li >hello</li>
      <li >hello</li>
      <li >hello</li>
      <li >hello</li>
      <li >hello</li>
      <li >hello</li>
      <li >hello</li>
      <li >hello</li>
      
    </div>
  )
}
