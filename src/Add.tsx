import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Userinfo } from './Type/type'

function Add() {
    const navigate=useNavigate();
    const location=useLocation()
    const data=location.state as Userinfo
    console.log(data);
  return (
    <div>
        <table>
            <thead>
                <tr><td>Email</td>
                <td>firstname</td>
                <td>lastname</td>
                <td>dob</td>
                    </tr>
            </thead>
            <tbody>
                <tr><td>{data.email}</td>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.dob}</td>
                    </tr>
            </tbody>
        </table>
        <button onClick={()=>{navigate("/")}}>Back</button>
    </div>
  )
}

export default Add