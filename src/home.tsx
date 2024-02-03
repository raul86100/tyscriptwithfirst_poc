import React, { useEffect, useState } from 'react';
import { Userinfo } from './Type/type';
import apifunction from './api_call/apifunction';
import { api } from './constant/api_const';
import { useNavigate } from 'react-router-dom';

 function Home() {
  const [data,setData]=useState<Userinfo[]>([]);
useEffect(()=>{
  const fetch=async()=>{
const mydata=await apifunction({url:api.baseurl+api.getall,method:"get",payload:{}});
setData((mydata.data as any) as Userinfo[] );
}



fetch();
})
const navigate=useNavigate();

const handlenavigate=(data:Userinfo)=>{

navigate("/add",{state:data})
}

  return (
    <div className="App">
      <table>
        <thead></thead>
        <tbody>
{data.map((item:Userinfo,index:number)=>{
  return <tr key={index}>
<td >{item.email}</td>
<td >{item.firstname}</td>
<td >{item.lastname}</td>
<td >{item.dob}</td>
<td >{item.address}</td>
<td><button onClick={()=>{handlenavigate(item)}}>Edit</button> </td>
<td><button>Delete</button></td>
    
  </tr>
})}


        </tbody>
      </table>
     
    </div>
  );
}
export default Home
